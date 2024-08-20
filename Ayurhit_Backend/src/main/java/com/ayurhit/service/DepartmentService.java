package com.ayurhit.service;

import java.util.List;

import com.ayurhit.dto.DepartmentDTO;
import com.ayurhit.dto.DepartmentResDTO;

public interface DepartmentService {

	DepartmentDTO addDepartment(DepartmentDTO dto);
	
	DepartmentDTO updateDepartment(Long id, DepartmentDTO dto);

	List<DepartmentResDTO> getAllDepartments();

	String deleteDepartment(Long id);

	DepartmentDTO getDepartmentDetails(Long id);

}
