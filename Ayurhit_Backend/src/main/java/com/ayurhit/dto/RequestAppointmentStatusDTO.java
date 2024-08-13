package com.ayurhit.dto;

import com.ayurhit.type.AppointmentStatus;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RequestAppointmentStatusDTO {
	private Long id;
	private AppointmentStatus status;
	private String appointmentTime;
	private String appointmentDate;
	private String firstName;
	private String lastName;

}
