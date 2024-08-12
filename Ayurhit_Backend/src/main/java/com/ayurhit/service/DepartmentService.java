package com.ayurhit.service;

import java.util.List;

import com.ayurhit.dto.DepartmentDTO;

public interface DepartmentService {

	DepartmentDTO addDepartment(DepartmentDTO dto);
	
	DepartmentDTO updateDepartment(Long id, DepartmentDTO dto);

	List<DepartmentDTO> getAllDepartments();

	String deleteDepartment(Long id);

	DepartmentDTO getDepartmentDetails(Long id);

}
