package com.example.unit2_backendproject_fordanceschool.controller;

import com.example.unit2_backendproject_fordanceschool.dto.ReviewDto;
import com.example.unit2_backendproject_fordanceschool.model.Level;
import com.example.unit2_backendproject_fordanceschool.model.Review;
import com.example.unit2_backendproject_fordanceschool.repository.LevelRepository;
import com.example.unit2_backendproject_fordanceschool.repository.ReviewRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
@PostMapping("/post")
    public ResponseEntity<Review> createReview(@Valid @RequestBody ReviewDto dto) {
    Level level = levelRepository.findById(dto.getLevelId()).orElse(null);
    if (level == null) {
        throw new RuntimeException("Level not found with the id:" + dto.getLevelId());
    }
    Review review = new Review();
    review.setName(dto.getName());
    review.setComment(dto.getComment());
    review.setDate(dto.getDate());
    review.setRating(dto.getRating());
    review.setLevel(level);

    Review savedReview = reviewRepository.save(review);

    return new ResponseEntity<>(savedReview, HttpStatus.CREATED);
    }

    //Endpoint to get reviews by level
    @GetMapping("/level/{levelId}")
    public List<Review> getReviewsByLevel(@PathVariable int levelId) {
    Level level = levelRepository.findById(levelId).orElse(null);
        if (level == null) {
            return List.of();
        }
        return level.getReviews();
    }

    //Endpoint to get review by id
    @GetMapping("/{id}")
    public Review getReviewById(@PathVariable int id) {
    return reviewRepository.findById(id).orElse(null);
    }

    //Endpoint to delete review by id
    @DeleteMapping("/{id}")
    public void deleteReviewById(@PathVariable int id) {
    reviewRepository.deleteById(id);
    }
    }




