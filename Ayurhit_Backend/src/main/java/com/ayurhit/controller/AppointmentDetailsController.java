package com.ayurhit.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ayurhit.security.JwtUtils;
import com.ayurhit.service.AppointmentDetailsService;

@RestController
@RequestMapping("/appointments-doctor")
public class AppointmentDetailsController {

	@Autowired
	private AppointmentDetailsService appointmentDetailsService;
	
	@Autowired
	private JwtUtils jwtUtils;

	@GetMapping
	public ResponseEntity<?> getAppointment(@RequestHeader("Authorization") String authHeader) throws IOException {
		String token = authHeader.substring(7);
		Long id = jwtUtils.getId(token);
		System.out.println(id);
		
		return ResponseEntity.ok(appointmentDetailsService.findAppointmentsByDoctorId(jwtUtils.getId(token)));
	}

}
