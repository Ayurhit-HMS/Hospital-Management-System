package com.ayurhit.service;

import java.lang.reflect.Type;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ayurhit.dao.PrescriptionDAO;
import com.ayurhit.dto.PrescriptionDTO;
import com.ayurhit.entity.Prescription;

@Service
@Transactional
public class PrescriptionServiceImpl implements PrescriptionService {

	@Autowired
	private PrescriptionDAO prescriptionDAO;

	@Autowired
	private ModelMapper modelmapper;

	@Override
	public List<PrescriptionDTO> getPatientPrescriptions(Long id) {
		Type targetListType = new TypeToken<List<PrescriptionDTO>>() {
		}.getType();

		List<Prescription> list = prescriptionDAO.findPatientPrescriptions(id);

		List<PrescriptionDTO> prescriptions = modelmapper.map(list, targetListType);
		return prescriptions;
	}

	@Override
	public List<PrescriptionDTO> getDoctorPrescriptions(Long id) {
		Type targetListType = new TypeToken<List<PrescriptionDTO>>() {
		}.getType();

		List<Prescription> list = prescriptionDAO.findDoctorPrescriptions(id);

		List<PrescriptionDTO> prescriptions = modelmapper.map(list, targetListType);
		return prescriptions;
	}

}
