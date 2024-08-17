package com.ayurhit.entity;

import java.time.LocalDate;
import java.time.LocalTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

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
public class Schedule extends BaseEntity {

	@Column(nullable = false)
	private LocalDate scheduleDate;

	@Column(name = "schedule_time")
	private LocalTime scheduleTime;
	
	private boolean isSelected;

	@Column(nullable=false)
	private boolean isSelected;

	@ManyToOne
	@JoinColumn(name = "doctor_id", nullable = false)
	private Doctor doctor;

	@ManyToOne
	@JoinColumn(name = "department_id", nullable = false)
	private Department department;

	@ManyToOne
	@JoinColumn(name = "admin_id")
	private Admin admin;
}
