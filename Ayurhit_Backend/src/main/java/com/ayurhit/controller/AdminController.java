package com.ayurhit.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ayurhit.dto.AdminRequestDTO;
import com.ayurhit.dto.PatientDTO;
import com.ayurhit.security.JwtUtils;
import com.ayurhit.service.AdminService;

import io.jsonwebtoken.Claims;

@RestController
@RequestMapping("/admin")

public class AdminController {
	
	@Autowired
	private AdminService adminService;
	
	@Autowired
	private JwtUtils jwtUtils;

	@PostMapping
	public ResponseEntity<?> addAdmin(@RequestBody AdminRequestDTO dto) {
		return ResponseEntity.status(HttpStatus.CREATED).body(adminService.addAdmin(dto));
	}
	
	@GetMapping
	public ResponseEntity<?> getAdminDetails(@RequestHeader("Authorization") String authHeader) {
			String token = authHeader.substring(7);
			Long id = jwtUtils.getId(token);
			return ResponseEntity.ok(adminService.getAdminDetails(id));
		}	
	}
		

