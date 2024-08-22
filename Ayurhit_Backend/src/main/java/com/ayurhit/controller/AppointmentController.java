package com.ayurhit.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ayurhit.dto.AppointmentDTO;
import com.ayurhit.dto.BookAppointmentDTO;
import com.ayurhit.security.JwtUtils;
import com.ayurhit.service.AppointmentService;

@RestController
@RequestMapping("/appointments")
public class AppointmentController {

	@Autowired
	private AppointmentService appointmentService;

	@Autowired
	private JwtUtils jwtUtils;

	@GetMapping
	public ResponseEntity<List<AppointmentDTO>> patientAppointments(@RequestHeader("Authorization") String authHeader) {

		if (authHeader != null) {
			try {
				List<AppointmentDTO> appointments = appointmentService.getPatientAppointments(jwtUtils.getId(authHeader));
				return ResponseEntity.ok(appointments);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		return null;
	}

	@PostMapping
	public ResponseEntity<BookAppointmentDTO> bookAppointment(@RequestBody BookAppointmentDTO bookAppointmentDTO) {
		System.out.println(bookAppointmentDTO);
		BookAppointmentDTO appointment = appointmentService.bookAppointment(bookAppointmentDTO);
		return ResponseEntity.ok(appointment);
	}

	@PutMapping("/{id}")
	public ResponseEntity<Boolean> updateStatus(@PathVariable Long id) {
		System.out.println("in new update API");
		Boolean isUpdated = appointmentService.updateAppointmentStatus(id);
		return ResponseEntity.ok(isUpdated);

	}
	@PutMapping("/cancel/{id}")
	public ResponseEntity<Boolean> cancelStatus(@PathVariable Long id)
	{
		System.out.println("in new cancel API");
		Boolean isCancel = appointmentService.cancelAppointment(id);
		return ResponseEntity.ok(isCancel);
	}
}
