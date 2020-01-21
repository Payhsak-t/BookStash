package com.ibm.book.test.service;

import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.List;
import java.util.Optional;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;


import com.ibm.book.model.Comment;
import com.ibm.book.repository.CommentRepository;
import com.ibm.book.service.CommentServiceImpl;

@RunWith(MockitoJUnitRunner.class)
public class CommentServiceImplTest {
	
	@Mock
	private CommentRepository commentRepository;
	@InjectMocks
	private CommentServiceImpl commentService;
	Comment comment;
	List<Comment> listComment;
	Optional<Comment> optionalComment;
	@Before
	public void setUp() throws Exception {
		comment = new Comment();
		optionalComment = Optional.of(comment);
	}
	@Test
	public void testAddCommentSuccess() throws Exception {
		when(commentRepository.save(Mockito.any(Comment.class))).
					thenReturn(comment);
		Comment addedComment = commentService.createComment(comment);
//		verify(commentRepository).save(Mockito.any());
	}


}
