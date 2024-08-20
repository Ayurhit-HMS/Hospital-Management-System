package com.ayurhit.controller;

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

import com.ayurhit.dto.ScheduleDTO;
import com.ayurhit.security.JwtUtils;
import com.ayurhit.service.ScheduleService;

@RestController
@RequestMapping("/schedules")
public class ScheduleController {

	@Autowired
	private ScheduleService scheduleService;
	
	@Autowired
	private JwtUtils jwtUtils;
	
	@PostMapping
	public ResponseEntity<?> addNewSchedule(@RequestHeader("Authorization") String authHeader, @RequestBody ScheduleDTO dto){
		Long adminId = jwtUtils.getId(authHeader);
		return ResponseEntity.status(HttpStatus.CREATED).body(scheduleService.addSchedule(dto, adminId));
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<?> updateScheduleStatus(@PathVariable Long id){
		return ResponseEntity.ok(scheduleService.updateScheduleStatus(id));
	}
	
	@GetMapping
	public ResponseEntity<?> getAllSchedules(){
		return ResponseEntity.ok(scheduleService.getAllSchedules());
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteSchedule(@PathVariable Long id){
		return ResponseEntity.ok(scheduleService.deleteSchedule(id));
	}
}
