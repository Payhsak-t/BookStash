package com.ibm.book.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.ibm.book.exception.UserAlreadyExistsException;
import com.ibm.book.exception.UserNotFoundException;
import com.ibm.book.model.User;
import com.ibm.book.service.UserService;

import java.util.*;
import javax.mail.*;
import javax.mail.internet.*;
//@CrossOrigin(origins = "*", allowedHeaders = "*")
@CrossOrigin("*")
@RestController
@RequestMapping("/user")
public class UserController {
	
	private static Logger logger = LoggerFactory.getLogger(UserController.class);
	
	@Autowired
	private UserService userService;

	@PostMapping("/users")
	public ResponseEntity<String> saveUser(@RequestBody User user) throws UserAlreadyExistsException {
		ResponseEntity<String> rs = null;
		try {
			logger.info("Inside the register user try block");
			User newUser = userService.createUser(user);
			if (newUser != null) {
				logger.info("User has been registered.");
				rs = ResponseEntity.status(HttpStatus.CREATED).build();
				String emailuser = user.getEmail();
				sendFromGMail(emailuser);
				logger.info("Email has been sent to registered user.");
			}
		} catch (UserAlreadyExistsException e) {
			logger.error(e.getMessage());
			rs = ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		} catch (Exception e) {
			logger.info("user creation failed.");
			rs = ResponseEntity.status(HttpStatus.CONFLICT).build();
		}
		return rs;
	}

	private void sendFromGMail(String emailuser) {
		String from = "bookstash.application@gmail.com";
		String pass = "bookstash123";
		String to = emailuser;
		String subject = "Welcome to BookStash";
		String body = "You have registered successfully !";

		Properties props = System.getProperties();
		String host = "smtp.gmail.com";
		props.put("mail.smtp.starttls.enable", "true");
		props.put("mail.smtp.host", host);
		props.put("mail.smtp.user", from);
		props.put("mail.smtp.password", pass);
		props.put("mail.smtp.port", "587");
		props.put("mail.smtp.auth", "true");

		Session session = Session.getDefaultInstance(props);
		MimeMessage message = new MimeMessage(session);

		try {
			message.setFrom(new InternetAddress(from));
			InternetAddress toAddress = new InternetAddress(to);
			message.addRecipient(Message.RecipientType.TO, toAddress);
			message.setSubject(subject);
			message.setText(body);
			Transport transport = session.getTransport("smtp");
			transport.connect(host, from, pass);
			transport.sendMessage(message, message.getAllRecipients());
			transport.close();
		} catch (AddressException ae) {
			logger.error(ae.getMessage());
		} catch (MessagingException me) {
			logger.error(me.getMessage());
		}
	}

	@DeleteMapping("users/{id}")
	public ResponseEntity<String> deleteUser(@PathVariable("id") int id) throws UserNotFoundException {
		ResponseEntity<String> rs = null;
		try {
			logger.info("Inside the delete user try block");
			userService.deleteUser(id);
			logger.info("user has been removed");
			rs = ResponseEntity.status(HttpStatus.OK).build();
		} catch (UserNotFoundException e) {
			logger.error(e.getMessage());
			rs = ResponseEntity.status(HttpStatus.CONFLICT).build();
		}
		return rs;
	}

	@PutMapping("/users/{id}")
	public ResponseEntity<String> updateUser(@PathVariable("id") String id, @RequestBody User user) {
		logger.info("Inside update user method");
		ResponseEntity<String> rs = null;
		userService.updateUser(id, user);
		logger.info("The user has been updated");
		rs = ResponseEntity.status(HttpStatus.OK).build();
		return rs;
	}
	
	@PutMapping("/users/password/{id}")
	public ResponseEntity<?> updateUserPassword(@PathVariable("id") String id, @RequestBody String password) {
		logger.info("Inside update password method");
		ResponseEntity<?> rs = null;
		userService.updateUserPassword(id, password);
		logger.info("password has been updated");
		rs = ResponseEntity.status(HttpStatus.OK).build();
		return rs;
	}

	@GetMapping("/users/{id}")
	public ResponseEntity<?> getUser(@PathVariable("id") String id) throws UserNotFoundException {
		ResponseEntity<?> rs = null;
		try {
			logger.info("Inside the getUser method");
			User user = userService.getUserByEmail(id);
			logger.info("The user is found");
			rs = ResponseEntity.status(HttpStatus.OK).body(user);
		} catch (UserNotFoundException e) {
			logger.error(e.getMessage());
			rs = ResponseEntity.status(HttpStatus.CONFLICT).build();
		}
		return rs;
	}
}