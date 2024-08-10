package com.ayurhit.service;

import java.util.List;

import com.ayurhit.dto.DoctorDTO;

public interface DoctorService {

	List<DoctorDTO> getDoctorsByDepartment(String departmentName);

	DoctorResponseDTO addDoctor(DoctorRequestDTO dto);
	 
	 DoctorResponseDTO getDoctorDetails(Long id);
	 
	 DoctorResponseDTO updateDoctorDetails(Long id, UpdateDoctorDTO dto);
	 
	 String deleteDoctorDetails(Long id);


}
