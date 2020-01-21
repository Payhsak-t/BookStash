package com.ibm.book.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.ibm.book.model.Favourites;


public interface FavouritesRepository extends MongoRepository<Favourites, String>{

	public List<Favourites> getByEmail(String email);
	public void deleteByBookId(String id);
	public Favourites getByEmailAndBookId(String email, String bookId);


}
