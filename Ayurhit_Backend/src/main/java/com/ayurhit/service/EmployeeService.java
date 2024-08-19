package com.ayurhit.service;

import java.util.List;

import com.ayurhit.dto.EmployeeResponseDTO;

public interface EmployeeService {
	
	List<EmployeeResponseDTO> getAllEmployees();
}
