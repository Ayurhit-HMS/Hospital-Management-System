package com.ayurhit.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ayurhit.dao.PastSurgeryDAO;
import com.ayurhit.dao.PatientDAO;
import com.ayurhit.dto.PastSurgeryDTO;
import com.ayurhit.dto.PatientDTO;
import com.ayurhit.entity.PastSurgery;
import com.ayurhit.entity.Patient;

@Service
@Transactional
public class PastSurgeryServiceImpl implements PastSurgeryService {

	@Autowired
	private PastSurgeryDAO pastSurgeryDAO;

	@Autowired
	private ModelMapper modelMapper;

	@Autowired
	private PatientDAO patientDAO;

	@Override
	public PatientDTO addPastSurgery(PastSurgeryDTO pastSurgeryDTO, Long id) {
		Patient persistedPatient = patientDAO.findById(id).orElseThrow(null);
		PastSurgery pastSurgery = modelMapper.map(pastSurgeryDTO, PastSurgery.class);
		pastSurgery.setPatient(persistedPatient);
		PastSurgery persistedPastSurgery = pastSurgeryDAO.save(pastSurgery);
		persistedPatient = patientDAO.findById(id).orElseThrow(null);
		return modelMapper.map(persistedPatient, PatientDTO.class);
	}
}
