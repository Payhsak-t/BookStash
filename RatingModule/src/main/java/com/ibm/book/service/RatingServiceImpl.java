package com.ibm.book.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ibm.book.model.Rating;
import com.ibm.book.repository.RatingRepository;

@Service
public class RatingServiceImpl implements RatingService {
	
	@Autowired
	private RatingRepository ratingRepo;
	
	@Override
	public Rating createRating(Rating rating) {
		return ratingRepo.save(rating);
	}

	@Override
	public List<Rating> getAllRatings(String bookId) {
		return ratingRepo.findByBookId(bookId);
	}

}
