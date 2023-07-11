package com.ayushi.learn_springbootReactProject.repository;

import com.ayushi.learn_springbootReactProject.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
