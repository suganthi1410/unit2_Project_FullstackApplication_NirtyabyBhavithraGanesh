package com.example.unit2_backendproject_fordanceschool.controller;

import com.example.unit2_backendproject_fordanceschool.model.Review;
import com.example.unit2_backendproject_fordanceschool.repository.LevelRepository;
import com.example.unit2_backendproject_fordanceschool.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/reviews")

public class ReviewController {
@Autowired
    private ReviewRepository reviewRepository;
@Autowired
    private LevelRepository levelRepository;
@GetMapping
    public List<Review> findAll() {
        return reviewRepository.findAll();
}
@PostMapping
    public Review createReview(Review review) {
        return reviewRepository.save(review);
    }

}
