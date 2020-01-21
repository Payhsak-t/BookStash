package com.ibm.book.test.service;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import java.util.Optional;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;

import com.ibm.book.model.Recommend;
import com.ibm.book.repository.RecommendRepository;
import com.ibm.book.service.RecommendServiceImpl;

@RunWith(MockitoJUnitRunner.class)
public class RecommendServiceImplTest {
	@Mock
	private RecommendRepository recommendRepository;
	@InjectMocks
	private RecommendServiceImpl recommendService;
	Recommend recommend;
	Optional<Recommend> optionalRecommend;

	@Before
	public void setUp() throws Exception {
		recommend = new Recommend("5nqEToRx5ek4C", 5, "nqEToRx5ek4C", "johnsmith15@gmail.com", "John Smith", "Hello!",
				"Janine Amos",
				"http://books.google.com/books/content?id=nqEToRx5ek4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api");
		optionalRecommend = Optional.of(recommend);
	}

	@Test
	public void testSaveRecommendation() throws Exception {
		// BookRepository repo = Mockito.mock(BookRepository.class);
//		when(recomRepository.findAllById(Mockito.any())).
//					thenReturn(optrecom);
		when(recommendRepository.save(Mockito.any(Recommend.class))).thenReturn(recommend);
		Recommend addedBook = recommendService.saveRecommendation(recommend);
//		assertEquals(book.getName(), addedBook.getName());
//		verify(bookRepository).findById(Mockito.anyInt());
//		verify(recommendRepository).save(Mockito.any());
	}

}
