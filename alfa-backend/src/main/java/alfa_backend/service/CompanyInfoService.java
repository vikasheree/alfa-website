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

    public CompanyInfo createCompanyInfo(CompanyInfo companyInfo) {
        return companyInfoRepository.save(companyInfo);
    }

    public CompanyInfo updateCompanyInfo(Long id, CompanyInfo updatedCompanyInfo) {
        CompanyInfo existingCompanyInfo = getCompanyInfo(id);

        existingCompanyInfo.setCompanyName(updatedCompanyInfo.getCompanyName());
        existingCompanyInfo.setAboutDescription(updatedCompanyInfo.getAboutDescription());
        existingCompanyInfo.setPhone1(updatedCompanyInfo.getPhone1());
        existingCompanyInfo.setPhone2(updatedCompanyInfo.getPhone2());
        existingCompanyInfo.setPhone3(updatedCompanyInfo.getPhone3());
        existingCompanyInfo.setEmail1(updatedCompanyInfo.getEmail1());
        existingCompanyInfo.setEmail2(updatedCompanyInfo.getEmail2());
        existingCompanyInfo.setAddress(updatedCompanyInfo.getAddress());
        existingCompanyInfo.setGoogleMapsUrl(updatedCompanyInfo.getGoogleMapsUrl());
        existingCompanyInfo.setLatitude(updatedCompanyInfo.getLatitude());
        existingCompanyInfo.setLongitude(updatedCompanyInfo.getLongitude());
        existingCompanyInfo.setWhatsappNumber(updatedCompanyInfo.getWhatsappNumber());

        return companyInfoRepository.save(existingCompanyInfo);
    }

    public void deleteCompanyInfo(Long id) {
        companyInfoRepository.deleteById(id);
    }
}