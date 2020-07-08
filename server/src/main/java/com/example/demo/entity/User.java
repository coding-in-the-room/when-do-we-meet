package com.example.demo.entity;

import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@Table(name="user")
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id", unique = true, nullable = false)
  private long id;

  @Column(name = "name", unique = true, nullable = false)
  private String name;

  @Column(name = "password")
  private String password;

  @OneToMany(mappedBy = "user")
  private List<Schedule> schedules = new ArrayList<>();

  public User(String name, String password){
    this.name = name;
    this.password = password;
  }

  public String getName() {
    return name;
  }

  public String getPassword() {
    return password;
  }
}
