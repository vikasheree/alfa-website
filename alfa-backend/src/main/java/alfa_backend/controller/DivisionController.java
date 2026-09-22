package alfa_backend.controller;

import alfa_backend.dto.DivisionResponse;
import alfa_backend.service.DivisionService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/divisions")
public class DivisionController {

    private final DivisionService divisionService;

    public DivisionController(DivisionService divisionService) {
        this.divisionService = divisionService;
    }

    @GetMapping
    public List<DivisionResponse> getAllDivisions() {
        return divisionService.getAllDivisions();
    }

    @GetMapping("/{id}")
    public DivisionResponse getDivisionById(@PathVariable Long id) {
        return divisionService.getDivisionById(id);
    }
}