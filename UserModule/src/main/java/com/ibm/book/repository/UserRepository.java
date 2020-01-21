package com.ibm.book.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ibm.book.model.User;

public interface UserRepository extends JpaRepository<User, Integer>{

	public User findByEmailAndPassword(String email, String password);
	public User findByEmail(String email);
}
