package com.ayurhit.dto;

import java.time.LocalDate;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UpdateDoctorDTO {
	
	private double consultationFees;
	
	private LocalDate licenseExpiryDate;

}
