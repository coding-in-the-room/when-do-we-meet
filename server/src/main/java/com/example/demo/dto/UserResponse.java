package com.example.demo.dto;

import com.example.demo.entity.User;
import lombok.Getter;

@Getter
public class UserResponse {
  public UserResponse(User user){
    this.name = user.getName();
  }

  private String name;
}
