package com.ayurhit.service;

import java.util.List;

import com.ayurhit.dto.RoleDTO;
import com.ayurhit.dto.RoleResDTO;

public interface RoleService {
	
	 RoleDTO addRole(RoleDTO dto);
	 
	 List<RoleResDTO> getAllRoles();
}
