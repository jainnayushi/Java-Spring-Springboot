package com.ayushi.learn_springbootReactProject.exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(Long id){
        super("Could not find the user with id : " + id);
        System.err.println("here");

    }
}
