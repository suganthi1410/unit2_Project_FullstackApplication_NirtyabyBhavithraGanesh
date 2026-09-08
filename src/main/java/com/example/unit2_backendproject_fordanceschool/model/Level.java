package com.example.unit2_backendproject_fordanceschool.model;

import jakarta.persistence.*;

import java.util.List;

//creating table for level
@Entity
public class Level {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    //one level may have list of reviews(onetomany relationship)
    // parent:level,child:review
    @OneToMany(mappedBy = "level")
    private List<Review> reviews;
    public Level () {}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Review> getReviews() {
        return reviews;
    }

    public void setReviews(List<Review> reviews) {
        this.reviews = reviews;
    }
}
