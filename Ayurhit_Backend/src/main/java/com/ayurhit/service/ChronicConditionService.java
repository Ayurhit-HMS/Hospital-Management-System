package com.ayurhit.service;

import java.util.List;

import com.ayurhit.dto.ChronicConditionDTO;

public interface ChronicConditionService {

	ChronicConditionDTO addChronicCondition(ChronicConditionDTO chronicConditionDTO);

	List<ChronicConditionDTO> getAllChronicConditions();

}
