package alfa_backend.service;

import alfa_backend.repository.EnquiryItemRepository;
import org.springframework.stereotype.Service;

@Service
public class EnquiryItemService {

    private final EnquiryItemRepository enquiryItemRepository;

    public EnquiryItemService(EnquiryItemRepository enquiryItemRepository) {
        this.enquiryItemRepository = enquiryItemRepository;
    }
}