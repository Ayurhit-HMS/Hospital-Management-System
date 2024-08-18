package com.ayurhit.dto;

import java.time.LocalDate;
import java.util.Set;

import com.ayurhit.type.EmployeeStatus;
import com.ayurhit.type.EmploymentType;
import com.ayurhit.type.Gender;
import com.ayurhit.type.LicensingAuthority;
import com.ayurhit.type.WorkShift;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
public class DoctorResDTO {
	private String firstName;
}
