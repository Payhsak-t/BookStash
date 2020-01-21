package com.ibm.book.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import com.ibm.book.exception.UserNotFoundException;
import com.ibm.book.model.User;
import com.ibm.book.service.UserService;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

class LogUser {
	public String email;
	public String password;
}

@CrossOrigin("*")
//@CrossOrigin(origins = "*", allowedHeaders = "*")
@Controller
@RequestMapping("/users")
public class LoginController {
	
	private static Logger logger = LoggerFactory.getLogger(LoginController.class);
	
	@Autowired
	private UserService ls;

	@PostMapping(value = "/authenticate")
	public ResponseEntity<Map<String, String>> logIn(@RequestBody LogUser logUser) throws UserNotFoundException {
		logger.info("Inside the logIn user block");
		User matchedUser = ls.login(logUser.email, logUser.password);
		if (matchedUser == null) {
			logger.error("The login credentials are wrong. User not logged in.");
			throw new UserNotFoundException();
		}
		else {
			logger.info("The user has been logged in");
			logger.info("Matched :" + matchedUser.getEmail() + " " + matchedUser.getPassword());
			String token = Jwts.builder().setId(matchedUser.getEmail()).setIssuedAt(new Date()).signWith(SignatureAlgorithm.HS256, "usersecretkey").compact();
			logger.info("Token:" + token);
			Map<String, String> map1 = new HashMap<String, String>();
			map1.put("token", token);
			ResponseEntity<Map<String, String>> response = new ResponseEntity<Map<String, String>>(map1, HttpStatus.OK);
			return response;
		}
	}
}