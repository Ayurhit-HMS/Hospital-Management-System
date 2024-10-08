package com.ayurhit.dto;

import java.time.LocalDate;

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
public class AddPatientDTO {
	private String firstName;
	private String lastName;
	private String email;
	private LocalDate birthDate;
	private String phone;
	private String bloodGroup;
	private String password;
}
