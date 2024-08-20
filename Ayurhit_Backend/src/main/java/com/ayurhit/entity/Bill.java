package com.ayurhit.entity;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

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
public class Bill extends BaseEntity {

	@Column(nullable = false, columnDefinition = "integer default 0")
	private Double gstAmount;

	@Column(nullable = false, columnDefinition = "DATE DEFAULT CURRENT_DATE")
	private String billingDate;

	private LocalDate dueDate;

	@Column(length = 20, nullable = false)
	private String status;

	@Column(nullable = false,length = 20)
	private String paymentMethod;

	@Column(length = 50, unique = true)
	private String transactionId;

	@Column(nullable = false, precision = 10, scale = 2,columnDefinition = "integer default 0")
	private Double procedureFees;

	@Column(nullable = false, precision = 10, scale = 2,columnDefinition = "integer default 0")
	private Double medicationFees;

	@Column(nullable = false, precision = 10, scale = 2,columnDefinition = "integer default 0")
	private Double otherCharges;

	@Column(nullable = false, precision = 10, scale = 2,columnDefinition = "integer default 0")
	private Double discount;

	@ManyToOne
	@JoinColumn(name = "patient_id", nullable = false)
	private Patient patient;

	@OneToOne
	private Admission admission;

	@ManyToOne
	@JoinColumn(nullable = false)
	private Doctor doctor;

	@ManyToOne
	@JoinColumn(name = "admin_id")
	private Admin admin;
}
