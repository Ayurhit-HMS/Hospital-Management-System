package com.ayurhit.entity;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;

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
public class Medicine extends BaseEntity {

	@Column(nullable = false, length = 100)
	private String name;

	@Column(nullable = false, length = 100)
	private String company;

	private String imagePath;

	@OneToMany(mappedBy = "medicine")
	private Set<CurrentMedication> currentMedications = new HashSet<>();

	@OneToMany(mappedBy = "medicine")
	private Set<PrescriptionMedicine> prescriptionMedicines;
}
