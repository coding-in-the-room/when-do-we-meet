package com.example.demo.dto;

import com.example.demo.entity.User;
import lombok.Getter;

import java.util.List;
import java.util.stream.Collectors;

@Getter
public class UsersResponse {
  private int count;
  private List<UserResponse> datas;

  public UsersResponse(List<User> users) {
    this.count = users.size();
    this.datas = users.stream()
            .map(UserResponse::new).collect(Collectors.toList());
  }
}
