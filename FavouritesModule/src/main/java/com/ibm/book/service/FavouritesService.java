package com.ibm.book.service;

import java.util.List;

import com.ibm.book.model.Favourites;

public interface FavouritesService {
		public void deleteById(String favId);

		public Favourites addToFavourites(Favourites favObj);
		public List<Favourites> getAllFavouritesByEmail(String email);
		public Favourites getFavouritesByEmailAndBookId(String email, String bookId);
}
