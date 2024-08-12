package com.ayurhit.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ayurhit.dao.BranchDAO;
import com.ayurhit.dto.BranchDTO;
import com.ayurhit.entity.Address;
import com.ayurhit.entity.Branch;

@Service
@Transactional
public class BranchServiceImpl implements BranchService {
	
	@Autowired
	private BranchDAO branchDAO;
	
	@Autowired
	private ModelMapper mapper;
	

	@Override
	public BranchDTO addBranch(BranchDTO dto) {
		Address address = new Address();
		address.setAddressLine1(dto.getAddressDTO().getAddressLine1());
		address.setAddressLine2(dto.getAddressDTO().getAddressLine2());
		address.setCity(dto.getAddressDTO().getCity());
		address.setPinCode(dto.getAddressDTO().getPinCode());
		address.setState(dto.getAddressDTO().getState());
		address.setCountry(dto.getAddressDTO().getCountry());
		Branch branch = mapper.map(dto, Branch.class);
		branch.setAddress(address);
		Branch persistentBranch = branchDAO.save(branch);
		return mapper.map(persistentBranch, BranchDTO.class);
	}


	@Override
	public BranchDTO updateBranchDetails(Long id, BranchDTO dto) {
		if(branchDAO.existsById(id)) {
			Branch branchEntity = branchDAO.findById(id).orElseThrow();
			Address address = mapper.map(dto.getAddressDTO(), Address.class);
			branchEntity.setAddress(address);
			mapper.map(dto, branchEntity);
		
			return mapper.map(branchEntity, BranchDTO.class);
		}
		return null;
	}

}
