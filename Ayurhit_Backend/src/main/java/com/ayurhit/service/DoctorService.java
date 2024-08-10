package com.ayurhit.service;

import java.util.List;

import com.ayurhit.dto.DoctorDTO;

public interface DoctorService {

	List<DoctorDTO> getDoctorsByDepartment(String departmentName);

}
