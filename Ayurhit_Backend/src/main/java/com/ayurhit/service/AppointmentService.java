package com.ayurhit.service;

import java.util.List;

import com.ayurhit.dto.AppointmentDTO;
import com.ayurhit.dto.BookAppointmentDTO;

public interface AppointmentService {

	public List<AppointmentDTO> getPatientAppointments(Long patientId);

	BookAppointmentDTO bookAppointment(BookAppointmentDTO bookAppointmentDTO);

	public Boolean updateAppointmentStatus(Long id);

	public boolean cancelAppointment(Long appointmentId);

}
