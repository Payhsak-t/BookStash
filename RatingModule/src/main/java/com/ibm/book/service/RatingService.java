package com.ibm.book.service;

import java.util.List;

import com.ibm.book.model.Rating;

public interface RatingService {
	public Rating createRating(Rating rating);
	
	public List<Rating> getAllRatings(String bookId);

}
