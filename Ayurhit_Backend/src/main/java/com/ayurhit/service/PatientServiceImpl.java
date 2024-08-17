package com.ayurhit.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ayurhit.dao.PatientDAO;
import com.ayurhit.dao.RoleDAO;
import com.ayurhit.dto.AddPatientDTO;
import com.ayurhit.dto.PatientDTO;
import com.ayurhit.entity.Patient;
import com.ayurhit.entity.Role;
import com.ayurhit.type.BloodGroup;

@Service
@Transactional
public class PatientServiceImpl implements PatientService {

	@Autowired
	private PatientDAO patientDAO;

	@Autowired
	private RoleDAO roleDAO;

	@Autowired
	private ModelMapper modelMapper;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Override
	public void addPatient(AddPatientDTO addPatientDTO) {
		Patient patient = modelMapper.map(addPatientDTO, Patient.class);
		patient.setBloodGroup(BloodGroup.fromCode(addPatientDTO.getBloodGroup()));
		Role role = roleDAO.findById(1L).orElseThrow(() -> new RuntimeException("Role not found"));
		patient.setRole(role);
		System.out.println(addPatientDTO.getPhone());
		patient.setDeleted(false);
		patient.setPassword(passwordEncoder.encode(addPatientDTO.getPassword()));
		patientDAO.save(patient);
	}

	@Override
	public PatientDTO getPatientDetails(String email) {
		Patient patient = patientDAO.findByEmail(email);
		return modelMapper.map(patient, PatientDTO.class);
	}
}
