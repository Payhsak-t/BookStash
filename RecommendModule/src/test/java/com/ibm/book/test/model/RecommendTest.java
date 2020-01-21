package com.ibm.book.test.model;

import org.junit.Before;
import org.junit.Test;
import org.meanbean.test.BeanTester;

import com.ibm.book.model.Recommend;

public class RecommendTest {
	private Recommend recommend;

	@Before
	public void setUp() throws Exception {
		recommend = new Recommend();
		recommend.setRecId("5nqEToRx5ek4C");
		recommend.setUserId(5);
		recommend.setBookId("nqEToRx5ek4C");
		recommend.setEmail("johnsmith15@gmail.com");
		recommend.setName("John Smith");
		recommend.setTitle("Hello!");
		recommend.setAuthors("Janine Amos");
		recommend.setSmallThumbnail(
				"http://books.google.com/books/content?id=nqEToRx5ek4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api");

	}

	@Test
	public void Beantest() {
		new BeanTester().testBean(Recommend.class);
	}

}
