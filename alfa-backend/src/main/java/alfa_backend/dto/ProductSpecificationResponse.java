package alfa_backend.dto;

public record ProductSpecificationResponse(
        Long id,
        String specName,
        String specValue,
        Integer displayOrder
) {
}