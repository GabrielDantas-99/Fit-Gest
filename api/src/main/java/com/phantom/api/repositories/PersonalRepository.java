package com.phantom.api.repositories;

import com.phantom.api.entities.Personal;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonalRepository extends JpaRepository<Personal, Long> {
}
