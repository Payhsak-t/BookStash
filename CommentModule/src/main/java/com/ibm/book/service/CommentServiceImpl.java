package com.ibm.book.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ibm.book.model.Comment;
import com.ibm.book.repository.CommentRepository;

@Service
public class CommentServiceImpl implements CommentService{

	@Autowired
	private CommentRepository commentRepo;
	
	@Override
	public Comment createComment(Comment comment) {
				
		return commentRepo.save(comment);
	}
	@Override
	public void deleteComment(String commentId, String userEmail) {

		commentRepo.deleteBy_idAndUserEmail(commentId, userEmail);
	}

	@Override
	public List<Comment> getAllComments(String bookId) {

		return commentRepo.findByBookId(bookId);
	}	

}