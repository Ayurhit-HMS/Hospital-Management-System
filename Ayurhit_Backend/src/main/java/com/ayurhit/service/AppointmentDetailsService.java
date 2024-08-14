package com.ayurhit.service;

import java.util.List;

import com.ayurhit.dto.RequestAppointmentStatusDTO;

public interface AppointmentDetailsService {
	
	public List<RequestAppointmentStatusDTO> findAppointmentsByDoctorId(Long doctorId);
	
	

}
