package com.ayurhit.dto;

import java.time.LocalDate;

import com.ayurhit.type.LicensingAuthority;

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
public class DoctorRequestDTO extends EmployeeDTO  {
	
	private String specelization;

	private String licenseNumber;

	private LocalDate licenseExpiryDate;

	private int experience;

	private double consultationFees;

	private String availabilitySchedule;

	private LicensingAuthority licensingAuthority;
	
	private String description;

	private Long departmentId;


}
