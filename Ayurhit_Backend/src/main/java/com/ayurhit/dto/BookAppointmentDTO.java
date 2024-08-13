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
public class BookAppointmentDTO {
	private String appointmentDate;
	private String appointmentTime;
	private Long doctorId;
	private Long patientId;
}
