package com.ayurhit.service;

import com.ayurhit.dto.AddPatientDTO;
import com.ayurhit.dto.PatientDTO;

public interface PatientService {
	void addPatient(AddPatientDTO patientDTO);

	PatientDTO getPatientDetails(Long id);
}
