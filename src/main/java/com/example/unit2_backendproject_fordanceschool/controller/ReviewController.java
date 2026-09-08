package com.example.unit2_backendproject_fordanceschool.controller;

import com.example.unit2_backendproject_fordanceschool.model.Level;
import com.example.unit2_backendproject_fordanceschool.model.Review;
import com.example.unit2_backendproject_fordanceschool.repository.LevelRepository;
import com.example.unit2_backendproject_fordanceschool.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reviews")

public class ReviewController {
@Autowired
    private ReviewRepository reviewRepository;
@Autowired
    private LevelRepository levelRepository;
//Endpoint to get all the reviews
@GetMapping
    public List<Review> findAll() {
        return reviewRepository.findAll();
}
//Endpoint to create/post a review
@PostMapping
    public Review createReview(Review review) {
        return reviewRepository.save(review);
    }
    //Endpoint to get reviews by level
    @GetMapping("/level/{levelId}")
    public List<Review> getReviewsByLevel(@PathVariable Long levelId) {
    Level level = levelRepository.findById(levelId).orElse(null);
        if (level == null) {
            return List.of();
        }
        return level.getReviews();
    }
    //Endpoint to get review by id
    @GetMapping("/{Id}")
    public Review getReviewById(@PathVariable Long id) {
    return reviewRepository.findById(id).orElse(null);
    }
    }




