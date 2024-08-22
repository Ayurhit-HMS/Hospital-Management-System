package com.ayurhit.service;

import java.lang.reflect.Type;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ayurhit.dao.ChronicConditionDAO;
import com.ayurhit.dto.ChronicConditionDTO;
import com.ayurhit.entity.ChronicCondition;

@Service
@Transactional
public class ChronicConditionImpl implements ChronicConditionService {

	@Autowired
	private ChronicConditionDAO chronicConditionDAO;

	@Autowired
	private ModelMapper modelMapper;

	@Override
	public ChronicConditionDTO addChronicCondition(ChronicConditionDTO chronicConditionDTO) {
		ChronicCondition chronicCondition = modelMapper.map(chronicConditionDTO, ChronicCondition.class);
		ChronicCondition persistedChronicCondition = chronicConditionDAO.save(chronicCondition);
		return modelMapper.map(persistedChronicCondition, ChronicConditionDTO.class);
	}

	@Override
	public List<ChronicConditionDTO> getAllChronicConditions() {
		Type targetListType = new TypeToken<List<ChronicConditionDTO>>() {
		}.getType();
		List<ChronicCondition> list = chronicConditionDAO.findAll();
		return modelMapper.map(list, targetListType);
	}

}
