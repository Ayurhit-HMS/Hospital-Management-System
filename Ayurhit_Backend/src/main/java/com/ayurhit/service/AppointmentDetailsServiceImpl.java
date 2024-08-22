package com.ayurhit.service;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ayurhit.dao.AppointmentDetailsDao;
import com.ayurhit.dao.AppointmetDAO;
import com.ayurhit.dao.DoctorDAO;
import com.ayurhit.dto.AppointmentDTO;
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
	
	@Autowired
	AppointmetDAO appointmetDAO;
	

	@Override
	public List<RequestAppointmentStatusDTO> findAppointmentsByDoctorId(Long doctorId) {
		
		Type targetListType = new TypeToken<List<RequestAppointmentStatusDTO>>() {
		}.getType();
		List<Appointment> appointments = appointmetDAO.findAppointmentsByDoctorId(doctorId);
		ArrayList<RequestAppointmentStatusDTO> appointmentList = mapper.map(appointments, targetListType);
		return appointmentList;
	
}
}

