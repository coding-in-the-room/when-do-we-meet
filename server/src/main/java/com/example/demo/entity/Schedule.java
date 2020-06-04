package com.example.demo.entity;

import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@NoArgsConstructor
@Table(name="schedule")
public class Schedule {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "Id")
  private long Id;

  @Column(name = "name")
  private String name;

  @Column(columnDefinition = "TEXT", name = "description")
  private String description;

  @Column(name = "startAt")
  @Temporal(TemporalType.TIMESTAMP)
  private Date startAt;

  @Column(name = "endAt")
  @Temporal(TemporalType.TIMESTAMP)
  private Date endAt;

  @Column(name = "deadline")
  @Temporal(TemporalType.TIMESTAMP)
  private Date deadline;

  @Column(name = "userId", insertable = false, updatable = false)
  private long userId;

  @ManyToOne
  @JoinColumn(name = "userId")
  private User user;

  @OneToMany(mappedBy = "schedule")
  private List<Participant> participants = new ArrayList<>();
}
