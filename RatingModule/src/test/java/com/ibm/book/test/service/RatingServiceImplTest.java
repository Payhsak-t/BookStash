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


import com.ibm.book.model.Rating;
import com.ibm.book.repository.RatingRepository;
import com.ibm.book.service.RatingServiceImpl;

@RunWith(MockitoJUnitRunner.class)
public class RatingServiceImplTest {
	
	@Mock
	private RatingRepository ratingRepository;
	@InjectMocks
	private RatingServiceImpl ratingService;
	Rating rating;
	List<Rating> listRating;
	Optional<Rating> optionalRating;
	@Before
	public void setUp() throws Exception {
		rating = new Rating();
		optionalRating = Optional.of(rating);
	}
	@Test
	public void testAddRatingSuccess() throws Exception {
		// BookRepository repo = Mockito.mock(BookRepository.class);
//		when(favRepository.findByBookIdAndUsername(Mockito.anyString(),Mockito.anyString())).
//					thenReturn(listfav);
		when(ratingRepository.save(Mockito.any(Rating.class))).
					thenReturn(rating);
		Rating addedRating = ratingService.createRating(rating);
//		assertEquals(fav.getBookId(), addedBook.getBookId());
//		verify(favRepository).findByBookIdAndUsername(Mockito.anyString(),Mockito.anyString());
//		verify(ratingRepository).save(Mockito.any());
	}


}
