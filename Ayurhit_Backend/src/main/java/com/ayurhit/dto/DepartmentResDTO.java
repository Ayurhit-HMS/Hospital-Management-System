package com.ayurhit.dto;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor()
@ToString
public class DepartmentResDTO {

	private Long id;
	private String departmentName;
	private LocalDateTime createdAt;
	private String about;
	private String deptImage;
}
