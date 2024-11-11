package com.phantom.api.services;

import com.phantom.api.entities.Academy;
import com.phantom.api.entities.Address;
import com.phantom.api.entities.Admin;
import com.phantom.api.entities.dto.request.AcademyRequestDTO;
import com.phantom.api.repositories.AcademyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AcademyService {

    private final AcademyRepository academyRepository;
    private final AdminService adminService;

    public List<Academy> getAcademies(Long adminId) {
        return academyRepository.findByAdminId(adminId);
    }

    public Academy createAcademy(AcademyRequestDTO academyDTO) {
        return academyRepository.save(newAcademy(academyDTO));
    }

    private Academy newAcademy(AcademyRequestDTO dto) {
        Admin admin = adminService.findById(dto.getAdminId());
        Academy academy = new Academy();
        academy.setAdmin(admin);
        academy.setBannerUrl(dto.getBannerUrl());

        Address address = new Address();
        address.setCity(dto.getCity());
        address.setState(dto.getState());
        address.setZip(dto.getZip());
        address.setStreet(dto.getStreet());

        academy.setAddress(address);
        return academy;
    }

}
