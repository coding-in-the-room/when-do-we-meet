package com.example.demo.dto;

public class ErrorResponse {
  private String message;
  private long timeStamp;

  public ErrorResponse(String message){
    this.message = message;
    this.timeStamp = System.currentTimeMillis();
  }
}
