package com.ibm.book.test.model;

import org.junit.Before;
import org.junit.Test;
import org.meanbean.test.BeanTester;

import com.ibm.book.model.Favourites;

public class FavouritesTest {
	private Favourites favourites;

	@Before
	public void setUp() throws Exception {
		favourites = new Favourites();
		favourites.setFavId("5nqEToRx5ek4C");
		favourites.setUserId(5);
		favourites.setBookId("nqEToRx5ek4C");
		favourites.setEmail("johnsmith15@gmail.com");
		favourites.setTitle("Hello!");
		favourites.setAuthors("Janine Amos");
		favourites.setSmallThumbnail(
				"http://books.google.com/books/content?id=nqEToRx5ek4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api");
	}
	
	@Test
	public void Beantest() {
		new BeanTester().testBean(Favourites.class);
	}

}
