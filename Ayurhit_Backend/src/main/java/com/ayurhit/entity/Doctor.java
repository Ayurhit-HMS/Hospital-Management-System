package com.ayurhit.entity;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.PrimaryKeyJoinColumn;

import com.ayurhit.type.LicensingAuthority;
import com.fasterxml.jackson.annotation.JsonManagedReference;

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
public class Doctor extends Employee {
	
	
	@Column(length=50)
	private String specelization;

	@Column(length=50,nullable=false,unique=true)
	private String licenseNumber;
	
	@Column(nullable=false)
	private LocalDate licenseExpiryDate;

	private int experience;

	@Column(nullable=false,precision=10,scale=2)
	private double consultationFees;

	@Column(length=7,nullable=false)
	private String availabilitySchedule;

	@Column(nullable=false)
	@Enumerated(EnumType.STRING)
	private LicensingAuthority licensingAuthority;

	@Lob
	@Column(columnDefinition = "TEXT")
	private String description;

	@JoinColumn(name="department_id",nullable = false)
	@ManyToOne
	private Department department;

	@OneToMany(mappedBy = "doctor",cascade = CascadeType.ALL,orphanRemoval = true)
	private Set<Prescription> prescriptions;

	@OneToMany(mappedBy = "doctor",cascade = CascadeType.ALL,orphanRemoval = true)
	private Set<Schedule> schedules;

	@OneToMany(mappedBy = "doctor",cascade = CascadeType.ALL,orphanRemoval = true)
	@JsonManagedReference
	private Set<Appointment> appointments;

	@OneToMany(mappedBy = "doctor",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<RatingAndReview> reviewAndRating = new ArrayList<>();

	@OneToMany(mappedBy = "doctor",cascade = CascadeType.ALL,orphanRemoval = true)
	private Set<Bill> bills = new HashSet<>();
}
