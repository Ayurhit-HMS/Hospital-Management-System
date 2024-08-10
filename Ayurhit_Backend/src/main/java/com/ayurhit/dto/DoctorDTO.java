package com.ayurhit.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DoctorDTO {
	private Long id;
	private String firstName;
	private String lastName;
	private String specelization;
}
