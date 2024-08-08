package com.ayurhit.entity;

import javax.persistence.Column;
import javax.persistence.Entity;

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
public class Address extends BaseEntity {

	@Column(length = 50, nullable = false)
	private String addressLine1;

	@Column(length = 50)
	private String addressLine2;

	@Column(length=30, nullable = false)
	private String city;

	@Column(length=30, nullable = false)
	private String state;

	@Column(length=10, nullable = false)
	private String pinCode;

	@Column(length=30)
	private String country;
}
