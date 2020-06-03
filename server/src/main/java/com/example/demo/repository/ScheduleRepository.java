package com.example.demo.repository;

import com.example.demo.entity.Schedule;
import org.springframework.data.repository.CrudRepository;

public interface ScheduleRepository extends CrudRepository<Schedule, Long> {
  Schedule findById(long Id);

  Schedule findByName(String name);
}
