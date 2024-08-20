package com.ayurhit.dto;

import java.time.LocalDate;

import com.ayurhit.type.Gender;

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
public class UserResponseDTO {

	private Long id;
	private String firstName;
	private String lastName;
	private String email;
	private Gender gender;
	private String phone;
	private LocalDate birthDate;
	private String profilePhoto;
	private boolean isDeleted;
	private AddressDTO addressDTO;
	private RoleDTO role;
}
