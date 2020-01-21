package com.ibm.book.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.book.model.Comment;
import com.ibm.book.service.CommentService;

//@CrossOrigin(origins = "*", allowedHeaders = "*")
@CrossOrigin("*")
@RestController
@RequestMapping("/comment")
public class CommentController {
	
	private static Logger logger = LoggerFactory.getLogger(CommentController.class);
	
	@Autowired
	private CommentService commentService;
	
	@PostMapping("/comments")
	public ResponseEntity<String> createComment(@RequestBody Comment comment) {
		ResponseEntity<String> cs = null;
		try {
			logger.info("Inside the createComment method");
			Comment newComment = commentService.createComment(comment);
			if(newComment != null) {
				logger.info("The comment has been created");
				cs = ResponseEntity.status(HttpStatus.CREATED).build();
			}
 		} catch (Exception e) {
 			logger.error(e.getMessage());
 			cs = ResponseEntity.status(HttpStatus.CONFLICT).build();
		}
		return cs;
	}
	
	@DeleteMapping("comments/{id}/{email}")
	public ResponseEntity<String> deleteComment(@PathVariable("id") String commentId, @PathVariable("email") String userEmail) {
		ResponseEntity<String> cs = null;
		try {
			logger.info("Inside the delete comments block");
			commentService.deleteComment(commentId, userEmail);
			logger.info("The comment has been deleted");
			cs = ResponseEntity.status(HttpStatus.OK).build();
		} catch (Exception e) {
			logger.error(e.getMessage());
			cs = ResponseEntity.status(HttpStatus.CONFLICT).build();
		}
		return cs;
	}
	
	@GetMapping("/getAll/{bookId}")
	public ResponseEntity<List<Comment>> getAllComments(@PathVariable("bookId") String bookId) {
		ResponseEntity<?> cs = null;
		logger.info("Inside the getAll comments method");
		List<Comment> clist = commentService.getAllComments(bookId);
		cs = ResponseEntity.status(HttpStatus.OK).body(clist);
		logger.info("The comments are fetched for the particular book");
		return (ResponseEntity<List<Comment>>) cs;
	}	

}