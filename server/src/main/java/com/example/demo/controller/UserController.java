package com.example.demo.controller;

import com.example.demo.dto.UserResponse;
import com.example.demo.dto.UsersResponse;
import com.example.demo.entity.User;
import com.example.demo.service.UserService;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("user")
public class UserController {

  @Autowired
  private UserService userService;

  @GetMapping()
  public UsersResponse getAllUsers(){
     List<User> users = userService.getAllUsers();
     return new UsersResponse(users);
  }

  @GetMapping("/{id}")
  public UserResponse getUserById(@PathVariable("id") long id) throws NotFoundException {
    try {
      User user = userService.getUserById(id);
      return new UserResponse(user);
    } catch (NotFoundException e){
      throw new NotFoundException("이거 JSON으로 어캐 바꾸징ㅎㅎ");
    }
  }
}
