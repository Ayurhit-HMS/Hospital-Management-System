package com.ayurhit.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ayurhit.dto.DoctorDTO;
import com.ayurhit.dto.DoctorRequestDTO;
import com.ayurhit.dto.ScheduleDTO;
import com.ayurhit.dto.UpdateDoctorDTO;
import com.ayurhit.security.JwtUtils;
import com.ayurhit.service.DoctorService;

@RestController
@RequestMapping("/doctor")
public class DoctorController {

	@Autowired
	private DoctorService doctorService;
	

	@GetMapping("/dept/{departmentName}")
	public ResponseEntity<List<DoctorDTO>> findDoctorsByDepartment(
			@PathVariable("departmentName") String departmentName) {
		List<DoctorDTO> docList = doctorService.getDoctorsByDepartment(departmentName);
		return ResponseEntity.ok(docList);
	}

	@PostMapping
	private ResponseEntity<?> addDoctor(@RequestBody DoctorRequestDTO dto) {
		return ResponseEntity.status(HttpStatus.CREATED).body(doctorService.addDoctor(dto));
	}

	@GetMapping("/{id}")
	private ResponseEntity<?> getDoctorDetails(@PathVariable Long id) {
		return ResponseEntity.ok(doctorService.getDoctorDetails(id));
	}

	@PutMapping("/{id}")
	private ResponseEntity<?> updateDoctorDetails(@PathVariable Long id, @RequestBody UpdateDoctorDTO dto) {
		return ResponseEntity.ok(doctorService.updateDoctorDetails(id, dto));
	}

	@DeleteMapping("/{id}")
	private ResponseEntity<?> deleteDoctorDetails(@PathVariable Long id) {
		return ResponseEntity.ok(doctorService.deleteDoctorDetails(id));
	}

	@GetMapping("/schedules/{id}")
	private ResponseEntity<List<ScheduleDTO>> getAllSchedules(@PathVariable Long id) {
		List<ScheduleDTO> schedules = doctorService.getAllSchedules(id);
		return ResponseEntity.ok(schedules);
	}
}
