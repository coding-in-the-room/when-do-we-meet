package com.example.demo.service;

import javassist.NotFoundException;
import com.example.demo.entity.User;
import org.springframework.stereotype.Service;
import com.example.demo.repository.UserRepository;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

  private UserRepository userRepository;

  public UserService(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  public User getUserById(long id) throws NotFoundException {
    Optional<User> user = userRepository.findById(id);

    System.out.println(user.toString());
    if(!user.isPresent()){
      throw new NotFoundException("User Not Found");
    }

    return user.get();
  }

  public List<User> getAllUsers() {
    return userRepository.findAll();
  }
}
