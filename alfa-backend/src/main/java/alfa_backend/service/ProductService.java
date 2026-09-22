package alfa_backend.service;

import alfa_backend.dto.ProductResponse;
import alfa_backend.entity.Product;
import alfa_backend.exception.ResourceNotFoundException;
import alfa_backend.mapper.ProductMapper;
import alfa_backend.repository.ProductRepository;
import org.springframework.stereotype.Service;
import alfa_backend.exception.ResourceNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<ProductResponse> getAllProducts() {

    logger.info("Fetching all products");

    return productRepository.findAll()
            .stream()
            .map(ProductMapper::toResponse)
            .toList();
}

    public ProductResponse getProductById(Long id) {

    logger.info("Fetching product with id: {}", id);

    Product product = productRepository.findById(id)
            .orElseThrow(() -> {
                logger.warn("Product not found with id: {}", id);
                return new ResourceNotFoundException("Product not found");
            });

    return ProductMapper.toResponse(product);
}
    

    private static final Logger logger =
        LoggerFactory.getLogger(ProductService.class);
}