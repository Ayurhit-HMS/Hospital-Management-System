package com.ayurhit.dto;

import com.ayurhit.entity.Department;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class PrescriptionDoctorDTO {
	private String firstName;
	private String lastName;
	private String phone;
	private String qualification;
	private String specelization;
	private DepartmentDTO department;
}
