
package com.ibm.book.controller;

import java.util.ArrayList;
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

import com.ibm.book.exception.UserNotFoundException;
import com.ibm.book.model.Recommend;
import com.ibm.book.model.RecommendCount;
import com.ibm.book.model.User;
import com.ibm.book.service.RecommendService;
import com.ibm.book.service.UserService;


//@CrossOrigin(origins = "*", allowedHeaders = "*")
@CrossOrigin("*")
@RestController
@RequestMapping("/recommend")
public class RecommendController {
	
	private static Logger logger = LoggerFactory.getLogger(RecommendController.class);
	
	@Autowired
	RecommendService rs;
	@Autowired
	UserService us;


	@PostMapping("/save")
	public ResponseEntity<Recommend> saveRecommendation(@RequestBody Recommend r)
			throws NumberFormatException, UserNotFoundException {
		logger.info("Inside the save recommendation block");
		User u = us.getUserByEmail(r.getEmail());
		r.setRecId(Integer.toString(u.getId()) + r.getBookId());
		r.setUserId(u.getId());
		r.setEmail(u.getEmail());
		r.setName(u.getName());
		List<Recommend> list = rs.getAll();
		logger.info("Fetching recommendation by ID");
		Recommend rec = rs.getRecommendationById(r.getRecId());
		if (rec == null) {
			logger.info("The recommendation has been saved.");
			Recommend r2 = rs.saveRecommendation(r);
			return new ResponseEntity<Recommend>(r2, HttpStatus.CREATED);
		} else {
			logger.error("The recommendation cannot be added");
			return new ResponseEntity<Recommend>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/getAll")
	public ResponseEntity<List<Recommend>> getAllRecommendations() {
		ResponseEntity<?> r = null;
		logger.info("Inside getAllRecommendations method");
		List<Recommend> list = rs.getAll();
		r = ResponseEntity.status(HttpStatus.OK).body(list);
		logger.info("All the recommendations are fetched");
		return (ResponseEntity<List<Recommend>>) r;
	}

	@DeleteMapping("/unrecommend/{recId}")
	public ResponseEntity<Recommend> unrecommend(@PathVariable("recId") String recId) {
		try {
			logger.info("Inside the delete recommendation block");
			if (rs.getRecommendationById(recId) != null) {
				logger.info("The recommendation has been deleted");
				rs.delete(recId);
				return new ResponseEntity<Recommend>(HttpStatus.NO_CONTENT);
			}
		} catch (Exception e) {
			logger.error(e.getMessage());
		}
		logger.info("The recommendation was not found");
		return new ResponseEntity<Recommend>(HttpStatus.NOT_FOUND);
	}

	@GetMapping("/count")
	public ResponseEntity<?> getCountPlayer() {
		logger.info("Inside the getRecommendation count method");
		List<RecommendCount> p = rs.getBookCount();
		for (int i = 0; i < p.size(); i++) {
			List<Recommend> l = rs.getByBookId(p.get(i).getBookId());
			p.get(i).setTitle(l.get(0).getTitle());
			p.get(i).setAuthors(l.get(0).getAuthors());
			p.get(i).setSmallThumbnail(l.get(0).getSmallThumbnail());
			List<String> userEmail = new ArrayList<>();
			for (Recommend r : l) {
				userEmail.add(r.getEmail());
			}
			p.get(i).setEmail(userEmail);
		}
		if (!p.isEmpty()) {
			logger.info("Fetching recommendation count");
			return new ResponseEntity<List<RecommendCount>>(p, HttpStatus.OK);
		}
		logger.info("No recommendation was found");
		return new ResponseEntity<List<Recommend>>(HttpStatus.NO_CONTENT);
	}
	
	@GetMapping("/rec/{emailId}")
	public ResponseEntity<?> getByEmailId(@PathVariable("emailId") String emailId) throws UserNotFoundException {
		ResponseEntity<?> r = null;
		logger.info("Indside the fetch recommendation by emailId method");
		List<Recommend> list = rs.getByEmailId(emailId);
		if(list != null) {
			logger.info("Fetching recommendations for particular user");
			r = ResponseEntity.status(HttpStatus.OK).body(list);
			return r;
		}
		else {
			logger.info("User does not exist");
			throw new UserNotFoundException("User does not exist");
		}
	}
}