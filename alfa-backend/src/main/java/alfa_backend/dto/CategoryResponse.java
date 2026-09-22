package alfa_backend.dto;

import java.util.List;

public record CategoryResponse(
        Long id,
        String name,
        String slug,
        String description,
        String imageUrl,
        Integer displayOrder,
        Boolean isActive,
        List<ProductResponse> products
) {
}