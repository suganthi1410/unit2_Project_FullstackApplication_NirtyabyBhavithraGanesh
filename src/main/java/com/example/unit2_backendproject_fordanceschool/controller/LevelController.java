package com.example.unit2_backendproject_fordanceschool.controller;

import com.example.unit2_backendproject_fordanceschool.model.Level;
import com.example.unit2_backendproject_fordanceschool.repository.LevelRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/levels")
public class LevelController {
    private final LevelRepository levelRepository;
    public LevelController(LevelRepository levelRepository) {
        this.levelRepository = levelRepository;
        }
       //Endpoint to get all levels
        @GetMapping
        public List<Level> getAllLevels() {
        return levelRepository.findAll();
        }
       //Endpoint to create a level
        @PostMapping
        public Level createLevel(@RequestBody Level level) {
        return levelRepository.save(level);
        }

}
