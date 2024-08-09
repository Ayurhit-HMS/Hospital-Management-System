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
public class Allergy extends BaseEntity {
	
	@Column(nullable = false, length=30, unique = true)
	private String name;
	
	private String description;
}
