package com.ayurhit.entity;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.validation.constraints.Email;

import com.ayurhit.type.Gender;

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
@Inheritance(strategy = InheritanceType.JOINED)
public class User extends BaseEntity {

	@Column(nullable = false, length = 50)
	private String firstName;

	@Column(nullable = false, length = 50)
	private String lastName;

	@Column(nullable = false)
	private String password;

	@Email
	@Column(nullable = false, unique = true, length = 100)
	private String email;

	@Enumerated(EnumType.STRING)
	private Gender gender;

	@Column(length = 15)
	private String phone;

	private LocalDate birthDate;

	private String profilePhoto;

	@Column(nullable = false)
	private boolean isDeleted;

	@OneToOne(cascade = CascadeType.ALL)
	private Address address;

	@ManyToOne
	@JoinColumn(name = "role_id")
	private Role role;

}
