package com.ayurhit.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.ayurhit.type.AppointmentStatus;

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
@Entity
public class Appointment extends BaseEntity {

	@Column(nullable = false)
	@Enumerated(EnumType.STRING)
	private AppointmentStatus status;

	@Column(nullable = false)
	private String appointmentDate;

	@Column(nullable = false)
	private String appointmentTime;

	@ManyToOne
	@JoinColumn(name = "doctor_id", nullable=false)
	private Doctor doctor;

	@ManyToOne
	@JoinColumn(name = "patient_id", nullable=false)
	private Patient patient;
}
