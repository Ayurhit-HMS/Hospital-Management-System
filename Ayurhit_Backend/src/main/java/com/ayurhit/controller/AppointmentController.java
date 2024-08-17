package com.ayurhit.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ayurhit.dto.AppointmentDTO;
import com.ayurhit.dto.BookAppointmentDTO;
import com.ayurhit.service.AppointmentService;

@RestController
@RequestMapping("appointments")
public class AppointmentController {

	@Autowired
	private AppointmentService appointmentService;

	@GetMapping
	public ResponseEntity<List<AppointmentDTO>> patientAppointments(@RequestParam Long patientId) {
		List<AppointmentDTO> appointments = appointmentService.getPatientAppointments(patientId);
		return ResponseEntity.ok(appointments);
	}

	@PostMapping
	public ResponseEntity<BookAppointmentDTO> bookAppointment(@RequestBody BookAppointmentDTO bookAppointmentDTO) {
		System.out.println(bookAppointmentDTO);
		BookAppointmentDTO appointment = appointmentService.bookAppointment(bookAppointmentDTO);
		return ResponseEntity.ok(appointment);
	}

	@PutMapping("/{appointmentId}/cancel")
	public ResponseEntity<Boolean> cancelAppointment(@PathVariable Long appointmentId) {
		boolean updated = appointmentService.cancelAppointment(appointmentId);
		return ResponseEntity.ok(updated);
	}

	@PutMapping("/{id}")
	public ResponseEntity<Boolean> updateStatus(@PathVariable Long id) {
		System.out.println("in new update API");
		Boolean isUpdated = appointmentService.updateAppointmentStatus(id);
		return ResponseEntity.ok(isUpdated);

	}
}
