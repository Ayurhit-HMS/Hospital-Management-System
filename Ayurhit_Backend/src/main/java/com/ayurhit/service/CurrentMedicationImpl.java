package com.ayurhit.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ayurhit.dao.CurrentMedicationDAO;
import com.ayurhit.dao.MedicineDAO;
import com.ayurhit.dto.CurrentMedicationDTO;
import com.ayurhit.entity.CurrentMedication;
import com.ayurhit.entity.Medicine;

@Service
@Transactional
public class CurrentMedicationImpl implements CurrentMedicationService {

	@Autowired
	private CurrentMedicationDAO currentMedicationDAO;

	@Autowired
	private ModelMapper modelMapper;

	@Autowired
	private MedicineDAO medicineDAO;

	@Override
	public CurrentMedicationDTO addCurrentMedication(CurrentMedicationDTO currentMedicationDTO) {
		CurrentMedication currentMedication = modelMapper.map(currentMedicationDTO, CurrentMedication.class);
		Medicine medicine = medicineDAO.findById(currentMedicationDTO.getMedicine().getId()).orElseThrow(null);
		currentMedication.setMedicine(medicine);
		CurrentMedication persistedCurrentMedication = currentMedicationDAO.save(currentMedication);
		return modelMapper.map(persistedCurrentMedication, CurrentMedicationDTO.class);
	}

}
