package alfa_backend.dto;

import java.time.LocalDateTime;

public record EnquiryResponse(
        Long id,
        String customerName,
        String email,
        String phone,
        String companyName,
        String message,
        String status,
        LocalDateTime createdAt
) {
}