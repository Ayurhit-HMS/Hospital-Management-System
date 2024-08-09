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
public class AddressDTO {
	private String addressLine1;
	private String addressLine2;
	private String city;
	private String state;
	private String pinCode;
	private String country;
}
