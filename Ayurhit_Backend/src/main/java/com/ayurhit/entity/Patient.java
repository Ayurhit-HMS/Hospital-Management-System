package com.ayurhit.entity;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.PrimaryKeyJoinColumn;

import com.ayurhit.type.BloodGroup;

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
@PrimaryKeyJoinColumn(name = "id")
public class Patient extends User {

	@Enumerated(EnumType.STRING)
	private BloodGroup bloodGroup;

	@Column(length = 50)
	private String emergencyContactName;

	@Column(length = 15)
	private String emergencyContactNumber;

	@Column(length = 50)
	private String insuranceNumber;

	@Column(length = 50)
	private String abhaId;

	@ManyToMany
	private Set<Allergy> allergies = new HashSet<>();

	@ManyToMany
	private Set<ChronicCondition> chronicConditions = new HashSet<>();

	@OneToMany(mappedBy = "patient", cascade = CascadeType.ALL, orphanRemoval = true)
	private Set<CurrentMedication> currentMedications = new HashSet<>();

	@OneToMany(mappedBy = "patient", cascade = CascadeType.ALL, orphanRemoval = true)
	private Set<PastSurgery> pastSurgeries = new HashSet<>();

	@ManyToOne
	private InsuranceProvider insuranceProvider;

	@OneToMany(mappedBy = "patient")
	private Set<Bill> bills;

	@OneToMany(mappedBy = "patient")
	private Set<Appointment> appointments;

	@OneToMany(mappedBy = "patient")
	private Set<Prescription> prescriptions;

	@OneToMany(mappedBy = "patient")
	private Set<RatingAndReview> reviews;
}
