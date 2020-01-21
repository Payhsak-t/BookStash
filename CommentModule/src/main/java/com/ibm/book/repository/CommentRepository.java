package com.ibm.book.repository;


import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.ibm.book.model.Comment;

public interface CommentRepository extends MongoRepository<Comment, Integer> {

	public List<Comment> findByBookId(String bookId);

	public void deleteBy_idAndUserEmail(String commentId, String userEmail);
	

}