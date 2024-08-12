package com.ayurhit.dto;

import java.time.LocalDate;
import java.util.Set;

import com.ayurhit.type.EmployeeStatus;
import com.ayurhit.type.EmploymentType;
import com.ayurhit.type.WorkShift;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

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
public class EmployeeDTO extends UserDTO {
	
	private double salary;
	
	private LocalDate joinedDate;
	
	private String qualification;
	
	private EmploymentType employmentType;
	
	private WorkShift workShift;
	
	private EmployeeStatus employeeStatus;

	@JsonProperty(access = Access.WRITE_ONLY)
	private Set<Long> languageIds;
	
	@JsonProperty(access = Access.WRITE_ONLY)
	private Long branchId;
}
