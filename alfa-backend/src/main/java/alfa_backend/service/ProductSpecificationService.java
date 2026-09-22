package alfa_backend.service;

import alfa_backend.repository.ProductSpecificationRepository;
import org.springframework.stereotype.Service;

@Service
public class ProductSpecificationService {

    private final ProductSpecificationRepository productSpecificationRepository;

    public ProductSpecificationService(ProductSpecificationRepository productSpecificationRepository) {
        this.productSpecificationRepository = productSpecificationRepository;
    }
}