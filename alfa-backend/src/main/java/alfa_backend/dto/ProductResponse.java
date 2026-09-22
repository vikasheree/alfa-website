package alfa_backend.dto;

import java.math.BigDecimal;
import java.util.List;

public record ProductResponse(
        Long id,
        String name,
        String slug,
        String productCode,
        BigDecimal price,
        String priceUnit,
        String shortDescription,
        String description,
        Boolean isInStock,
        Integer displayOrder,
        Boolean isActive,
        List<ProductImageResponse> images,
        List<ProductSpecificationResponse> specifications
) {
}