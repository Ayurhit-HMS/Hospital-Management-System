package com.ayurhit.entity;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Lob;
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
public class Department extends BaseEntity {

	
	@Column(length=50,nullable=false)
	private String departmentName;

	@Lob
	@Column(columnDefinition = "TEXT")
	private String about;

	private String deptImage;

	@OneToMany(mappedBy = "department",cascade = CascadeType.ALL,orphanRemoval = true)
	private Set<FrontDesk> frontDesks;

	@OneToMany(mappedBy = "department",cascade = CascadeType.ALL,orphanRemoval = true)
	private Set<Doctor> doctors;

	@OneToMany(mappedBy = "department",cascade = CascadeType.ALL,orphanRemoval = true)
	private Set<Schedule> schedules;
	
	public void addDoctor(Doctor doctor) {
		doctors.add(doctor);
		doctor.setDepartment(this);
	}
	
	public void removeDoctor(Doctor doctor) {
		doctors.remove(doctor);
		doctor.setDepartment(null);
	}
	
	
}
