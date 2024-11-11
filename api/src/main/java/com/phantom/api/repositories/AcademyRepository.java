package com.phantom.api.repositories;

import com.phantom.api.entities.Academy;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AcademyRepository extends JpaRepository<Academy, Long> {

    List<Academy> findByAdminId(Long adminId);

}
