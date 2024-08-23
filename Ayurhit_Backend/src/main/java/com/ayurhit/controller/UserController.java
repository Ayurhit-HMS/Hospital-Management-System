package com.ayurhit.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ayurhit.dto.LoginDTO;
import com.ayurhit.dto.ValidUserDTO;
import com.ayurhit.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserService userService;

	@PostMapping("/login")
	public ResponseEntity<ValidUserDTO> login(@RequestBody LoginDTO loginDTO) {
		ValidUserDTO user = userService.loginUser(loginDTO).orElseThrow(null);	
		return ResponseEntity.ok(user);
	}
}
