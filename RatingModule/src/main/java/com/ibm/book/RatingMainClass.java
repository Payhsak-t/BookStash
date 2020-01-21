package com.ibm.book;

import javax.servlet.Filter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class RatingMainClass {
	
	public static void main(String[] args) {
		SpringApplication.run(RatingMainClass.class, args);
	}
}