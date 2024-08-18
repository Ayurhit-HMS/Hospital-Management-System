package com.ayurhit.dto;

import java.time.LocalDate;
import java.util.Set;

import com.ayurhit.entity.Branch;
import com.ayurhit.entity.Language;
import com.ayurhit.type.EmployeeStatus;
import com.ayurhit.type.EmploymentType;
import com.ayurhit.type.Gender;
import com.ayurhit.type.LicensingAuthority;
import com.ayurhit.type.WorkShift;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
public class DoctorResponseDTO {

	private Long id;

	private String firstName;

	private String lastName;

	private String email;

	private Gender gender;

	private String phone;

	private LocalDate birthDate;

	private String profilePhoto;

	private AddressDTO addressDTO;

	private Double salary;

	private LocalDate joinedDate;

	private String qualification;

	private EmploymentType employmentType;

	private WorkShift workShift;

	private EmployeeStatus employeeStatus;

	private Set<LanguagesDTO> languages ;
	
	private BranchDTO branchDTO;
	
	private String specelization;

	private String licenseNumber;

	private LocalDate licenseExpiryDate;

	private Integer  experience;

	private Double consultationFees;

	private String availabilitySchedule;

	private LicensingAuthority licensingAuthority;

}
