package com.ayurhit.service;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ayurhit.dao.AppointmentDetailsDao;
import com.ayurhit.dao.DoctorDAO;
import com.ayurhit.dto.AppointmentDetailsDTO;
import com.ayurhit.dto.RequestAppointmentStatusDTO;
//import com.ayurhit.dto.AppointmentStatusDTO;
import com.ayurhit.entity.Appointment;
import com.ayurhit.entity.Doctor;
import com.ayurhit.type.AppointmentStatus;

@Transactional
@Service
public class AppointmentDetailsServiceImpl implements AppointmentDetailsService {

	@Autowired
	AppointmentDetailsDao appointmentDetailsDao;

	@Autowired
	DoctorDAO doctorDAO;

	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private DoctorDAO doctorDao;

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

