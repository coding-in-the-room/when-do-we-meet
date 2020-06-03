package com.example.demo.repository;

import com.example.demo.entity.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UserRepository extends CrudRepository<User, Long> {
  User findById(long Id);

  User findByName(String name);

  @Override
  List<User> findAll();
}
