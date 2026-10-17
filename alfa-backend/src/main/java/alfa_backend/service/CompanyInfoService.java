package alfa_backend.service;

import alfa_backend.entity.CompanyInfo;
import alfa_backend.repository.CompanyInfoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompanyInfoService {

    private final CompanyInfoRepository companyInfoRepository;

    public CompanyInfoService(CompanyInfoRepository companyInfoRepository) {
        this.companyInfoRepository = companyInfoRepository;
    }

    public List<CompanyInfo> getAllCompanyInfo() {
        return companyInfoRepository.findAll();
    }

    public CompanyInfo getCompanyInfo(Long id) {
        return companyInfoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Company information not found"));
    }
}
