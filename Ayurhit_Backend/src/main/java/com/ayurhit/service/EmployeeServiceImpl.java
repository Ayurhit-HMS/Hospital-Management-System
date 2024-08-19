package com.ayurhit.service;

import java.lang.reflect.Type;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ayurhit.dao.EmployeeDAO;
import com.ayurhit.dto.EmployeeDTO;
import com.ayurhit.dto.EmployeeResponseDTO;
import com.ayurhit.entity.Employee;


@Service
@Transactional
public class EmployeeServiceImpl implements EmployeeService{

	@Autowired
	private EmployeeDAO employeeDao;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Override
	public List<EmployeeResponseDTO> getAllEmployees() {
		List<Employee> employees = employeeDao.findAll(); 
		
		Type targetListType = new TypeToken <List<EmployeeResponseDTO>>() {}.getType();	
		return modelMapper.map(employees, targetListType);
	}
	
}
