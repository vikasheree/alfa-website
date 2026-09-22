package alfa_backend.service;

import alfa_backend.repository.AdminUserRepository;
import org.springframework.stereotype.Service;

@Service
public class AdminUserService {

    private final AdminUserRepository adminUserRepository;

    public AdminUserService(AdminUserRepository adminUserRepository) {
        this.adminUserRepository = adminUserRepository;
    }
}