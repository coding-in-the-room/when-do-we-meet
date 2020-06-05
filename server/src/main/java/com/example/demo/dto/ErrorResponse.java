package com.example.demo.dto;

import lombok.Getter;

@Getter
public class ErrorResponse {
  private String message;
  private long timeStamp;

  public ErrorResponse(String message){
    this.message = message;
    this.timeStamp = System.currentTimeMillis();
  }

  public static ErrorResponse fromMessage(String message){
    return new ErrorResponse(message);
  }
}
