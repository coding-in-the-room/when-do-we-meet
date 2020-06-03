package com.example.demo.controller;

import com.example.demo.entity.User;
import com.example.demo.service.ScheduleService;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("user")
public class UserController {
  @Autowired
  private UserService userService;

  @GetMapping()
  public List<User> getUser(){
    return userService.getAllUsers();
  }
}
