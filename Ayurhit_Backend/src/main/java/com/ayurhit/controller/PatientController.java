package com.ayurhit.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ayurhit.dto.AddPatientDTO;
import com.ayurhit.dto.PatientDTO;
import com.ayurhit.security.JwtUtils;
import com.ayurhit.service.PatientService;
import com.ayurhit.util.MailService;

import io.jsonwebtoken.Claims;

@RestController
@RequestMapping("/patients")
@CrossOrigin(origins = "http://localhost:3000")
public class PatientController {

	@Autowired
	private PatientService patientService;
	
	@Autowired
	private JwtUtils jwtUtils;


	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping
	public ResponseEntity<Void> addPatient(@RequestBody AddPatientDTO patientDTO) {
		patientService.addPatient(patientDTO);
		String firstName = patientDTO.getFirstName();
		String lastName = patientDTO.getLastName();
		String email = patientDTO.getEmail();
		MailService.sendEmail(email, firstName, lastName);
		return ResponseEntity.ok().build();
	}

	@GetMapping
	public ResponseEntity<PatientDTO> getPatientDetails(@RequestHeader("Authorization") String authHeader) {
		if (authHeader != null && authHeader.startsWith("Bearer ")) {
			String token = authHeader.substring(7);

			try {
				Claims claim = jwtUtils.validateJwtToken(token);
				String email = claim.getSubject();
				PatientDTO patient = patientService.getPatientDetails(email);
				return ResponseEntity.ok(patient);
			} catch (Exception e) {
				e.printStackTrace();
				return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
			}
		} else {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}
	}
}
