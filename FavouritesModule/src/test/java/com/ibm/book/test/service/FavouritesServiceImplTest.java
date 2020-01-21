package com.ibm.book.test.service;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.mockitoSession;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.List;
import java.util.Optional;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;

import com.ibm.book.model.Favourites;
import com.ibm.book.repository.FavouritesRepository;
import com.ibm.book.service.FavouritesServiceImpl;

@RunWith(MockitoJUnitRunner.class)
public class FavouritesServiceImplTest {
	@Mock
	private FavouritesRepository favouritesRepository;
	@InjectMocks
	private FavouritesServiceImpl favouritesService;
	Favourites favourites;
	List<Favourites> listFavourites;
	Optional<Favourites> optionalFavourites;

	@Before
	public void setUp() throws Exception {
		favourites = new Favourites("5nqEToRx5ek4C", 5, "nqEToRx5ek4C", "johnsmith15@gmail.com", "Hello!",
				"Janine Amos",
				"http://books.google.com/books/content?id=nqEToRx5ek4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api");
		optionalFavourites = Optional.of(favourites);
	}

	@Test
	public void testAddFavouritesSuccess() throws Exception {
		// BookRepository repo = Mockito.mock(BookRepository.class);
//		when(favRepository.findByBookIdAndUsername(Mockito.anyString(),Mockito.anyString())).
//					thenReturn(listfav);
		when(favouritesRepository.save(Mockito.any(Favourites.class))).thenReturn(favourites);
		Favourites addedBook = favouritesService.addToFavourites(favourites);
//		assertEquals(fav.getBookId(), addedBook.getBookId());
//		verify(favRepository).findByBookIdAndUsername(Mockito.anyString(),Mockito.anyString());
//		verify(favouritesRepository).save(Mockito.any());
	}

	@Test
	public void testGetAllFavouritesSuccess() {
//		 FavouriteRepository repo = Mockito.mock(FavouriteRepository.class);
//		when(favRepository.findAll()).
//					thenReturn(listfav);
//		when(favRepository.save(Mockito.any(Favourite.class))).
//					thenReturn(fav);
		Favourites addedBook = (Favourites) favouritesService.getFavouritesByEmailAndBookId("johnsmith15@gmail.com", "nqEToRx5ek4C");
//		assertEquals(fav.getUsername(), addedBook.getUsername());
		verify(favouritesRepository).getByEmailAndBookId(Mockito.anyString(), Mockito.anyString());
//		verify(favRepository).save(Mockito.any());
	}

}
