package alfa_backend.exception;

import java.time.OffsetDateTime;

public record ApiErrorResponse(
        int status,
        String message,
        OffsetDateTime timestamp
) {
}