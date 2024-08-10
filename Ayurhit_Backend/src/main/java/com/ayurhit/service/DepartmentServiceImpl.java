package com.ayurhit.service;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ayurhit.dao.DepartmentDAO;
import com.ayurhit.dto.DepartmentDTO;
import com.ayurhit.entity.Department;

@Service
public class DepartmentServiceImpl implements DepartmentService {

	@Autowired
	private DepartmentDAO departmentDAO;

	@Autowired
	private ModelMapper modelMapper;

	public List<DepartmentDTO> getAllDepartments() {
		Type targetListType = new TypeToken<List<DepartmentDTO>>() {
		}.getType();
		List<Department> list = departmentDAO.findAll();
		ArrayList<DepartmentDTO> dtolist = modelMapper.map(list, targetListType);
		return dtolist;
	}

}
