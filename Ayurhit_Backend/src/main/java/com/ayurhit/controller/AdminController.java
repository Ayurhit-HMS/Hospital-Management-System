package com.ayurhit.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ayurhit.dto.AdminRequestDTO;
import com.ayurhit.service.AdminService;

@RestController
@RequestMapping("/admin")
public class AdminController {
	
	@Autowired
	private AdminService adminService;
	
	
	@PostMapping
	public ResponseEntity<?> addAdmin(@RequestBody AdminRequestDTO dto) {
		return ResponseEntity.status(HttpStatus.CREATED).body(adminService.addAdmin(dto));
	}
		
}
