package com.ayurhit.service;

import java.util.List;

import com.ayurhit.dto.AllergyDTO;

public interface AllergyService {

	AllergyDTO addAllergy(AllergyDTO allergyDTO);

	List<AllergyDTO> getAllAllergiess();

}
