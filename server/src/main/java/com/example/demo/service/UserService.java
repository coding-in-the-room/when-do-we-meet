package com.example.demo.service;

import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

  @Autowired
  private UserRepository userRepository;

  public User getUserById(long Id){
    User user = userRepository.findById(Id);

    return user;
  }

  public List<User> getAllUsers(){
    return userRepository.findAll();
  }
}
