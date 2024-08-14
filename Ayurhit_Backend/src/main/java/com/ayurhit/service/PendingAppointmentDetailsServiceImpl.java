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
import com.ayurhit.entity.Appointment;
import com.ayurhit.entity.Doctor;
import com.ayurhit.type.AppointmentStatus;

@Transactional
@Service
public class PendingAppointmentDetailsServiceImpl implements PendingAppointmentDetailsService {
	
	
	@Autowired
	AppointmentDetailsDao appointmentDetailsDao;

	@Autowired
	DoctorDAO doctorDAO;

	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private DoctorDAO doctorDao;

	@Override
	public List<RequestAppointmentStatusDTO> findAppointmentsByDoctorIdAndStatus(Long doctorId) {
		
		Doctor doctor = doctorDAO.findById(doctorId).orElseThrow();

		List<Appointment> appointments = appointmentDetailsDao.findByDoctorAndStatus(doctor, AppointmentStatus.PENDING);
		

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
