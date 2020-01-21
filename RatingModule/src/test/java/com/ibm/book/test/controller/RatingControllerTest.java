package com.ibm.book.test.controller;

import static org.mockito.Mockito.doThrow;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
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
import com.ibm.book.controller.RatingController;
import com.ibm.book.model.Rating;
import com.ibm.book.service.RatingService;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RunWith(SpringRunner.class)
@WebMvcTest(controllers = RatingController.class)
public class RatingControllerTest {

	@Autowired
	private MockMvc mockMvc;
	
	@MockBean
	private RatingService ratingService;
	
	private Rating rating;
	private List<Rating> rateList;
	private String token;
	
	
	@Before
	public void setUp() throws Exception {
		token = Jwts.builder().setId("johnsmith15@gmail.com").setIssuedAt(new Date())
				.signWith(SignatureAlgorithm.HS256, "usersecretkey").compact();
		rating = new Rating("5e203002550781575bb9222e", 4, "johnsmith15@gmail.com", "nqEToRx5ek4C"); 
	}

	@After
	public void tearDown() throws Exception {
	}
	
	@Test
	public void createRatingSuccess() throws Exception{
		when(ratingService.createRating(Mockito.any(Rating.class))).thenReturn(rating);
		String recommendedJson = new ObjectMapper().writeValueAsString(rating);
		mockMvc.perform(post("/rating/ratings").contentType(MediaType.APPLICATION_JSON).content(recommendedJson)).andExpect(status().isCreated());
		verify(ratingService).createRating(Mockito.any(Rating.class));
	}

	@Test(expected = Exception.class)
	public void createRatingFailure() throws Exception{
		doThrow(new Exception()).when(ratingService.createRating(null));
		
	}
	
	@Test
	public void getRatingSuccess() throws Exception {
		when(ratingService.getAllRatings(Mockito.anyString())).thenReturn(rateList);
		mockMvc.perform(get("/rating/getAll/nqEToRx5ek4C")).andExpect(status().isOk());
		verify(ratingService).getAllRatings(Mockito.anyString());
	}

}