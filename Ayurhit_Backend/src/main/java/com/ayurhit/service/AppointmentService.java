package com.ayurhit.service;

import java.util.List;

import com.ayurhit.dto.AppointmentDTO;

public interface AppointmentService {

	public List<AppointmentDTO> getPatientAppointments(Long patientId);

}
