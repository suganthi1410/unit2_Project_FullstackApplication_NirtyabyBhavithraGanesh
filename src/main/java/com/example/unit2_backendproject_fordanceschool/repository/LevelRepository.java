package com.example.unit2_backendproject_fordanceschool.repository;

import com.example.unit2_backendproject_fordanceschool.model.Level;
import org.springframework.data.jpa.repository.JpaRepository;

//creating repository for level table helps for CRUD operations
    public interface LevelRepository extends JpaRepository<Level, Long> {
    }

