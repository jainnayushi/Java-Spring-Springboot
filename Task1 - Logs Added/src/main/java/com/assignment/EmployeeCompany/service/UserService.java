package com.assignment.EmployeeCompany.service;

import com.assignment.EmployeeCompany.entity.User;
import com.assignment.EmployeeCompany.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepo;

    private List<User> users =  new ArrayList<>();
   public UserService(){
       users.add(new User(101, "User1","a", "pwd1"));
       users.add(new User(102, "User2","b", "pwd2"));
       users.add(new User(103, "User3","c", "pwd3"));
    }
    public List<User> getUsers(){
        return this.users;
    }
}
