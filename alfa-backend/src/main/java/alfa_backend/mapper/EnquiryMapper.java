package alfa_backend.mapper;

import alfa_backend.dto.EnquiryRequest;
import alfa_backend.dto.EnquiryResponse;
import alfa_backend.entity.Enquiry;

public class EnquiryMapper {

    public static Enquiry toEntity(EnquiryRequest request) {

        Enquiry enquiry = new Enquiry();

        enquiry.setCustomerName(request.customerName());
        enquiry.setEmail(request.email());
        enquiry.setPhone(request.phone());
        enquiry.setCompanyName(request.companyName());
        enquiry.setMessage(request.message());
        enquiry.setStatus("NEW");

        return enquiry;
    }

    public static EnquiryResponse toResponse(Enquiry enquiry) {

        return new EnquiryResponse(
        enquiry.getId(),
        enquiry.getCustomerName(),
        enquiry.getEmail(),
        enquiry.getPhone(),
        enquiry.getCompanyName(),
        enquiry.getMessage(),
        enquiry.getStatus(),
        enquiry.getCreatedAt()
);
    }
}