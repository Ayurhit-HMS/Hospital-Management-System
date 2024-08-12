package com.ayurhit.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ayurhit.dao.InsuranceProviderDAO;
import com.ayurhit.dto.InsuranceProviderDTO;
import com.ayurhit.entity.InsuranceProvider;

@Service
@Transactional
public class InsuranceProviderServiceImpl implements InsuranceProviderService {

	@Autowired
	private InsuranceProviderDAO insuranceProviderDAO;

	@Autowired
	private ModelMapper modelMapper;

	@Override
	public InsuranceProviderDTO addInsuranceProvider(InsuranceProviderDTO insuranceProviderDTO) {
		InsuranceProvider insuranceProvider = modelMapper.map(insuranceProviderDTO, InsuranceProvider.class);
		InsuranceProvider persistedInsuranceProvider = insuranceProviderDAO.save(insuranceProvider);
		return modelMapper.map(persistedInsuranceProvider, InsuranceProviderDTO.class);
	}

}
