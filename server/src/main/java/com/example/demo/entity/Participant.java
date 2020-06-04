package com.example.demo.entity;

import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@NoArgsConstructor
@Table(name="participant")
public class Participant {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "Id")
  private long Id;

  @Column(name = "name", nullable = false)
  private String name;

  @Column(name = "startAt", nullable = false)
  @Temporal(TemporalType.TIMESTAMP)
  private Date startAt;

  @Column(name = "endAt", nullable = false)
  @Temporal(TemporalType.TIMESTAMP)
  private Date endAt;

  @Column(name = "scheduleId", insertable = false, updatable = false)
  private long scheduleId;

  @ManyToOne
  @JoinColumn(name = "scheduleId")
  private Schedule schedule;

  @Override
  public String toString() {
    return String.format( "Customer[id=%d, name='%s']", Id, name);
  }

  public Long getId() {
    return Id;
  }

  public String getName() {
    return name;
  }
}
