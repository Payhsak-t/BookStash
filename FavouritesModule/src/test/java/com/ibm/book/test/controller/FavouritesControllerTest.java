package com.ibm.book.test.controller;

import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Date;
import java.util.List;
import java.util.Optional;

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

import com.ibm.book.model.Favourites;
import com.ibm.book.model.User;
import com.ibm.book.service.FavouritesService;
import com.ibm.book.service.UserService;
import com.ibm.book.controller.FavouritesController;
import com.ibm.book.exception.FavouriteAlreadyExistsException;
import com.fasterxml.jackson.databind.ObjectMapper;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RunWith(SpringRunner.class)
@WebMvcTest(controllers = FavouritesController.class)
public class FavouritesControllerTest {
	@Autowired
	private MockMvc mockMvc;
	@MockBean
	private FavouritesService favouritesService;

	@MockBean
	private UserService userService;
	private User user;
	private List<Favourites> listFavourites;
	private Favourites favourites;
	private Optional<Favourites> optionalFavourites;
	private String token;
	Favourites resultFavorite;

	@Before
	public void setUp() throws Exception {
		token = Jwts.builder().setId("johnsmith15@gmail.com").setIssuedAt(new Date())
				.signWith(SignatureAlgorithm.HS256, "usersecretkey").compact();
		user = new User(12, "admin", null, "male", "", "johnsmith15@gmail.com", "admin123", "", "");
		favourites = new Favourites("5nqEToRx5ek4C", 5, "nqEToRx5ek4C", "johnsmith15@gmail.com", "Hello!",
				"Janine Amos",
				"http://books.google.com/books/content?id=nqEToRx5ek4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api");
		
	}

	@After
	public void tearDown() throws Exception {
	}

	
	
	@Test
	public void testAddBookToFavSuccess() throws Exception {
		when(userService.getUserByEmail("johnsmith15@gmail.com")).thenReturn(user);
		when(favouritesService.getFavouritesByEmailAndBookId(user.getEmail(), favourites.getBookId())).thenReturn(null);
		favourites.setFavId(Integer.toString(user.getId()) + favourites.getBookId());
		favourites.setUserId(user.getId());
		favourites.setEmail(user.getEmail());
		when(favouritesService.addToFavourites(favourites)).thenReturn(resultFavorite);
		String bookJson = new ObjectMapper().writeValueAsString(favourites);
		Favourites result = favouritesService.addToFavourites(favourites);
		mockMvc.perform(post("/favourites/fave").header("Authorization", "BearerBearer " + token)
				.contentType(MediaType.APPLICATION_JSON).content(bookJson)).andExpect(status().isCreated());
		verify(favouritesService, times(2)).addToFavourites(Mockito.any(Favourites.class));
//		verifyNoMoreInteractions(favouritesService);
	}

//	
//	@Test
//	public void testAddBookToFavFailure() throws Exception {
//		// When a call is given to service.getBook
//		when(userService.getUserByEmail("johnsmith15@gmail.com")).thenReturn(user);
//		when(favouritesService.getFavouritesByEmailAndBookId(user.getEmail(), favourites.getBookId())).thenReturn(null);
//		favourites.setFavId(Integer.toString(user.getId()) + favourites.getBookId());
//		favourites.setUserId(user.getId());
//		favourites.setEmail(null);
//		when(favouritesService.addToFavourites(favourites)).thenReturn(resultFavorite);
//		String bookJson = new ObjectMapper().writeValueAsString(favourites);
//		Favourites result = favouritesService.addToFavourites(favourites);
//		mockMvc.perform(post("/favourites/fave").header("Authorization", "BearerBearer " + token)
//				.contentType(MediaType.APPLICATION_JSON).content(bookJson)).andExpect(status().isUnauthorized());
//		verify(favouritesService, times(1)).addToFavourites(Mockito.any(Favourites.class));
//		verifyNoMoreInteractions(favouritesService);
//	}

	@Test
	public void testDeleteFav() throws Exception {

		doNothing().when(favouritesService).deleteById(Mockito.anyString());
		mockMvc.perform(delete("/favourites/fave/5nqEToRx5ek4C").header("Authorization", "BearerBearer " + token))
				.andDo(print());
		verify(favouritesService, times(1)).deleteById(Mockito.anyString());
	}
}