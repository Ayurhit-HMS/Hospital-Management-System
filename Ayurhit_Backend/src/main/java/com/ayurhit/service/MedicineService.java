package com.ayurhit.service;

import java.util.List;

import com.ayurhit.dto.MedicineDTO;

public interface MedicineService {

	MedicineDTO addMedicine(MedicineDTO medicineDTO);
	List<MedicineDTO> getAllMedicines();
}
