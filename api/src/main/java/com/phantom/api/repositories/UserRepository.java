package com.phantom.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.phantom.api.entities.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}
