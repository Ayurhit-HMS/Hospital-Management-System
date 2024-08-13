package com.ayurhit.service;

import java.util.List;

import com.ayurhit.dto.AppointmentDetailsDTO;
import com.ayurhit.dto.RequestAppointmentStatusDTO;
import com.ayurhit.type.AppointmentStatus;

public interface AppointmentDetailsService {
	
	public List<RequestAppointmentStatusDTO> findAppointmentsByDoctorId(Long doctorId);
	
	

}
