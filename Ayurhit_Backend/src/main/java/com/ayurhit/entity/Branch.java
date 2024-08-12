package com.ayurhit.entity;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Lob;
import javax.persistence.OneToOne;
import javax.validation.constraints.Email;

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
public class Branch extends BaseEntity {

	@Column(unique=true,nullable=false)
	private int code;
	
	@Column(length=30, nullable=false)
	private String name;
	
	@Column(length=50)
	private String head;
	
	@Column(length=15, unique=true, nullable=false)
	private String phone;
	
	@Column(length=50)
	private String latitude;
	
	@Column(length=50)
	private String longitude;
	
	@Email
	@Column(unique=true, nullable=false)
	private String email;
	
	private LocalDate establishedDate;
	
	@Column(length=50, unique=true, nullable=false)
	private String licenseNumber;
	
	@Lob
	@Column(columnDefinition = "TEXT")
	private String description;

	
	@OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
	private Address address;
}
