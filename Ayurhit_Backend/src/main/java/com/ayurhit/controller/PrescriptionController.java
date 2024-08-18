package com.ayurhit.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ayurhit.dto.PrescriptionDTO;
import com.ayurhit.security.JwtUtils;
import com.ayurhit.service.PrescriptionService;

@RestController
@RequestMapping("/prescriptions")
public class PrescriptionController {

	@Autowired
	private PrescriptionService prescriptionService;

	@Autowired
	private JwtUtils jwtUtils;

	@GetMapping("/patient")
	public ResponseEntity<List<PrescriptionDTO>> findPatientPrescriptions(
			@RequestHeader("Authorization") String token) {
		System.out.println(jwtUtils.getId(token));
		List<PrescriptionDTO> prescriptions = prescriptionService.getPatientPrescriptions(jwtUtils.getId(token));
		return ResponseEntity.ok(prescriptions);
	}

	@GetMapping("/doctor")
	public ResponseEntity<List<PrescriptionDTO>> findDoctorPrescriptions(@RequestParam Long id) {
		List<PrescriptionDTO> prescriptions = prescriptionService.getDoctorPrescriptions(id);
		return ResponseEntity.ok(prescriptions);
	}
}
