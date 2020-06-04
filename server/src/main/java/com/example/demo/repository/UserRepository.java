package com.example.demo.repository;

import com.example.demo.entity.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends CrudRepository<User, Long> {

  Optional<User> findById(long Id);
  User findByName(String name);

  @Override
  List<User> findAll();
}
