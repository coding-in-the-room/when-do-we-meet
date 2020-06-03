package com.example.demo.repository;

import com.example.demo.entity.Participant;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ParticipantRepository extends CrudRepository<Participant, Long> {
  Participant findById(long Id);

  Participant findByName(String name);
}
