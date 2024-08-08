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
public class EducationalResourceImage extends BaseEntity {
	
	@Column(nullable=false)
	private String image;
	@Column(nullable=false)
	private String name;

	@ManyToOne
	@Column(nullable=false)
	@JoinColumn(name="educational_resource_id")
	private EducationalResource educationalResource;
	
}
