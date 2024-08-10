package com.ayurhit.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ayurhit.dao.RoleDAO;
import com.ayurhit.dto.RoleDTO;
import com.ayurhit.entity.Role;


@Transactional
@Service
public class RoleServiceImpl implements RoleService {
	
	@Autowired
	private RoleDAO roleDAO;
	
	@Autowired
	private ModelMapper mapper;

	@Override
	public RoleDTO addRole(RoleDTO dto) {
		
		Role roleEntity = mapper.map(dto, Role.class);
		Role persistentRole = roleDAO.save(roleEntity);
		return mapper.map(persistentRole, RoleDTO.class);
	}
	
}
