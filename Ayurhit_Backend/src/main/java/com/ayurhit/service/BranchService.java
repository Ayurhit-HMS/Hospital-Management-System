package com.ayurhit.service;

import java.util.List;

import com.ayurhit.dto.BranchDTO;

public interface BranchService {

	BranchDTO addBranch(BranchDTO dto);
	
	BranchDTO updateBranchDetails(Long id, BranchDTO dto);
	
	List<BranchDTO> getAllBranchDetails();
}
