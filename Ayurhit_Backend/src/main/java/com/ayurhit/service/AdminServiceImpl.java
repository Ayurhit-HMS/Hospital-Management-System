package com.ayurhit.service;


import java.util.HashSet;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ayurhit.dao.AddressDAO;
import com.ayurhit.dao.AdminDAO;
import com.ayurhit.dao.BranchDAO;
import com.ayurhit.dao.LanguageDAO;
import com.ayurhit.dao.RoleDAO;
import com.ayurhit.dto.AdminRequestDTO;
import com.ayurhit.dto.AdminResponseDTO;
import com.ayurhit.entity.Address;
import com.ayurhit.entity.Admin;
import com.ayurhit.entity.Branch;
import com.ayurhit.entity.Language;
import com.ayurhit.entity.Role;

@Service
@Transactional
public class AdminServiceImpl implements AdminService {
	
	@Autowired
	private AdminDAO adminDAO;
	
	@Autowired
	private LanguageDAO languageDAO;
	
	@Autowired
	private RoleDAO roleDAO;
	
	@Autowired
	private BranchDAO branchDAO;
	
	@Autowired
	private AddressDAO addressDAO;
	
	@Autowired
	private ModelMapper mapper;
	
	 @Autowired
	 private PasswordEncoder passwordEncoder;

	@Override
	public AdminResponseDTO addAdmin(AdminRequestDTO dto) {
		HashSet<Long> adminLanguageIds = new HashSet<Long>();
		for(Long langId : dto.getLanguageIds()) {
			adminLanguageIds.add(langId);
		}
		
		HashSet<Language> adminLanguages = new HashSet<Language>();
		for(Long id : adminLanguageIds) {
			Language adminLanguage = languageDAO.findById(id).orElseThrow(null);
			adminLanguages.add(adminLanguage);
		}
		
		String password = dto.getPassword();
		String encodedPassword = passwordEncoder.encode(password);
				
		//Admin manager = adminDAO.findById(dto.getManagerId()).orElseThrow();
		Branch branch = branchDAO.findById(dto.getBranchId()).orElseThrow();
		Address address = mapper.map(dto.getAddressDTO(), Address.class);
		Address persistentAddress = addressDAO.save(address);
		Role role = roleDAO.findById(dto.getRoleId()).orElseThrow();	
		Admin adminEntity = mapper.map(dto, Admin.class);
		adminEntity.setPassword(encodedPassword);
		//adminEntity.setManager(manager);
		adminEntity.setBranch(branch);
		adminEntity.setAddress(persistentAddress);
		adminEntity.setRole(role);
		adminEntity.setLanguages(adminLanguages);
		Admin persistentAdmin = adminDAO.save(adminEntity); 
		return mapper.map(persistentAdmin, AdminResponseDTO.class);
	}

	@Override
	public AdminResponseDTO updateAdminDeails(AdminRequestDTO dto) {
		if(adminDAO.existsById(dto.getId())) {
			Admin adminEntity = adminDAO.findById(dto.getId()).orElseThrow();
			return mapper.map(adminEntity, AdminResponseDTO.class);
		}
		return null;
	}

	@Override
	public String deleteAdminDetails(Long id) {
		if(adminDAO.existsById(id)) {
			adminDAO.deleteById(id);
			return "deleted admin details....";
		}
		return "failed to delete admin details...";
	}

	public AdminResponseDTO getAdminDetails(Long id) {
		Admin admin = adminDAO.findById(id).orElseThrow();
		return mapper.map(admin, AdminResponseDTO.class);
	}
	
	

	

}
