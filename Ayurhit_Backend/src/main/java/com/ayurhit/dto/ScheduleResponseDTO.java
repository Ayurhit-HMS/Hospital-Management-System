package com.ayurhit.dto;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Set;

import org.springframework.format.annotation.DateTimeFormat;

import com.ayurhit.entity.Admin;
import com.ayurhit.entity.Department;
import com.ayurhit.entity.Doctor;
import com.ayurhit.type.EmployeeStatus;
import com.ayurhit.type.EmploymentType;
import com.ayurhit.type.WorkShift;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
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

	private DoctorResDTO doctorResponseDTO;

	private DepartmentDTO departmentDTO;
	
	private AdminResponseDTO adminResponseDTO;

	
}
