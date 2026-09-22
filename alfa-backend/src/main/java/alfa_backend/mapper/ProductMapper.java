package alfa_backend.mapper;

import alfa_backend.dto.ProductImageResponse;
import alfa_backend.dto.ProductResponse;
import alfa_backend.dto.ProductSpecificationResponse;
import alfa_backend.entity.Product;

public class ProductMapper {

    public static ProductResponse toResponse(Product product) {

        var images = product.getImages()
                .stream()
                .map(image -> new ProductImageResponse(
                        image.getId(),
                        image.getImageUrl(),
                        image.getAltText(),
                        image.getDisplayOrder(),
                        image.getIsPrimary()
                ))
                .toList();

        var specifications = product.getSpecifications()
                .stream()
                .map(spec -> new ProductSpecificationResponse(
                        spec.getId(),
                        spec.getSpecName(),
                        spec.getSpecValue(),
                        spec.getDisplayOrder()
                ))
                .toList();

        return new ProductResponse(
                product.getId(),
                product.getName(),
                product.getSlug(),
                product.getProductCode(),
                product.getPrice(),
                product.getPriceUnit(),
                product.getShortDescription(),
                product.getDescription(),
                product.getIsInStock(),
                product.getDisplayOrder(),
                product.getIsActive(),
                images,
                specifications
        );
    }
}