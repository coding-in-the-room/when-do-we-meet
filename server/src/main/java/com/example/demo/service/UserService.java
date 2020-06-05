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

  public User getUserById(long Id) throws NotFoundException {
    Optional<User> user = userRepository.findById(Id);

    if (user.isEmpty()) {
      throw new NotFoundException("no Id found");
    }

    return user.get();
  }

  public List<User> getAllUsers() {
    return userRepository.findAll();
  }
}
