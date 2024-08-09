package com.ayurhit.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ayurhit.entity.User;

public interface UserDAO extends JpaRepository<User, Long> {

	User findByEmailAndPassword(String email, String password);
	
}
