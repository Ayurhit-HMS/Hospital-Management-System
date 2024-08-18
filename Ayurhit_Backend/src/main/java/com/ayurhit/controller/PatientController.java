package com.ayurhit.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ayurhit.dto.AddPatientDTO;
import com.ayurhit.security.JwtUtils;
import com.ayurhit.service.PatientService;
import com.ayurhit.util.MailService;

@RestController
@RequestMapping("/patients")
@CrossOrigin(origins = "http://localhost:3000")
public class PatientController {

	@Autowired
	private PatientService patientService;
	
	@Autowired
	JwtUtils jwtUtils;

	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping
	public ResponseEntity<Void> addPatient(@RequestBody AddPatientDTO patientDTO) {
		patientService.addPatient(patientDTO);
		String firstName = patientDTO.getFirstName();
		String lastName = patientDTO.getLastName();
		String email = patientDTO.getEmail();
		MailService.sendEmail(email,firstName, lastName);
		return ResponseEntity.ok().build();
	}

}
