package alfa_backend.mapper;

import alfa_backend.dto.CategoryResponse;
import alfa_backend.entity.Category;

public class CategoryMapper {

    public static CategoryResponse toResponse(Category category) {

        var products = category.getProducts()
                .stream()
                .map(ProductMapper::toResponse)
                .toList();

        return new CategoryResponse(
                category.getId(),
                category.getName(),
                category.getSlug(),
                category.getDescription(),
                category.getImageUrl(),
                category.getDisplayOrder(),
                category.getIsActive(),
                products
        );
    }
}