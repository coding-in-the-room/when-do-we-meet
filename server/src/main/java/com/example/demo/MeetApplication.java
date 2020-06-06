package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class MeetApplication {

	private static final String GOOGLE_OAUTH_PROPERTIES = "spring.config.location=classpath:/google.yml";

	public static void main(String[] args) {
		SpringApplication.run(MeetApplication.class, args);
	}
}
