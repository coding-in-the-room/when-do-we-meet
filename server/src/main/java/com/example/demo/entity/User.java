package com.example.demo.entity;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="user")
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "Id")
  private long Id;

  @Column(name = "name")
  private String name;

  @Column(name = "password")
  private String password;

  @OneToMany(mappedBy = "user")
  private List<Schedule> schedules = new ArrayList<>();

  public User(){}

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
