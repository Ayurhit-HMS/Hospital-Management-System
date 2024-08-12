package com.ayurhit.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ayurhit.dto.InsuranceProviderDTO;
import com.ayurhit.service.InsuranceProviderService;

@RestController
@RequestMapping("/insuranceProvider")
public class InsuranceProviderController {

	@Autowired
	private InsuranceProviderService insuranceProviderService;

	@PostMapping
	public ResponseEntity<InsuranceProviderDTO> addInsuranceProvider(
			@RequestBody InsuranceProviderDTO insuranceProviderDTO) {
		InsuranceProviderDTO insuranceProvider = insuranceProviderService.addInsuranceProvider(insuranceProviderDTO);
		return ResponseEntity.ok(insuranceProvider);
	}
}
