package com.ayurhit.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ayurhit.dao.MedicineDAO;
import com.ayurhit.dto.MedicineDTO;
import com.ayurhit.entity.Medicine;

@Service
@Transactional
public class MedicineServiceImpl implements MedicineService {

	@Autowired
	private MedicineDAO medicineDAO;

	@Autowired
	private ModelMapper modelMapper;

	@Override
	public MedicineDTO addMedicine(MedicineDTO medicineDTO) {
		Medicine medicine = modelMapper.map(medicineDTO, Medicine.class);
		Medicine persistedMedicine = medicineDAO.save(medicine);
		return modelMapper.map(persistedMedicine, MedicineDTO.class);
	}

}
