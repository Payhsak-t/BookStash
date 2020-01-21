package com.ibm.book.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

import com.ibm.book.exception.UserAlreadyExistsException;
import com.ibm.book.exception.UserNotFoundException;
import com.ibm.book.model.User;
import com.ibm.book.repository.UserRepository;
import com.mongodb.operation.UserExistsOperation;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepo;

	@Override
	public User createUser(User newUser) throws UserAlreadyExistsException {
		User userOp = userRepo.findByEmail(newUser.getEmail());
		if (userOp != null) {
			throw new UserAlreadyExistsException("User Already Exists");
		} else {
			String hashpw = BCrypt.hashpw(newUser.getPassword(), BCrypt.gensalt());
			newUser.setPassword(hashpw);
			return userRepo.save(newUser);
		}
	}

	@Override
	public User updateUser(String id, User newUser) {
		User existingUser = userRepo.findByEmail(id);
		existingUser.setId(existingUser.getId());
		existingUser.setEmail(existingUser.getEmail());
		existingUser.setDob(existingUser.getDob());
		existingUser.setGender(existingUser.getGender());
		existingUser.setName(newUser.getName());
		existingUser.setPassword(existingUser.getPassword());
		existingUser.setGenre(newUser.getGenre());
		existingUser.setPhone(newUser.getPhone());
		existingUser.setImg(newUser.getImg());
		return userRepo.save(existingUser);
	}

	@Override
	public void deleteUser(int id) throws UserNotFoundException {
		Optional<User> userOp = userRepo.findById(id);
		if (userOp.isPresent()) {
			userRepo.deleteById(id);
		} 
		else {
			throw new UserNotFoundException("User does not exist.");
		}
	}

	@Override
	public User login(String email, String password) throws UserNotFoundException {
		User matchedUser = userRepo.findByEmail(email);
		System.out.println(matchedUser.getEmail());
			System.out.println("Login matched user:"+matchedUser.getEmail() + matchedUser.getPassword());
			boolean matched = BCrypt.checkpw(password, matchedUser.getPassword());
			if (matched==false)
				return null;
			return matchedUser;

	}

	@Override
	public User getUserByEmail(String email) throws UserNotFoundException {
		User userOp = userRepo.findByEmail(email);
		if (userOp != null) {
			return userOp;
		} 
		else
			throw new UserNotFoundException("User does not exist.");
	}

	@Override
	public User updateUserPassword(String id, String password) {
		User existingUser = userRepo.findByEmail(id);
		existingUser.setId(existingUser.getId());
		existingUser.setEmail(existingUser.getEmail());
		existingUser.setDob(existingUser.getDob());
		existingUser.setGender(existingUser.getGender());
		existingUser.setName(existingUser.getName());
		String hashpw = BCrypt.hashpw(password, BCrypt.gensalt());
		existingUser.setPassword(hashpw);
		existingUser.setGenre(existingUser.getGenre());
		existingUser.setPhone(existingUser.getPhone());
		existingUser.setImg(existingUser.getImg());
		return userRepo.save(existingUser);
	}

}
