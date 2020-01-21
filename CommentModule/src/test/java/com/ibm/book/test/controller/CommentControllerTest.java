package com.ibm.book.test.controller;

import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.verifyNoMoreInteractions;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Date;
import java.util.List;
import java.util.Optional;

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

import com.ibm.book.controller.CommentController;
import com.ibm.book.model.Comment;
import com.ibm.book.service.CommentService;
import com.fasterxml.jackson.databind.ObjectMapper;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RunWith(SpringRunner.class)
@WebMvcTest(controllers = CommentController.class)
public class CommentControllerTest {
	String token;
	@Autowired
	private MockMvc mockMvc;
	@MockBean
	private CommentService commentService;
	private List<Comment> listComment;
	private Comment comment;
	Optional<Comment> optionalComment;

	@Before
	public void setUp() throws Exception {
		token = Jwts.builder().setId("johnsmith15@gmail.com").setIssuedAt(new Date())
				.signWith(SignatureAlgorithm.HS256, "usersecretkey").compact();
		comment = new Comment("5e1c4d11cbf2f241c5258514","Hello. This is a comment.","johnsmith15@gmail.com","nqEToRx5ek4C");
	}

	@Test
	public void testAddCommentSuccess() throws Exception {
		// setup the service mock
		when(commentService.createComment((Mockito.any(Comment.class)))).thenReturn(comment);
		// send a post request using mockMVC
		String bookJson = new ObjectMapper().writeValueAsString(comment);
		mockMvc.perform(post("/comment/comments").header("Authorization", "Bearer " + token)
				.contentType(MediaType.APPLICATION_JSON).content(bookJson)).andExpect(status().isCreated());
		// verify mock has been called
		verify(commentService).createComment(Mockito.any(Comment.class));
		verifyNoMoreInteractions(commentService);
	}

	@Test
	public void testGetBookById() throws Exception {
		when(commentService.getAllComments(Mockito.anyString())).thenReturn(listComment);
		mockMvc.perform(get("/comment/getAll/nqEToRx5ek4C").header("Authorization", "Bearer " + token))
				.andExpect(status().isOk())
//				.andExpect(jsonPath("$.name", is("Testing with Mockito")))
				.andDo(print());
		verify(commentService, times(1)).getAllComments(Mockito.anyString());
	}

	@Test
	public void testDeleteComment() throws Exception {

		doNothing().when(commentService).deleteComment(Mockito.anyString(), Mockito.anyString());
		mockMvc.perform(delete("/comment/comments/5e1c4d11cbf2f241c5258514/johnsmith15@gmail.com").header("Authorization", "Bearer " + token))
		// .andExpect(status().isOk())
//		.andExpect(jsonPath("$.name", is("Testing with Mockito")))
				.andDo(print());
		verify(commentService, times(1)).deleteComment(Mockito.anyString(), Mockito.anyString());
	}
}
