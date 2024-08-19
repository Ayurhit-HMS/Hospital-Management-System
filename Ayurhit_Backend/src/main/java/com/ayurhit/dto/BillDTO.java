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
public class BillDTO {
	private Long id;
	private Double amount;
	private Double gstAmount;
	private Double totalAmount;
	private String billingDate;
	private String dueDate;
	private String status;
	private String paymentMethod;
	private String transactionId;
	private Double procedureFees;
	private Double medicationFees;
	private Double otherCharges;
	private Double discount;
	private PatientDTO patient;
	private PrescriptionDoctorDTO doctor;
	private DepartmentDTO department;
	private AdminDTO admin;
}
