package alfa_backend.dto;

public record ProductImageResponse(
        Long id,
        String imageUrl,
        String altText,
        Integer displayOrder,
        Boolean isPrimary
) {
}