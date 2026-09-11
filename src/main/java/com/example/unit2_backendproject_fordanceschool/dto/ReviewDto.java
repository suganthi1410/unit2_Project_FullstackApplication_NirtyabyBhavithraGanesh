package com.example.unit2_backendproject_fordanceschool.dto;



import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;

public class ReviewDto {
    @NotNull
    private String name;
    @NotNull
    private Integer rating;
    @NotNull
    private String comment;
    @NotNull
    private LocalDate date;
    @NotNull
    private Integer levelId;

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
    public Integer getLevelId() {
        return levelId;
    }
    public void setLevelId(Integer levelId) {
        this.levelId = levelId;
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


}
