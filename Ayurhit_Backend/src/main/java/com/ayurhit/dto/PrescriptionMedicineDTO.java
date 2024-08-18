package com.ayurhit.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;

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
public class PrescriptionMedicineDTO {
	private String dosage;
	private String frequency;
	private String duration;
	@JsonIgnore
	private PrescriptionDTO prescription;
	private MedicineDTO medicine;
}
