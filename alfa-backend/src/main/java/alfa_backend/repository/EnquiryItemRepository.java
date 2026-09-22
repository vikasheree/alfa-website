package alfa_backend.repository;

import alfa_backend.entity.EnquiryItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EnquiryItemRepository extends JpaRepository<EnquiryItem, Long> {
}