package alfa_backend.service;

import alfa_backend.dto.CategoryResponse;
import alfa_backend.entity.Category;
import alfa_backend.mapper.CategoryMapper;
import alfa_backend.repository.CategoryRepository;
import org.springframework.stereotype.Service;
import alfa_backend.exception.ResourceNotFoundException;

import java.util.List;

@Service
public class CategoryService {

    private final CategoryRepository categoryRepository;

    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public List<CategoryResponse> getAllCategories() {
        return categoryRepository.findAll()
                .stream()
                .map(CategoryMapper::toResponse)
                .toList();
    }

    public CategoryResponse getCategoryById(Long id) {
        Category category = categoryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Category not found"));

        return CategoryMapper.toResponse(category);
    }
}