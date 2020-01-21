package com.ibm.book.service;

import java.util.List;

import com.ibm.book.model.Comment;

public interface CommentService {
	public Comment createComment(Comment comment);

	public void deleteComment(String commentId, String userEmail);
	
	public List<Comment> getAllComments(String bookId);
}