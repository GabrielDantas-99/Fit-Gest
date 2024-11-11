package com.phantom.api.services;


import com.phantom.api.entities.Admin;
import com.phantom.api.repositories.AdminRepository;
import com.phantom.api.services.exceptions.ObjectnotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AdminService {

    private final AdminRepository adminRepository;

    public Admin findById(Long adminId) {
        Optional<Admin> obj = adminRepository.findById(adminId);
        return obj.orElseThrow(() -> new ObjectnotFoundException("Objeto de id: " + adminId + " não encontrado!"));
    }
}
