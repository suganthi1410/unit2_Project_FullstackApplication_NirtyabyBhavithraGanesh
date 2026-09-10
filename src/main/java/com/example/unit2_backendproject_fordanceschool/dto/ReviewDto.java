package com.example.unit2_backendproject_fordanceschool.dto;

import org.antlr.v4.runtime.misc.NotNull;

import java.time.LocalDate;

public class ReviewDto {
    @NotNull
    private String name;
    @NotNull
    private int rating;
    @NotNull
    private String comment;
    @NotNull
    private LocalDate date;
    @NotNull
    private int levelId;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
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

    public int getLevelId() {
        return levelId;
    }

    public void setLevelId(int levelId) {
        this.levelId = levelId;
    }
}
