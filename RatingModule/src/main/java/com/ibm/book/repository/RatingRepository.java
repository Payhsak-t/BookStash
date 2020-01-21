package com.ibm.book.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.ibm.book.model.Rating;

public interface RatingRepository extends MongoRepository<Rating, Integer>{
	
	public List<Rating> findByBookId(String bookId);
	
	public Optional<Rating> findBy_idAndUserEmail(String _id, String userEmail);
}
