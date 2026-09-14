package com.example.unit2_backendproject_fordanceschool.controller;

import com.example.unit2_backendproject_fordanceschool.model.User;
import com.example.unit2_backendproject_fordanceschool.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:*")
@RestController
@RequestMapping("/login")
public class UserLoginController {
    private final UserService userService;

    public UserLoginController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity<String> login(@RequestBody User user) {

        boolean success = userService.login(user.getUsername(), user.getPassword());

        if (!success) {
            return ResponseEntity.status(401).body("Invalid credentials");
        }

        return ResponseEntity.ok("Login successful");
    }
}


