package com.ibm.book.test.model;

import org.junit.Before;
import org.junit.Test;
import org.meanbean.test.BeanTester;

import com.ibm.book.model.Comment;

public class CommentTest {
	
	private Comment comment;
	
	@Before
	public void setUp() throws Exception {
		comment  = new Comment();
		comment.setCommentId("5e1c4d11cbf2f241c5258514");
		comment.setComment("Hello. This is a comment.");
		comment.setUserEmail("johnsmith15@gmail.com");
		comment.setBookId("nqEToRx5ek4C");
	}
	
	@Test
	public void Beantest() {
		new BeanTester().testBean(Comment.class);
	}
}
