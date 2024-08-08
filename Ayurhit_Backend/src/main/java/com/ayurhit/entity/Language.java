package com.ayurhit.entity;

import javax.persistence.Column;
import javax.persistence.Entity;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@EqualsAndHashCode(of = "name", callSuper = false)
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Language extends BaseEntity {
	@Column(nullable=false,unique=true)
	private String name;

	@Column(nullable=false,unique=true)
	private String code;
	
	public void addLanguage(Language language) {
		
	}
}
