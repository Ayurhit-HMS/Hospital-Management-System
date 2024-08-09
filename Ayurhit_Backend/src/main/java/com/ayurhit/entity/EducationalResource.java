package com.ayurhit.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
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
public class EducationalResource extends BaseEntity {

	@Column(nullable=false)
	private String resourceName;

	@Lob
	@Column(columnDefinition = "TEXT")
	private String resourceDescription;

	@ManyToOne
	@JoinColumn(name="doctor_id",nullable=false)
	private Doctor doctor;

	@OneToMany(mappedBy = "educationalResource", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<EducationalResourceImage> ERImages = new ArrayList<>();

	public void addImage(EducationalResourceImage image) {
		
		ERImages.add(image);
		image.setEducationalResource(this);
	}
}
