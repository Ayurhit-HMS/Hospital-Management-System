package com.ayurhit.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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

@RestController
@RequestMapping("/patients")
public class PatientController {

	@Autowired
	private PatientService patientService;

	@Autowired
	JwtUtils jwtUtils;

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
		PatientDTO patient = patientService.getPatientDetails(jwtUtils.getId(authHeader));
		return ResponseEntity.ok(patient);
	}

}
