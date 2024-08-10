package com.ayurhit.entity;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

import com.ayurhit.type.EmployeeStatus;
import com.ayurhit.type.EmploymentType;
import com.ayurhit.type.WorkShift;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "employee")
@Getter
@Setter
@ToString
@PrimaryKeyJoinColumn(name = "id")

public class Employee extends User {

	@Column(nullable = false)
	private double salary;
	@Column(nullable = false)
	private LocalDate joinedDate;
	
	@Column(length=50)
	private String qualification;
	@Column(nullable = false)
	@Enumerated(EnumType.STRING)
	private EmploymentType employmentType;
	
	
	private WorkShift workShift;
	
	@Column(nullable = false)
	@Enumerated(EnumType.STRING)
	private EmployeeStatus employeeStatus;

	@ManyToMany
	@JoinTable(name = "employee_languages", joinColumns = @JoinColumn(name = "employee_id"), inverseJoinColumns = @JoinColumn(name = "language_id"))
	private Set<Language> languages = new HashSet<>();

	@OneToOne(fetch = FetchType.LAZY)
	private Branch branch;
	
	
}
