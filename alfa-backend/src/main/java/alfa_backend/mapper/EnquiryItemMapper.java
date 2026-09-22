package alfa_backend.mapper;

import alfa_backend.dto.EnquiryItemRequest;
import alfa_backend.entity.EnquiryItem;

public class EnquiryItemMapper {

    public static EnquiryItem toEntity(
            EnquiryItemRequest request
    ) {
        EnquiryItem item = new EnquiryItem();

        item.setQuantity(request.quantity());

        return item;
    }
}