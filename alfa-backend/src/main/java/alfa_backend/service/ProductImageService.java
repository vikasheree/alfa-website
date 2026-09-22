package alfa_backend.service;

import alfa_backend.repository.ProductImageRepository;
import org.springframework.stereotype.Service;

@Service
public class ProductImageService {

    private final ProductImageRepository productImageRepository;

    public ProductImageService(ProductImageRepository productImageRepository) {
        this.productImageRepository = productImageRepository;
    }
}