package com.ayurhit.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ayurhit.dto.PastSurgeryDTO;
import com.ayurhit.dto.PatientDTO;
import com.ayurhit.security.JwtUtils;
import com.ayurhit.service.PastSurgeryService;

@RestController
@RequestMapping("/pastSurgery")
public class PastSurgeryController {

	@Autowired
	private PastSurgeryService pastSurgeryService;

	@Autowired
	private JwtUtils jwtutils;

	@PostMapping
	public ResponseEntity<PatientDTO> addPastSurgery(@RequestBody PastSurgeryDTO pastSurgeryDTO,
			@RequestHeader("Authorization") String authHeader) {
		PatientDTO patient = pastSurgeryService.addPastSurgery(pastSurgeryDTO, jwtutils.getId(authHeader));
		return ResponseEntity.ok(patient);
	}
}
