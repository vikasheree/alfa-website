package alfa_backend.service;

import alfa_backend.dto.EnquiryItemRequest;
import alfa_backend.dto.EnquiryRequest;
import alfa_backend.dto.EnquiryResponse;
import alfa_backend.entity.Enquiry;
import alfa_backend.entity.EnquiryItem;
import alfa_backend.entity.Product;
import alfa_backend.exception.ResourceNotFoundException;
import alfa_backend.mapper.EnquiryMapper;
import alfa_backend.repository.EnquiryItemRepository;
import alfa_backend.repository.EnquiryRepository;
import alfa_backend.repository.ProductRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class EnquiryService {

    private final EnquiryRepository enquiryRepository;
    private final EnquiryItemRepository enquiryItemRepository;
    private final ProductRepository productRepository;

    private static final Logger logger =
        LoggerFactory.getLogger(EnquiryService.class);

    public EnquiryService(
            EnquiryRepository enquiryRepository,
            EnquiryItemRepository enquiryItemRepository,
            ProductRepository productRepository
    ) {
        this.enquiryRepository = enquiryRepository;
        this.enquiryItemRepository = enquiryItemRepository;
        this.productRepository = productRepository;
    }

    

    @Transactional
public EnquiryResponse createEnquiry(EnquiryRequest request) {

    logger.info("Creating new customer enquiry");

    Enquiry enquiry = EnquiryMapper.toEntity(request);

       Enquiry savedEnquiry = enquiryRepository.save(enquiry);

logger.info("Enquiry created successfully with id: {}", savedEnquiry.getId());

        if (request.items() != null) {

            for (EnquiryItemRequest itemRequest : request.items()) {

                Product product = productRepository.findById(itemRequest.productId())
                       .orElseThrow(() -> {

    logger.warn(
            "Product not found while creating enquiry: {}",
            itemRequest.productId()
    );

    return new ResourceNotFoundException(
            "Product not found: " + itemRequest.productId()
    );
});

                EnquiryItem enquiryItem = new EnquiryItem();

                enquiryItem.setEnquiry(savedEnquiry);
                enquiryItem.setProduct(product);
                enquiryItem.setQuantity(itemRequest.quantity());

                enquiryItemRepository.save(enquiryItem);
            }
            
            
        }
        
        

        return EnquiryMapper.toResponse(savedEnquiry);
    }
}