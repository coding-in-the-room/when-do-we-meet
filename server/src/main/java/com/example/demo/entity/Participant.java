package com.example.demo.entity;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="participant")
public class Participant {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "Id")
  private long Id;

  @Column(name = "name")
  private String name;

  @Column(name = "startAt")
  @Temporal(TemporalType.TIMESTAMP)
  private Date startAt;

  @Column(name = "endAt")
  @Temporal(TemporalType.TIMESTAMP)
  private Date endAt;

  @Column(name = "scheduleId")
  private long scheduleId;

  @ManyToOne
  @JoinColumn(name = "scheduleId", insertable = false, updatable = false)
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
