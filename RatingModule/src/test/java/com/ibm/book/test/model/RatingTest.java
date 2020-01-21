package com.ibm.book.test.model;

import org.junit.Before;
import org.junit.Test;
import org.meanbean.test.BeanTester;

import com.ibm.book.model.Rating;

public class RatingTest {

	private Rating rating;
	
	@Before
	public void setUp() throws Exception {
		rating = new Rating();
		rating.set_id("5e1c4d11cbf2f241c5258514");
		rating.setRating(4);
		rating.setUserEmail("johnsmith15@gmail.com");
		rating.setBookId("nqEToRx5ek4C");
	}
	
	@Test
	public void Beantest() {
		new BeanTester().testBean(Rating.class);
	}
}
