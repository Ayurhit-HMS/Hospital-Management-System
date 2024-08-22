package com.ayurhit.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ayurhit.dto.AllergyDTO;
import com.ayurhit.service.AllergyService;

@RestController
@RequestMapping("/allergy")
public class AllergyController {

	@Autowired
	private AllergyService allergyService;

	@PostMapping
	public ResponseEntity<AllergyDTO> addAllergy(@RequestBody AllergyDTO allergyDTO) {
		AllergyDTO allergy = allergyService.addAllergy(allergyDTO);
		return ResponseEntity.ok(allergy);
	}

	@GetMapping
	public ResponseEntity<List<AllergyDTO>> getAllChronicConditions() {
		List<AllergyDTO> allergies = allergyService.getAllAllergiess();
		return ResponseEntity.ok(allergies);
	}
}
