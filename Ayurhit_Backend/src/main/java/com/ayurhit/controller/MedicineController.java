package com.ayurhit.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ayurhit.dto.MedicineDTO;
import com.ayurhit.service.MedicineService;

@RestController
@RequestMapping("/medicine")
public class MedicineController {

	@Autowired
	private MedicineService medicineService;

	@PostMapping
	public ResponseEntity<MedicineDTO> addMedicine(@RequestBody MedicineDTO medicineDTO) {
		MedicineDTO medicine = medicineService.addMedicine(medicineDTO);
		return ResponseEntity.ok(medicine);
	}
}
