package com.example.unit2_backendproject_fordanceschool.repository;

import com.example.unit2_backendproject_fordanceschool.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByUsername(String username);
}