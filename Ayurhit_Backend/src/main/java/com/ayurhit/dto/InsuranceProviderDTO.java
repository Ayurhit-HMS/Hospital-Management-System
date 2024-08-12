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
public class InsuranceProviderDTO {
	private Long id;
	private String name;
	private String code;
	private String contactPerson;
	private String contactNumber;
	private String email;
	private String coverageDetails;
}
