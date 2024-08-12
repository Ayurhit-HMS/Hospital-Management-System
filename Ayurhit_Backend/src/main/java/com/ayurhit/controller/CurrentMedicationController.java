package com.ayurhit.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ayurhit.dto.CurrentMedicationDTO;
import com.ayurhit.service.CurrentMedicationService;

@RestController
@RequestMapping("/currentMedication")
public class CurrentMedicationController {

	@Autowired
	private CurrentMedicationService currentMedicationService;

	@PostMapping
	public ResponseEntity<CurrentMedicationDTO> addCurrentMedication(
			@RequestBody CurrentMedicationDTO currentMedicationDTO) {
		CurrentMedicationDTO currentMedication = currentMedicationService.addCurrentMedication(currentMedicationDTO);
		return ResponseEntity.ok(currentMedication);
	}
}
