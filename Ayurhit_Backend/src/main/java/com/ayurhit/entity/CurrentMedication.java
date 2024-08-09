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
public class CurrentMedication extends BaseEntity {

	@Column(length=20, nullable = false)
	private String dosage;
	
	@Column(length=20, nullable = false)
	private String duration;

	@ManyToOne
	@JoinColumn(nullable=false)
	private Medicine medicine;

	@ManyToOne
	@JoinColumn(nullable=false)
	private Patient patient;

}