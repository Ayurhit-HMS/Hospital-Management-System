package com.ayurhit.entity;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PrimaryKeyJoinColumn;

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
@PrimaryKeyJoinColumn(name = "id")
public class FrontDesk extends Employee {

	
	@ManyToOne
	@JoinColumn(name="manager_id")
	private FrontDesk manager;

	
	@ManyToOne
	@JoinColumn(name = "department_id",nullable=false)
	private Department department;

}
