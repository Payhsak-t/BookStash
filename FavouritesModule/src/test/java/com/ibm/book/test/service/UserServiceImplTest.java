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
//		when(userRepository.findByEmail(newUser.getEmail())).thenReturn(null);
		when(userRepository.save(Mockito.any(User.class))).thenReturn(newUser);
		User user= userServiceImpl.createUser(newUser);
//		when(userServiceImpl.createUser(newUser)).thenReturn(newUser);
//		verify(userRepository).save(Mockito.any());
	}

//	@Test(expected = UserAlreadyExistsException.class)
//	public void testRegisterUserFailure() throws UserAlreadyExistsException {
////		doThrow(UserAlreadyExistsException.class).when(userRepository.findByEmail(newUser.getEmail()));
//		when(userRepository.findByEmail(Mockito.anyString())).thenReturn(newUser);
////		throw new UserAlreadyExistsException();
////		User user= userServiceImpl.createUser(newUser);
//		verify(userRepository).findByEmail(Mockito.any());
//	}

	@Test
	public void testUpdateUserSuccess() throws Exception {
		date = new Date(System.currentTimeMillis());
		when(userRepository.findByEmail("johnsmith15@gmail.com")).thenReturn(newUser);
		newUser.setPhone("9923456798");
		newUser.setDob(date);;
		when(userServiceImpl.updateUser(newUser.getEmail(), newUser)).thenReturn(newUser);
		User updatedUser = userServiceImpl.updateUser(newUser.getEmail(), newUser);
		assertEquals("9923456798", updatedUser.getPhone());
//		verify(userRepository).save(Mockito.any());
	}

	@Test(expected = Exception.class)
	public void testUpdateUserFailure() throws Exception {

		when(userRepository.findByEmail("johnsmith15@gmail.com")).thenReturn(null);
		when(userServiceImpl.updateUser(newUser.getEmail(), newUser)).thenReturn(newUser);
		@SuppressWarnings("unused")
		User updatedUser = userServiceImpl.updateUser(newUser.getEmail(), newUser);
	}



//	@Test(expected = UserNotFoundException.class)
//	public void testDeleteUserFailure() throws UserNotFoundException {
//		when(userRepository.findByEmail("johnsmith15@gmail.com")).thenReturn(null).thenThrow(UserNotFoundException.class);
//		when(userServiceImpl.deleteUser(newUser.getId())).thenReturn(newUser);
////		verify(userRepository).findById(Mockito.any());
//		verify(userRepository).deleteById(Mockito.any());
//	}

	@Test
	public void testDeleteUserSuccess() {
		when(userRepository.findById(newUser.getId())).thenReturn(optUser);
		userRepository.deleteById(Mockito.anyInt());
//		verify(userRepository).findById(Mockito.any());
//		verify(userRepository).deleteById(Mockito.any());
	}

}

