package com.ayurhit.service;

import java.util.List;

import com.ayurhit.dto.DoctorPrescriptionDTO;
import com.ayurhit.dto.PrescriptionDTO;

public interface PrescriptionService {

	List<PrescriptionDTO> getPatientPrescriptions(Long id);

	List<PrescriptionDTO> getDoctorPrescriptions(Long id);
	
	public String createPrescription(DoctorPrescriptionDTO prescriptionRequest);

}
