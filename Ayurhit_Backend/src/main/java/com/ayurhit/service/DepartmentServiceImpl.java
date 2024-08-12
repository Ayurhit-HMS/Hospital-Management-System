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

	@Override
	public DepartmentDTO addDepartment(DepartmentDTO dto) {
		Department department = modelMapper.map(dto, Department.class);
		Department persistentDepartment = departmentDAO.save(department);
		return modelMapper.map(persistentDepartment, DepartmentDTO.class);
	}

	@Override
	public DepartmentDTO updateDepartment(Long id, DepartmentDTO dto) {
		if(departmentDAO.existsById(id)) {
			Department departmentEntity = departmentDAO.findById(id).orElseThrow();
			modelMapper.map(dto, departmentEntity);
			return modelMapper.map(departmentEntity, DepartmentDTO.class);
		}
		return null ;
	}
	
	public String deleteDepartment(Long id) {
		if(departmentDAO.existsById(id)) {
			departmentDAO.deleteById(id);
			return "deleted department details ....";
		}
		else
			return "failed to delete department details..";
	}
	
	
	public DepartmentDTO getDepartmentDetails(Long id) {
		if(departmentDAO.existsById(id)) {
			Department departmentEntity = departmentDAO.findById(id).orElseThrow();
			return modelMapper.map(departmentEntity, DepartmentDTO.class);
		}
		return null;
	}
	

	public List<DepartmentDTO> getAllDepartments() {
		Type targetListType = new TypeToken<List<DepartmentDTO>>() {
		}.getType();
		List<Department> list = departmentDAO.findAll();
		ArrayList<DepartmentDTO> dtolist = modelMapper.map(list, targetListType);
		return dtolist;
	}

}
