package com.example.demo.controller;

import com.example.demo.service.ParticipantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("participant")
public class ParticipantController {

  @Autowired
  private ParticipantService participantService;

  @GetMapping()
  public String getParticipant(){
    return "Participant";
  }
}
