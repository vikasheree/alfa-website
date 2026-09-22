package alfa_backend.service;

import alfa_backend.dto.DivisionResponse;
import alfa_backend.entity.Division;
import alfa_backend.exception.ResourceNotFoundException;
import alfa_backend.mapper.DivisionMapper;
import alfa_backend.repository.DivisionRepository;
import org.springframework.stereotype.Service;
import alfa_backend.exception.ResourceNotFoundException;

import java.util.List;

@Service
public class DivisionService {

    private final DivisionRepository divisionRepository;

    public DivisionService(DivisionRepository divisionRepository) {
        this.divisionRepository = divisionRepository;
    }

    public List<DivisionResponse> getAllDivisions() {
        return divisionRepository.findAll()
                .stream()
                .map(DivisionMapper::toResponse)
                .toList();
    }

    public DivisionResponse getDivisionById(Long id) {
        Division division = divisionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Division not found"));

        return DivisionMapper.toResponse(division);
    }
}