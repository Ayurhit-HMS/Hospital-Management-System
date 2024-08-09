package com.ayurhit.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.modelmapper.ModelMapper;
import org.springframework.boot.test.context.SpringBootTest;

import com.ayurhit.dao.UserDAO;
import com.ayurhit.dto.LoginDTO;
import com.ayurhit.dto.ValidUserDTO;
import com.ayurhit.entity.User;

@SpringBootTest
public class UserServiceTest {

	@Mock
	private UserDAO userDAO;

	@Mock
	private ModelMapper modelMapper;

	@InjectMocks
	private UserServiceImpl userService;

	@BeforeEach
	public void setUp() {
		MockitoAnnotations.openMocks(this);
	}

	@Test
	public void testValidLogin() {
		LoginDTO loginDTO = new LoginDTO();
		loginDTO.setEmail("rohit@gmail.com");
		loginDTO.setPassword("password@123");

		User user = new User();
		user.setEmail("rohit@gmail.com");
		user.setPassword("password@123");

		ValidUserDTO validUserDTO = new ValidUserDTO();
		validUserDTO.setEmail("rohit@gmail.com");
		validUserDTO.setFirstName("Rohit");
		validUserDTO.setLastName("Bagal");

		when(userDAO.findByEmailAndPassword(loginDTO.getEmail(), loginDTO.getPassword())).thenReturn(user);
		when(modelMapper.map(user, ValidUserDTO.class)).thenReturn(validUserDTO);

		Optional<ValidUserDTO> result = userService.loginUser(loginDTO);

		assertTrue(result.isPresent(), "Result should be present");
		assertEquals("rohit@gmail.com", result.get().getEmail());
		assertEquals("Rohit", result.get().getFirstName());
		assertEquals("Bagal", result.get().getLastName());
	}

	@Test
	public void testInvalidLogin() {
		LoginDTO loginDTO = new LoginDTO();
		loginDTO.setEmail("xyz@gmail.com");
		loginDTO.setPassword("1234");

		when(userDAO.findByEmailAndPassword(loginDTO.getEmail(), loginDTO.getPassword())).thenReturn(null);

		Optional<ValidUserDTO> result = userService.loginUser(loginDTO);

		assertFalse(result.isPresent());
	}
}
