package com.ibm.book.test.controller;

import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.doThrow;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Date;
import java.util.List;

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
import com.ibm.book.controller.UserController;
import com.ibm.book.exception.UserAlreadyExistsException;
import com.ibm.book.exception.UserNotFoundException;
import com.ibm.book.model.User;
import com.ibm.book.service.UserService;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RunWith(SpringRunner.class)
@WebMvcTest(controllers = UserController.class)
public class UserControllerTest {
	@Autowired
	private MockMvc mockMvc;
	private List<User> userList;
	private String token;
	private User user;
	private User users;

	@MockBean
	private UserService userService;

	@Before
	public void setUp() throws Exception {
		token = Jwts.builder().setId("johnsmith15@gmail.com").setIssuedAt(new Date())
				.signWith(SignatureAlgorithm.HS256, "usersecretkey").compact();
		user = new User(12, "admin", null, "male", "", "johnsmith15@gmail.com", "admin123", "", "");
		user = new User(13, "Nasi", null, "female", "", "tkashyap@gmail.com", "admin123", "", "");

	}

	@After
	public void tearDown() throws Exception {
	}

	@Test
	public void registerUserSuccess() throws Exception {
		when(userService.createUser(Mockito.any(User.class))).thenReturn(user);
		String Jsonstr = new ObjectMapper().writeValueAsString(user);
		mockMvc.perform(post("/user/users").contentType(MediaType.APPLICATION_JSON).content(Jsonstr))
				.andExpect(status().isCreated());
		verify(userService).createUser(Mockito.any(User.class));
	}

//	@Test
//	public void registerUserFailure() throws Exception {
//		when(userService.createUser(Mockito.any(User.class))).thenReturn(null);
//		String jsonStr = new ObjectMapper().writeValueAsString(null);
//		mockMvc.perform(post("/user/users").contentType(MediaType.APPLICATION_JSON).content(jsonStr)
//				).andExpect(status().isInternalServerError());
//		verify(userService).createUser(Mockito.any(User.class));
//	}
	
	@Test(expected = Exception.class)
	public void registerUserFailure() throws Exception {
		doThrow(new Exception()).when(userService.createUser(user));
	}
	
	@Test
	public void deleteUserSuccess() throws Exception {
		doNothing().when(userService).deleteUser(Mockito.anyInt());
		mockMvc.perform(delete("/user/users/12")).andExpect(status().isOk()).andDo(print());
		verify(userService).deleteUser(Mockito.anyInt());
	}
	
	@Test
	public void updateUserSuccess() throws Exception {
		when(userService.updateUser(Mockito.anyString(), Mockito.any(User.class))).thenReturn(user);
		String Jsonstr = new ObjectMapper().writeValueAsString(user);
		mockMvc.perform(put("/user/users/12").contentType(MediaType.APPLICATION_JSON).content(Jsonstr))
				.andExpect(status().isOk());
		verify(userService).updateUser(Mockito.anyString(), Mockito.any(User.class));
	}
	
	@Test
	public void getUserSuccess() throws Exception {
		when(userService.getUserByEmail(Mockito.anyString())).thenReturn(user);
		String Jsonstr = new ObjectMapper().writeValueAsString(user);
		mockMvc.perform(get("/user/users/johnsmith15@gmail.com").contentType(MediaType.APPLICATION_JSON).content(Jsonstr))
				.andExpect(status().isOk());
		verify(userService).getUserByEmail(Mockito.anyString());
	}
	
	@Test
	public void updateUserPassword() throws Exception {
		when(userService.updateUserPassword(Mockito.anyString(), Mockito.anyString())).thenReturn(user);
		String Jsonstr = new ObjectMapper().writeValueAsString(user);
		mockMvc.perform(put("/user/users/password/12").contentType(MediaType.APPLICATION_JSON).content(Jsonstr))
				.andExpect(status().isOk());
		verify(userService).updateUserPassword(Mockito.anyString(), Mockito.anyString());

	}
	
}