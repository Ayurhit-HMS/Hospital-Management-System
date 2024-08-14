package com.ayurhit.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ayurhit.service.AppointmentDetailsService;
import com.ayurhit.service.PendingAppointmentDetailsService;

@RestController
@RequestMapping("/pending-appointments-doctor")
public class PendingAppointmentController {
	
	@Autowired
	private PendingAppointmentDetailsService pendingAppointmentDetailsService;
		
		@GetMapping("/{doctorId}")
		public ResponseEntity<?> getPendingAppointment(@PathVariable Long doctorId) throws IOException {
			return ResponseEntity.ok(pendingAppointmentDetailsService.findAppointmentsByDoctorIdAndStatus(doctorId));
		}

}
