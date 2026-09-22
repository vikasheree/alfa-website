package alfa_backend.exception;

import java.time.OffsetDateTime;
import java.util.Map;

public record ValidationErrorResponse(
        int status,
        String message,
        Map<String, String> errors,
        OffsetDateTime timestamp
) {
}