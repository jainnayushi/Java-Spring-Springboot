package com.assignment.EmployeeCompany.controller;

import com.assignment.EmployeeCompany.entity.User;
import com.assignment.EmployeeCompany.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.List;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/user")
    public List<User> getUser(){
        return userService.getUsers();
    }

    @GetMapping("/currentUser")
    public String getCurrentUser(Principal principal){
        return principal.getName();
    }
}
