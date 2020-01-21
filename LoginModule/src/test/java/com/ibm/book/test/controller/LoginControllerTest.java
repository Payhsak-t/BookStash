package com.ibm.book.test.controller;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Date;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ibm.book.controller.LoginController;
import com.ibm.book.model.User;
import com.ibm.book.service.UserService;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RunWith(SpringRunner.class)
@WebMvcTest(controllers = LoginController.class)
public class LoginControllerTest {
	
	@Autowired
	private MockMvc mockMvc;

	@MockBean
	private UserService userService;
	private String token;
	
	private User user;
	
	@Before
	public void setUp() throws Exception {
		token = Jwts.builder().setId("johnsmith15@gmail.com").setIssuedAt(new Date())
				.signWith(SignatureAlgorithm.HS256, "usersecretkey").compact();
		user = new User(12, "admin", null, "male", "", "johnsmith15@gmail.com", "admin123", "", "");
	}

	@After
	public void tearDown() throws Exception {
	}

	@Test
	public void userLogin() throws Exception {
		when(userService.login(Mockito.anyString(), Mockito.anyString())).thenReturn(user);
		String bookJson = new ObjectMapper().writeValueAsString(user);
		mockMvc.perform(post("/users/authenticate").contentType(MediaType.APPLICATION_JSON)
				.content(bookJson))
		.andExpect(status().isOk());
	}
	
	@Test
	public void userLoginFail() throws Exception {
		when(userService.login(Mockito.anyString(), Mockito.anyString())).thenReturn(null);
		String bookJson = new ObjectMapper().writeValueAsString(null);
		mockMvc.perform(post("/users/authenticate").contentType(MediaType.APPLICATION_JSON)
				.content(bookJson))
		.andExpect(status().isBadRequest());
	}
	
	
}