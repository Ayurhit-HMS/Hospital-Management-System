package com.ayurhit.dto;

import java.time.LocalDateTime;
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
public class DoctorPrescriptionMedicineDTO {
	private String medicineName;
    private String dosage;
    private String frequency;
    private String duration;

}
