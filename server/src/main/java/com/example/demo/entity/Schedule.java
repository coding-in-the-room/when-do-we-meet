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
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id", nullable = false, unique = true)
  private long id;

  @Column(name = "name", nullable = false)
  private String name;

  @Column(columnDefinition = "TEXT", name = "description")
  private String description;

  @Column(name = "startAt", nullable = false)
  @Temporal(TemporalType.TIMESTAMP)
  private Date startAt;

  @Column(name = "endAt", nullable = false)
  @Temporal(TemporalType.TIMESTAMP)
  private Date endAt;

  @Column(name = "deadline", nullable = false)
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
