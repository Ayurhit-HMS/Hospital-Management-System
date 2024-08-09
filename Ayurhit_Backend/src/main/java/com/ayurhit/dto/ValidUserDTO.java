package com.ayurhit.dto;

import com.ayurhit.entity.BaseEntity;
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
public class ValidUserDTO extends BaseEntity {

	private String firstName;

	private String lastName;

	private String password;

	private String email;

	private Gender gender;

	private String phone;

	private AddressDTO address;

	private RoleDTO role;

}
