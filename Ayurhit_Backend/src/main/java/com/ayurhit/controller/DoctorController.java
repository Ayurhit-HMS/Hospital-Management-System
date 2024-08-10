package com.ayurhit.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ayurhit.dto.DoctorDTO;
import com.ayurhit.service.DoctorService;

@RestController
@RequestMapping("/doctor")
public class DoctorController {

	@Autowired
	private DoctorService doctorService;

	@GetMapping("/deptDoctors/{departmentName}")
	public ResponseEntity<List<DoctorDTO>> findDoctorsByDepartment(@PathVariable("departmentName") String departmentName) {
		List<DoctorDTO> docList = doctorService.getDoctorsByDepartment(departmentName);
		return ResponseEntity.ok(docList);
	}
}
