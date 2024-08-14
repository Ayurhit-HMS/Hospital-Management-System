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
import com.ayurhit.dao.DoctorDAO;
import com.ayurhit.dao.PatientDAO;
import com.ayurhit.dto.AppointmentDTO;
import com.ayurhit.dto.BookAppointmentDTO;
import com.ayurhit.entity.Appointment;
import com.ayurhit.entity.Doctor;
import com.ayurhit.entity.Patient;
import com.ayurhit.type.AppointmentStatus;

@Service
@Transactional
public class AppointmentServiceImpl implements AppointmentService {

	@Autowired
	private AppointmetDAO appointmentDAO;

	@Autowired
	private PatientDAO patientDAO;

	@Autowired
	private DoctorDAO doctorDAO;

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

	@Override
	public BookAppointmentDTO bookAppointment(BookAppointmentDTO bookAppointmentDTO) {
		Appointment appointment = modelMapper.map(bookAppointmentDTO, Appointment.class);
		Doctor doctor = doctorDAO.findById(bookAppointmentDTO.getDoctorId()).orElseThrow();
		Patient patient = patientDAO.findById(bookAppointmentDTO.getPatientId()).orElseThrow();
		appointment.setStatus(AppointmentStatus.PENDING);
		appointment.setDoctor(doctor);
		appointment.setPatient(patient);
		Appointment persistedAppointment = appointmentDAO.save(appointment);
		return modelMapper.map(persistedAppointment, BookAppointmentDTO.class);
	}

}
