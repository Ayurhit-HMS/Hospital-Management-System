package com.ayurhit.service;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ayurhit.dao.AppointmetDAO;
import com.ayurhit.dto.AppointmentDTO;
import com.ayurhit.entity.Appointment;

@Service
@Transactional
public class AppointmentServiceImpl implements AppointmentService {

	@Autowired
	private AppointmetDAO appointmentDAO;

	@Autowired
	private ModelMapper modelMapper;

	@Override
	public List<AppointmentDTO> getPatientAppointments(Long patientId) {
		Type targetListType = new TypeToken<List<AppointmentDTO>>() {
		}.getType();
		List<Appointment> appointments = appointmentDAO.findAppointmentsByPatientId(patientId);
		ArrayList<AppointmentDTO> appointmentList = modelMapper.map(appointments, targetListType);
		return appointmentList;
	}

}
