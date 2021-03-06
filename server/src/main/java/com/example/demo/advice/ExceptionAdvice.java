package com.example.demo.advice;

import com.example.demo.dto.ErrorResponse;
import javassist.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ExceptionAdvice {

  @ExceptionHandler
  public ResponseEntity<ErrorResponse> handleException(NotFoundException ex){
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ErrorResponse.fromMessage(ex.getMessage()));
  }
}
