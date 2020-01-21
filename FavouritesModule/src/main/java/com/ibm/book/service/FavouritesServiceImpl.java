package com.ibm.book.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ibm.book.model.Favourites;
import com.ibm.book.repository.FavouritesRepository;

@Service
public class FavouritesServiceImpl  implements FavouritesService{

		@Autowired
		FavouritesRepository favRepo;

		public FavouritesRepository getFavRepo() {
			return favRepo;
		}

		public void setFavRepo(FavouritesRepository favRepo) {
			this.favRepo = favRepo;
		}

		public Favourites addToFavourites(Favourites fav) {
			return favRepo.save(fav);


		}
		
		@Override
		public void deleteById(String favId) {
			
			favRepo.deleteByBookId(favId);
		}

		@Override
		public List<Favourites> getAllFavouritesByEmail(String email) {
			return favRepo.getByEmail(email);

		}

		@Override
		public Favourites getFavouritesByEmailAndBookId(String email, String bookId) {
			return favRepo.getByEmailAndBookId(email, bookId);

		}	
}
