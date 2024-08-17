package com.ayurhit.dto;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

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
public class PrescriptionDTO {
	private Long id;
	private LocalDateTime prescriptionDate;
	private PrescriptionPatientDTO patient;
	private PrescriptionDoctorDTO doctor;
	private Set<PrescriptionMedicineDTO> prescriptionMedicines = new HashSet<>();
}
