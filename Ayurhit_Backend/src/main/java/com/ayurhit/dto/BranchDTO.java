package com.ayurhit.dto;

import java.time.LocalDate;

import javax.persistence.Lob;

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
public class BranchDTO {
	
	private int code;
	
	private String name;
	
	private String head;
	
	private String phone;
	
	private String latitude;
	private String longitude;
	
	private String email;
	
	@JsonProperty(access = Access.WRITE_ONLY)
	private LocalDate establishedDate;
	
	
	private String licenseNumber;
	@Lob
	private String description;

	private AddressDTO addressDTO;
	
}
