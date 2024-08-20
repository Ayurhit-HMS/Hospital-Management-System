package com.ayurhit.entity;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
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
public class Prescription extends BaseEntity {
	
	@Column(nullable = false)
	private LocalDateTime prescriptionDate;

	@ManyToOne
	@JoinColumn(name = "patient_id", nullable = false)
	private Patient patient;

	@ManyToOne
	@JoinColumn(name = "doctor_id", nullable = false)
	private Doctor doctor;

	@OneToMany(mappedBy = "prescription", cascade = CascadeType.ALL, orphanRemoval = true)
	private Set<PrescriptionMedicine> prescriptionMedicines = new HashSet<>();
	
	@OneToOne
	private Appointment appointment;
	
	 public void addPrescriptionMedicine(PrescriptionMedicine prescriptionMedicine) {
	        prescriptionMedicines.add(prescriptionMedicine);
	        prescriptionMedicine.setPrescription(this);
	    }
}
