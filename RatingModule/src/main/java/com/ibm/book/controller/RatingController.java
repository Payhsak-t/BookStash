package com.ibm.book.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.book.model.Rating;
import com.ibm.book.service.RatingService;

@CrossOrigin("*")
@RestController
@RequestMapping("/rating")
public class RatingController {
	
	private static Logger logger = LoggerFactory.getLogger(RatingController.class);
	
	@Autowired
	private RatingService ratingService;
	
	@PostMapping("/ratings")
	public ResponseEntity<String> createRating(@RequestBody Rating rating) {
		ResponseEntity<String> rs = null;
		logger.info("Inside the create rating method.");
		try {
			Rating newRating = ratingService.createRating(rating);
			if(newRating != null) {
				logger.info("The rating has been created");
				rs = ResponseEntity.status(HttpStatus.CREATED).build();
			}
 		} catch (Exception e) {
 			logger.error(e.getMessage());
 			rs = ResponseEntity.status(HttpStatus.CONFLICT).build();
		}
		return rs;
	}
	
	@GetMapping("/getAll/{bookId}")
	public ResponseEntity<List<Rating>> getAllRatings(@PathVariable("bookId") String bookId) {
		ResponseEntity<?> rs = null;
		logger.info("Inside the get all ratings block");
		List<Rating> rlist = ratingService.getAllRatings(bookId);
		logger.info("Ratings are fetched");
		rs = ResponseEntity.status(HttpStatus.OK).body(rlist);
		return (ResponseEntity<List<Rating>>) rs;
	}
	
}
