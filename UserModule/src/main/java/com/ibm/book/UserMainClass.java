package com.ibm.book;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.PropertySource;

@SpringBootApplication
@PropertySource("classpath:dbconfig.properties")
public class UserMainClass {
	
	public static void main(String[] args) {
		SpringApplication.run(UserMainClass.class, args);
	}
}