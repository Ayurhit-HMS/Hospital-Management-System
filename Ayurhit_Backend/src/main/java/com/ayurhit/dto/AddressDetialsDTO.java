package com.ayurhit.dto;

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
public class AddressDetialsDTO {
	private AddressDTO address;
	private String emergencyContactName;
	private String emergencyContactNumber;
	
}
