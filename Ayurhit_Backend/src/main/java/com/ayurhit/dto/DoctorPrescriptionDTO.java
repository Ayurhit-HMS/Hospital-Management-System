package com.ayurhit.dto;

import java.time.LocalDateTime;
import java.util.List;
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
public class DoctorPrescriptionDTO {
	private Long patientId;
    private Long doctorId;
    private Long appointmentId;
    private List<DoctorPrescriptionMedicineDTO> medicinesDTO;

}