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

	@Column(nullable = false, precision = 10, scale = 2)
	private Double amount;
	
	private Double gstAmount;
	
	@Column(nullable = false, precision = 10, scale = 2)
	private Double totalAmount;
	
	@Column(nullable = false, precision = 10, scale = 2)
	private String billingDate;
	
	
	private LocalDate dueDate;
	
	@Column(length=20, nullable =false)
	private String status;
	
	@Column(length=20)
	private String paymentMethod;
	
	@Column(length=50, nullable=false, unique=true)
	private String transactionId;
	
	@Column(nullable = false, precision = 10, scale = 2)
	private Double consultationFee;
	
	@Column(nullable = false, precision = 10, scale = 2)
	private Double procedureFees;
	
	@Column(nullable = false, precision = 10, scale = 2)
	private Double medicationFees;
	
	@Column(nullable = false, precision = 10, scale = 2)
	private Double otherCharges;
	
	@Column(nullable = false, precision = 10, scale = 2)
	private Double discount;

	@ManyToOne
	@JoinColumn(name = "patient_id", nullable =false)
	private Patient patient;

	@OneToOne
	private Admission admission;

	@ManyToOne
	@Column(nullable =false)
	private Doctor doctor;

	@ManyToOne
	@JoinColumn(name = "admin_id")
	private Admin admin;
}
