package com.ibm.book.test.service;

import static org.junit.Assert.*;
import static org.mockito.Mockito.doThrow;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.sql.Date;
import java.util.Optional;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;

import com.ibm.book.exception.UserAlreadyExistsException;
import com.ibm.book.exception.UserNotFoundException;
import com.ibm.book.model.User;
import com.ibm.book.repository.UserRepository;
import com.ibm.book.service.UserServiceImpl;

public class UserServiceImplTest {

	@Mock private UserRepository userRepository;
	@InjectMocks UserServiceImpl userServiceImpl;
	private Date date;
     
	private User newUser,newUser1;
	Optional<User> optUser;

	@Before
	public void setUp() throws Exception {
		MockitoAnnotations.initMocks(this);
		date = new Date(System.currentTimeMillis());
		newUser = new User(2, "John Smith",date, "male", "fiction","johnsmith15@gmail.com","123456","9923456798",null);
		optUser = Optional.of(newUser);
		
		newUser1 = new User();
		newUser1.setId(1);
		newUser1.setEmail("12");
	}

	@After
	public void tearDown() throws Exception {
	}

	@Test
	public void testRegisterUserSuccess() throws UserAlreadyExistsException {
		when(userRepository.save(Mockito.any(User.class))).thenReturn(newUser);
		User user= userServiceImpl.createUser(newUser);
	}

	@Test
	public void testUpdateUserSuccess() throws Exception {
		date = new Date(System.currentTimeMillis());
		when(userRepository.findByEmail("johnsmith15@gmail.com")).thenReturn(newUser);
		newUser.setPhone("9923456798");
		newUser.setDob(date);;
		when(userServiceImpl.updateUser(newUser.getEmail(), newUser)).thenReturn(newUser);
		User updatedUser = userServiceImpl.updateUser(newUser.getEmail(), newUser);
		assertEquals("9923456798", updatedUser.getPhone());
	}

	@Test(expected = Exception.class)
	public void testUpdateUserFailure() throws Exception {

		when(userRepository.findByEmail("johnsmith15@gmail.com")).thenReturn(null);
		when(userServiceImpl.updateUser(newUser.getEmail(), newUser)).thenReturn(newUser);
		@SuppressWarnings("unused")
		User updatedUser = userServiceImpl.updateUser(newUser.getEmail(), newUser);
	}

	@Test
	public void testDeleteUserSuccess() {
		when(userRepository.findById(newUser.getId())).thenReturn(optUser);
		userRepository.deleteById(Mockito.anyInt());
	}

}

