package com.ayurhit.dao;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import com.ayurhit.entity.User;

@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
public class UserDAOTest {

	@Autowired
	private UserDAO userDAO;

	@Test
	public void testFindByValidEmailAndPassword() {
		User persistedUser = userDAO.findByEmailAndPassword("p1@gmail.com", "string");
		assertNotNull(persistedUser);
		assertEquals("p1@gmail.com", persistedUser.getEmail());
		assertEquals("string", persistedUser.getPassword());
	}

	@Test
	public void testFindByInvalidEmailAndPassword() {
		User persistedUser = userDAO.findByEmailAndPassword("any", "pass");
		assertNull(persistedUser);
	}
}
