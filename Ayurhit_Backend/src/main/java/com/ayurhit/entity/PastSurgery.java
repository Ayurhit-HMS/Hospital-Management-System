package com.ayurhit.entity;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Lob;
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
public class PastSurgery extends BaseEntity {

	@Column(nullable=false,length=100)
	private String surgeryName;

	@Column(nullable=false)
	private LocalDate surgeryDate;

	@Lob
	@Column(columnDefinition = "TEXT")
	private String surgeryDescription;

	@ManyToOne
	@JoinColumn(nullable=false)
	private Patient patient;

}
