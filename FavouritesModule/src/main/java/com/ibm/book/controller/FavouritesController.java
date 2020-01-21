package com.ibm.book.controller;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.book.exception.FavouriteAlreadyExistsException;
import com.ibm.book.exception.UserNotFoundException;
import com.ibm.book.model.Favourites;
import com.ibm.book.model.User;
import com.ibm.book.service.FavouritesService;
import com.ibm.book.service.UserService;
//@CrossOrigin(origins = "*", allowedHeaders = "*")
@CrossOrigin("*")
@RestController
@RequestMapping("/favourites")
public class FavouritesController {
	
	private static Logger logger = LoggerFactory.getLogger(FavouritesController.class);
	
	@Autowired
	FavouritesService favService;
	@Autowired
	UserService userService;
	
	@PostMapping("/fave")
	public ResponseEntity<Favourites> addToFavourites(@RequestBody Favourites favObj)
			throws FavouriteAlreadyExistsException, UserNotFoundException {
		logger.info("Inside the addTofavourites method");
		User u = userService.getUserByEmail(favObj.getEmail());		
		if(u == null) {
			logger.info("User does not exist.");
			throw new UserNotFoundException("User does not exist");
		}
		else {
			Favourites list = favService.getFavouritesByEmailAndBookId(u.getEmail(), favObj.getBookId());
			if(list == null) {
				favObj.setFavId(Integer.toString(u.getId()) + favObj.getBookId());
				favObj.setUserId(u.getId());
				favObj.setEmail(u.getEmail());
				Favourites r2 = favService.addToFavourites(favObj);
				logger.info("The favourite has been added");
				return new ResponseEntity<Favourites>(r2, HttpStatus.CREATED);
			}
			else {
				logger.error("This favourite already exists");
				throw new FavouriteAlreadyExistsException("Favourite Already Exists");
			}
		}

	}
	@GetMapping("/fave/{userId}")
	public ResponseEntity<?> getUserFavs(@PathVariable("userId") String email) throws UserNotFoundException {
		ResponseEntity<?> r = null;
		logger.info("Inside the getUserFavs method");
		List<Favourites> list = favService.getAllFavouritesByEmail(email);
		if(list != null) {
			logger.info("The favourites have been fetched by email");
			r = ResponseEntity.status(HttpStatus.OK).body(list);
			return r;
		}
		else {
			logger.error("The particular user does not exist");
			throw new UserNotFoundException("User does not exist");
		}
	}
	@DeleteMapping("/fave/{favId}")
	public ResponseEntity<Favourites> removeFav(@PathVariable("favId") String favId) {
		try {
			logger.info("Inside the delete favourite try block");
			favService.deleteById(favId);
			logger.info("The favourite has been deleted");
			return new ResponseEntity<Favourites>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			logger.error(e.getMessage());
		}
		logger.error("The favourite was not found");
		return new ResponseEntity<Favourites>(HttpStatus.NOT_FOUND);
	}
}