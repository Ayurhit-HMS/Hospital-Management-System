package com.ayurhit.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ayurhit.dto.ChronicConditionDTO;
import com.ayurhit.service.ChronicConditionService;

@RestController
@RequestMapping("/chronicCondition")
public class ChronicConditionController {

	@Autowired
	private ChronicConditionService chronicConditionService;

	@PostMapping
	public ResponseEntity<ChronicConditionDTO> addChronicCondition(
			@RequestBody ChronicConditionDTO chronicConditionDTO) {
		ChronicConditionDTO chronicCondition = chronicConditionService.addChronicCondition(chronicConditionDTO);
		return ResponseEntity.ok(chronicCondition);
	}

	@GetMapping
	public ResponseEntity<List<ChronicConditionDTO>> getAllChronicConditions() {
		List<ChronicConditionDTO> chronicConditions = chronicConditionService.getAllChronicConditions();
		return ResponseEntity.ok(chronicConditions);
	}
}
