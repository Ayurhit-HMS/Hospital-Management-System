/*Failing*/

package com.ayurhit.controller;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;

import com.ayurhit.dto.LoginDTO;
import com.ayurhit.dto.ValidUserDTO;
import com.ayurhit.service.UserService;

@WebMvcTest(UserController.class)
public class UserControllerTest {

	@Autowired
	private MockMvc mockMvc;

	@MockBean
	private UserService userService;

	@Test
	public void testLogin() throws Exception {

		LoginDTO loginDTO = new LoginDTO();
		loginDTO.setEmail("rohit@gmail.com");
		loginDTO.setPassword("password@123");

		ValidUserDTO validUserDTO = new ValidUserDTO();
		validUserDTO.setEmail("rohit@gmail.com");
		validUserDTO.setFirstName("Rohit");
		validUserDTO.setLastName("Bagal");

		when(userService.loginUser(loginDTO)).thenReturn(Optional.of(validUserDTO));
		System.out.println(Optional.of(validUserDTO));

		mockMvc.perform(post("/user/login")
			    .contentType("application/json")
			    .content("{\"email\":\"rohit@gmail.com\",\"password\":\"password@123\"}"))
			    .andDo(MockMvcResultHandlers.print())
			    .andExpect(jsonPath("$.email").value("rohit@gmail.com"))
			    .andExpect(jsonPath("$.firstName").value("Rohit"))
			    .andExpect(jsonPath("$.lastName").value("Bagal"));
	}
}
