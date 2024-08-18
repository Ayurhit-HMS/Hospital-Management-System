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

	private String firstName;

	private String lastName;

	private String email;

	private Gender gender;

	private String phone;

	private LocalDate birthDate;

	private String profilePhoto;

	private AddressDTO address;

	private double salary;

	private LocalDate joinedDate;

	private String qualification;

	private EmploymentType employmentType;

	private WorkShift workShift;

	private EmployeeStatus employeeStatus;

	private Set<Language> languages;

	private BranchDTO branch;

	private String specelization;

	private String licenseNumber;

	private LocalDate licenseExpiryDate;

	private int experience;

	private double consultationFees;

	private String availabilitySchedule;

	private LicensingAuthority licensingAuthority;

}
