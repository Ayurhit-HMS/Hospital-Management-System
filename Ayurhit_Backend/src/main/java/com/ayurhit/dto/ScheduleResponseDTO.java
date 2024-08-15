package com.ayurhit.dto;

import java.time.LocalDate;
import java.time.LocalTime;

import org.springframework.format.annotation.DateTimeFormat;

import com.ayurhit.entity.Admin;
import com.ayurhit.entity.Department;
import com.ayurhit.entity.Doctor;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ScheduleResponseDTO {
	
	private Long id;
	
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate scheduleDate;

	@DateTimeFormat(pattern ="HH:mm:ss")
	private LocalTime scheduleTime;
	
	private boolean isSelected;

	private DoctorResponseDTO doctorDTO;

	private DepartmentDTO departmentDTO;
	
	private AdminResponseDTO adminResponseDTO;

	
}
