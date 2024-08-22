package com.ayurhit.service;

import com.ayurhit.dto.AddPatientDTO;
import com.ayurhit.dto.AddressDetialsDTO;
import com.ayurhit.dto.AllergyDTO;
import com.ayurhit.dto.BasicDetailsDTO;
import com.ayurhit.dto.ChronicConditionDTO;
import com.ayurhit.dto.CurrentMedicationDetailsDTO;
import com.ayurhit.dto.InsuranceDetailsDTO;
import com.ayurhit.dto.PatientDTO;

public interface PatientService {
	void addPatient(AddPatientDTO patientDTO);

	PatientDTO getPatientDetails(Long id);

	PatientDTO updatePatient(Long id, BasicDetailsDTO basicDetailsDTO);

	PatientDTO updatePatient(Long id, AddressDetialsDTO addressDetialsDTO);

	PatientDTO updatePatient(Long id, InsuranceDetailsDTO insuranceDetailsDTO);

	PatientDTO addChronicCondition(Long id, ChronicConditionDTO chronicConditionDTO);

	PatientDTO addAllergy(Long id, AllergyDTO allergyDTO);

	PatientDTO addCurrentMedication(Long id, CurrentMedicationDetailsDTO currentMedicationDetailsDTO);
}
