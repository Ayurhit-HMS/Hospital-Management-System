package com.ayurhit.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ayurhit.dto.PastSurgeryDTO;
import com.ayurhit.service.PastSurgeryService;

@RestController
@RequestMapping("/pastSurgery")
public class PastSurgeryController {

	@Autowired
	private PastSurgeryService pastSurgeryService;

	@PostMapping
	public ResponseEntity<PastSurgeryDTO> addPastSurgery(@RequestBody PastSurgeryDTO pastSurgeryDTO) {
		PastSurgeryDTO currentMedication = pastSurgeryService.addPastSurgery(pastSurgeryDTO);
		return ResponseEntity.ok(currentMedication);
	}
}
