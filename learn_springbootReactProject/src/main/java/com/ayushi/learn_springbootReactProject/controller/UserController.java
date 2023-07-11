package com.ayushi.learn_springbootReactProject.controller;

import com.ayushi.learn_springbootReactProject.exception.UserNotFoundException;
import com.ayushi.learn_springbootReactProject.model.User;
import com.ayushi.learn_springbootReactProject.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class UserController {
    @Autowired
    private UserRepository repo;

    @GetMapping("/users")
    List<User> getAllUsers(){
        return repo.findAll();
    }

    @PostMapping("/user")
    User newUser(@RequestBody User user){
        return repo.save(user);
    }

    @GetMapping("/user/{id}")
    User getUserById(@PathVariable Long id){
        return repo.findById(id).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/user/{id}")
    // newUser passed by client
    User updateUser(@RequestBody User newUser, @PathVariable Long id){
        return repo.findById(id).map(user -> {
            user.setName(newUser.getName());
            user.setUsername(newUser.getUsername());
            user.setEmail(newUser.getEmail());
            return repo.save(user);
        }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @DeleteMapping("/user/{id}")
    String deleteUser(@PathVariable Long id){
        if(!repo.existsById(id)){
            throw  new UserNotFoundException(id);
        }else{
            repo.deleteById(id);
            return "User with id - "+id+" is deleted successfully!";
        }
    }
}
