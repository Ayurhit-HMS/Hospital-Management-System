package com.ayurhit.dto;

import java.time.LocalDate;
import java.util.Set;

import com.ayurhit.entity.Address;
import com.ayurhit.entity.Admin;
import com.ayurhit.entity.Branch;
import com.ayurhit.entity.Language;
import com.ayurhit.type.EmployeeStatus;
import com.ayurhit.type.EmploymentType;
import com.ayurhit.type.Gender;
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
public class AdminResponseDTO {

	private String firstName;

	private String lastName;

	private String email;

	private Gender gender;

	private String phone;

	private LocalDate birthDate;

	private String profilePhoto;

	private AddressDTO addressdDTO;

	private double salary;
	
	private LocalDate joinedDate;
	
	private String qualification;
	
	private EmploymentType employmentType;
	
	private WorkShift workShift;
	
	private EmployeeStatus employeeStatus;

	private Set<LanguagesDTO> languagesDTO ;
	
	private BranchDTO branchDTO;
	
	private AdminResponseDTO managerDTO;
}
