package com.example.unit2_backendproject_fordanceschool.repository;

import com.example.unit2_backendproject_fordanceschool.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;
//creating interface for review table that helps in CRUD operations
    public interface ReviewRepository extends JpaRepository<Review, Integer> {
    }
