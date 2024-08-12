package com.ayurhit.service;

import org.modelmapper.ModelMapper;
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

}
