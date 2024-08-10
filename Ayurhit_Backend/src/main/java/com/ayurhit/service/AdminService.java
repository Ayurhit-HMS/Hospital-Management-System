package com.ayurhit.service;

import com.ayurhit.dto.AdminRequestDTO;
import com.ayurhit.dto.AdminResponseDTO;

public interface AdminService {

	 AdminResponseDTO addAdmin(AdminRequestDTO dto);
	 
	 AdminResponseDTO updateAdminDeails(AdminRequestDTO dto);
	 
	 String deleteAdminDetails(Long doctorId);
}
