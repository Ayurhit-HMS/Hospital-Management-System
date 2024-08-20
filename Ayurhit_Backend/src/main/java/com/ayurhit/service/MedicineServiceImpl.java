package com.ayurhit.service;

import java.lang.reflect.Type;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
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
	
	@Override
	public List<MedicineDTO> getAllMedicines() {
		List<Medicine> medicines=medicineDAO.findAll();
		Type targetListType = new TypeToken<List<MedicineDTO>>() {
		}.getType();
		
		return modelMapper.map(medicines,targetListType);
	}

}
