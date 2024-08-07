package com.ayurhit.entity;

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
public class PrescriptionMedicine extends BaseEntity {

	@Column(nullable = false, length = 50)
	private String dosage;

	@Column(nullable = false, length = 10)
	private String frequency;

	@Column(nullable = false, length = 50)
	private String duration;

	@ManyToOne
	@JoinColumn(name = "prescription_id", nullable = false)
	private Prescription prescription;

	@ManyToOne
	@JoinColumn(name = "medicine_id", nullable = false)
	private Medicine medicine;

}
