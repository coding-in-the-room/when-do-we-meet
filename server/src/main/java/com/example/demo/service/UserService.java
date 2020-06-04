package com.example.demo.service;

import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

  @Autowired
  private UserRepository userRepository;

  public User getUserById(long Id) throws NotFoundException {
    Optional<User> user = userRepository.findById(Id);

    if(user.isEmpty()){
      throw new NotFoundException("no Id found");
    }

    return user.get();
  }

  public List<User> getAllUsers(){
    return userRepository.findAll();
  }
}
