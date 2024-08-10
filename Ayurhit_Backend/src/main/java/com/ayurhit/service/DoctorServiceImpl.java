package com.ayurhit.service;

import java.lang.reflect.Type;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ayurhit.dao.DoctorDAO;
import com.ayurhit.dto.DoctorDTO;
import com.ayurhit.entity.Doctor;

@Service
@Transactional
public class DoctorServiceImpl implements DoctorService {

	@Autowired
	private DoctorDAO doctorDAO;

	@Autowired
	private ModelMapper modelMapper;

	@Override
	public List<DoctorDTO> getDoctorsByDepartment(String departmentName) {
		List<Doctor> doctors = doctorDAO.findDoctorsByDepartmentName(departmentName);
		Type targetListType = new TypeToken<List<DoctorDTO>>() {
		}.getType();
		return modelMapper.map(doctors, targetListType);
	}
}
