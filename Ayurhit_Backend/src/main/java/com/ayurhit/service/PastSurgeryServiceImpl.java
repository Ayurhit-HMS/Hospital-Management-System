package com.ayurhit.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ayurhit.dao.PastSurgeryDAO;
import com.ayurhit.dto.PastSurgeryDTO;
import com.ayurhit.entity.PastSurgery;

@Service
@Transactional
public class PastSurgeryServiceImpl implements PastSurgeryService {

	@Autowired
	private PastSurgeryDAO pastSurgeryDAO;

	@Autowired
	private ModelMapper modelMapper;

	@Override
	public PastSurgeryDTO addPastSurgery(PastSurgeryDTO pastSurgeryDTO) {
		PastSurgery pastSurgery = modelMapper.map(pastSurgeryDTO, PastSurgery.class);
		PastSurgery persistedPastSurgery = pastSurgeryDAO.save(pastSurgery);
		return modelMapper.map(persistedPastSurgery, PastSurgeryDTO.class);
	}

}
