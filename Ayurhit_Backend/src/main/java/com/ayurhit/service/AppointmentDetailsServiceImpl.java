package com.ayurhit.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ayurhit.dao.AppointmentDetailsDao;
import com.ayurhit.dao.DoctorDAO;
import com.ayurhit.dto.RequestAppointmentStatusDTO;
//import com.ayurhit.dto.AppointmentStatusDTO;
import com.ayurhit.entity.Appointment;
import com.ayurhit.entity.Doctor;

@Transactional
@Service
public class AppointmentDetailsServiceImpl implements AppointmentDetailsService {

	@Autowired
	AppointmentDetailsDao appointmentDetailsDao;

	@Autowired
	DoctorDAO doctorDAO;

	@Autowired
	private ModelMapper mapper;
	

	@Override
	public List<RequestAppointmentStatusDTO> findAppointmentsByDoctorId(Long doctorId) {
		
		Doctor doctor = doctorDAO.findById(doctorId).orElseThrow();
		List<Appointment> appointments = appointmentDetailsDao.findByDoctor(doctor);

		List<RequestAppointmentStatusDTO> dtoList = new ArrayList<RequestAppointmentStatusDTO>();
		appointments.forEach(appointment -> {
			RequestAppointmentStatusDTO appointmentStatusDTO = mapper.map(appointment,
					RequestAppointmentStatusDTO.class);
			mapper.map(appointment.getPatient(), appointmentStatusDTO);
			dtoList.add(appointmentStatusDTO);
		});

		return dtoList;

	
}
}

