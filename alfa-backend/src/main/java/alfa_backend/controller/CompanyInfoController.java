package alfa_backend.controller;

import alfa_backend.entity.CompanyInfo;
import alfa_backend.service.CompanyInfoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/company-info")
public class CompanyInfoController {

    private final CompanyInfoService companyInfoService;

    public CompanyInfoController(CompanyInfoService companyInfoService) {
        this.companyInfoService = companyInfoService;
    }

    @GetMapping
    public List<CompanyInfo> getAllCompanyInfo() {
        return companyInfoService.getAllCompanyInfo();
    }

    @GetMapping("/{id}")
    public CompanyInfo getCompanyInfo(@PathVariable Long id) {
        return companyInfoService.getCompanyInfo(id);
    }
}
