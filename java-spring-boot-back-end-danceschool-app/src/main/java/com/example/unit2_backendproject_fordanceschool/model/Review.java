package com.example.unit2_backendproject_fordanceschool.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import java.time.LocalDate;

//creating table for review that stores the reviews of the reviewers(students/parents)
//it includes name, comment, rating, date and
//the level of the reviewer(student/parent) which is a foreign key to the level table
@Entity
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    //field names,rating,comment,date are the columns of the review table
    private String name;
    private Integer rating;
    private String comment;
    private LocalDate date;
    //stores which user writes the review
    private String username;

//foreign key to the level table
    @ManyToOne
    @JoinColumn(name = "level_id")
    @JsonBackReference
    private Level level;

    public Review() {}

//constructor for the review table
    public Review(String name, Integer rating, String comment, LocalDate date, Level level,String username) {
        this.name=name;
        this.rating=rating;
        this.comment=comment;
        this.date=date;
        this.level=level;
        this.username = username;
}
//getters and setters for the columns of the review table


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public Level getLevel() {
        return level;
    }

    public void setLevel(Level level) {
        this.level = level;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
