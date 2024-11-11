package com.phantom.api.resources;

import com.phantom.api.entities.Academy;
import com.phantom.api.entities.Address;
import com.phantom.api.entities.dto.request.AcademyRequestDTO;
import com.phantom.api.entities.dto.response.AcademyResponseDTO;
import com.phantom.api.services.AcademyService;
import com.phantom.api.services.AdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/academies")
@PreAuthorize("hasRole('ADMIN')")
@RequiredArgsConstructor
public class AcademyResource {

    private final AdminService adminService;
    private final AcademyService academyService;

    @GetMapping("/{adminId}")
    public ResponseEntity<List<Academy>> getAcademiesByAdminId(@PathVariable Long adminId) {
        List<Academy> academies = academyService.getAcademies(adminId);
        return ResponseEntity.ok(academies);
    }

    @PostMapping
    public ResponseEntity<AcademyResponseDTO> createAcademy(@RequestBody AcademyRequestDTO academyDTO) {
        return ResponseEntity.ok(new AcademyResponseDTO(academyService.createAcademy(academyDTO)));
    }
}
