package com.ayurhit.service;

import java.lang.reflect.Type;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ayurhit.dao.AllergyDAO;
import com.ayurhit.dto.AllergyDTO;
import com.ayurhit.entity.Allergy;

@Service
@Transactional
public class AllergyServiceImpl implements AllergyService {

	@Autowired
	private AllergyDAO allergyDAO;

	@Autowired
	private ModelMapper modelMapper;

	@Override
	public AllergyDTO addAllergy(AllergyDTO allergyDTO) {
		Allergy allergy = modelMapper.map(allergyDTO, Allergy.class);
		Allergy persitedAllergy = allergyDAO.save(allergy);
		return modelMapper.map(persitedAllergy, AllergyDTO.class);
	}

	@Override
	public List<AllergyDTO> getAllAllergiess() {
		Type targetListType = new TypeToken<List<AllergyDTO>>() {
		}.getType();
		List<Allergy> list = allergyDAO.findAll();
		return modelMapper.map(list, targetListType);
	}

}
