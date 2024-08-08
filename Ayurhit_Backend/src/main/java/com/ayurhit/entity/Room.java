package com.ayurhit.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import com.ayurhit.type.RoomType;

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
public class Room extends BaseEntity {

	@Enumerated(EnumType.STRING)
	@Column(nullable = false)
	private RoomType roomType;

	@Column(nullable = false)
	private int availableBeds;

	@Column(nullable = false)
	private int floor;

	@Column(nullable = false)
	private double charges;

	@Column(length = 15)
	private String telephone;

	private int capacity;
}
