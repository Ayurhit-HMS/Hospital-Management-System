package com.ayurhit.dto;

import com.ayurhit.entity.BaseEntity;

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
public class PrescriptionDTO extends BaseEntity {
	private String date;
	private String dosage;
	private String duration;
	private MedicineDTO medicine;
	private DoctorDTO doctor;
}
