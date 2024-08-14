package com.ayurhit.service;

import java.util.List;

import com.ayurhit.dto.RequestAppointmentStatusDTO;

public interface PendingAppointmentDetailsService {

	public List<RequestAppointmentStatusDTO> findAppointmentsByDoctorIdAndStatus(Long doctorId);
}
