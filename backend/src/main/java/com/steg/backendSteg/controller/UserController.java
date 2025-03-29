package com.steg.backendSteg.controller;

import com.steg.backendSteg.domain.User;
import com.steg.backendSteg.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/{userId}")
    public User getUserById(@PathVariable String userId) {
        return userService.getUserById(userId);
    }

    @GetMapping
    public List<User> getAllUsersExceptAdmin() {
        return userService.getAllUsersExceptAdmin();
    }

    @DeleteMapping("/{userId}")
    public void deleteUserById(@PathVariable String userId) {
        userService.deleteUser(userId);
    }

    @PutMapping("/{id}")
    public void updateUser(@PathVariable String id, @RequestBody User userRequest) {
        System.out.println("user request :" + userRequest);
        userService.updateUser(id, userRequest);
    }
}
