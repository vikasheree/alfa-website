package alfa_backend.mapper;

import alfa_backend.dto.DivisionResponse;
import alfa_backend.entity.Division;

public class DivisionMapper {

    public static DivisionResponse toResponse(Division division) {

        var categories = division.getCategories()
                .stream()
                .map(CategoryMapper::toResponse)
                .toList();

        return new DivisionResponse(
                division.getId(),
                division.getName(),
                division.getSlug(),
                division.getDescription(),
                division.getImageUrl(),
                division.getDisplayOrder(),
                division.getIsActive(),
                categories
        );
    }
}