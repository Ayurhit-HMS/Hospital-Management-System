package com.ayurhit.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ayurhit.dto.AddPatientDTO;
import com.ayurhit.service.PatientService;

@RestController
@RequestMapping("/patients")
public class PatientController {

	@Autowired
	private PatientService patientService;

	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping
	public ResponseEntity<Void> addPatient(@RequestBody AddPatientDTO patientDTO) {
		patientService.addPatient(patientDTO);
		return ResponseEntity.ok().build();
	}
}
