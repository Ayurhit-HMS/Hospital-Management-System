package com.ayurhit.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
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
public class InsuranceProvider extends BaseEntity {

	@Column(nullable=false)
	private String name;
	@Column(nullable=false,unique=true)
	private String code;
	
	@Column(nullable=false,length=50)
	private String contactPerson;
	
	@Column(nullable=false,length=50)
	private String contactNumber;
	
	@Email
	private String email;
	
	
	private String coverageDetails;
}
