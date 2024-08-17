package com.ayurhit.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ayurhit.service.AppointmentDetailsService;

@RestController
@RequestMapping("/appointments-doctor")
public class AppointmentDetailsController {

	@Autowired
	private AppointmentDetailsService appointmentDetailsService;

	@GetMapping("/{doctorId}")
	public ResponseEntity<?> getAppointment(@PathVariable Long doctorId) throws IOException {

		return ResponseEntity.ok(appointmentDetailsService.findAppointmentsByDoctorId(doctorId));
	}

}
