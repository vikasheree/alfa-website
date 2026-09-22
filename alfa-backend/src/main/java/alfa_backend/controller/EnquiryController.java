package alfa_backend.controller;

import alfa_backend.dto.EnquiryRequest;
import alfa_backend.dto.EnquiryResponse;
import alfa_backend.service.EnquiryService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/enquiries")
public class EnquiryController {

    private final EnquiryService enquiryService;

    public EnquiryController(EnquiryService enquiryService) {
        this.enquiryService = enquiryService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public EnquiryResponse createEnquiry(
            @Valid @RequestBody EnquiryRequest request
    ) {
        return enquiryService.createEnquiry(request);
    }
}