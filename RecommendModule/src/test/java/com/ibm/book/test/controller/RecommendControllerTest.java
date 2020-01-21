package com.ibm.book.test.controller;

import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
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
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ibm.book.controller.RecommendController;
import com.ibm.book.model.Recommend;
import com.ibm.book.model.RecommendCount;
import com.ibm.book.model.User;
import com.ibm.book.service.RecommendService;
import com.ibm.book.service.UserService;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RunWith(SpringRunner.class)
@WebMvcTest(controllers = RecommendController.class)
public class RecommendControllerTest {

	@Autowired
	private MockMvc mockMvc;

	@MockBean
	private RecommendService recommendService;

	@MockBean
	private UserService userService;

	private User user;
	private Recommend recommendation;
	private Recommend recommendations;
	private List<Recommend> recList;
	private String token;
	private List<RecommendCount> recCount;

	@Before
	public void setUp() throws Exception {
		token = Jwts.builder().setId("johnsmith15@gmail.com").setIssuedAt(new Date())
				.signWith(SignatureAlgorithm.HS256, "usersecretkey").compact();
		user = new User(12, "admin", null, "male", "", "johnsmith15@gmail.com", "admin123", "", "");
		recommendation = new Recommend("5nqEToRx5ek4C", 5, "nqEToRx5ek4C", "johnsmith15@gmail.com", "John", "hello!",
				"Janine Amos",
				"http://books.google.com/books/content?id=nqEToRx5ek4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api");

	}

	@After
	public void tearDown() throws Exception {
	}

	@Test
	public void getAllRecommendationsTest() throws Exception {
		when(recommendService.getAll()).thenReturn(recList);
		mockMvc.perform(get("/recommend/getAll")).andExpect(status().isOk())
//				.andExpect(jsonPath("$.name", is("Testing with Mockito")))
				.andDo(print());
		verify(recommendService, times(1)).getAll();
	}
	

	@Test
	public void deleteRecTest() throws Exception {
		when(recommendService.getRecommendationById("5nqEToRx5ek4C")).thenReturn(recommendation);
		doNothing().when(recommendService).delete(Mockito.anyString());
		mockMvc.perform(delete("/recommend/unrecommend/5nqEToRx5ek4C")).andDo(print());
		verify(recommendService, times(1)).delete(Mockito.anyString());
	}

	@Test
	public void addRecSuccessTest() throws Exception {
		when(userService.getUserByEmail(recommendation.getEmail())).thenReturn(user);
		recommendation.setRecId(user.getId() + recommendation.getBookId());
		recommendation.setUserId(user.getId());
		recommendation.setEmail(user.getEmail());
		recommendation.setName(user.getName());
		when(recommendService.getRecommendationById(Mockito.anyString())).thenReturn(null);
		String recommendedJson = new ObjectMapper().writeValueAsString(recommendation);
		mockMvc.perform(
				post("/recommend/save").contentType(org.springframework.http.MediaType.APPLICATION_JSON).content(recommendedJson))
				.andExpect(status().isCreated());
		verify(recommendService).saveRecommendation(Mockito.any(Recommend.class));
	}
	
	@Test
	public void addRecFailureTest() throws Exception {
		when(userService.getUserByEmail(recommendation.getEmail())).thenReturn(user);
		recommendation.setRecId(user.getId() + recommendation.getBookId());
		recommendation.setUserId(user.getId());
		recommendation.setEmail(user.getEmail());
		recommendation.setName(user.getName());
		when(recommendService.saveRecommendation(Mockito.any(Recommend.class))).thenReturn(recommendations);
		String recommendedJson = new ObjectMapper().writeValueAsString(recommendations);
		mockMvc.perform(
				post("/recommend/save").contentType(org.springframework.http.MediaType.APPLICATION_JSON).content(recommendedJson))
				.andExpect(status().isBadRequest());
	}
}