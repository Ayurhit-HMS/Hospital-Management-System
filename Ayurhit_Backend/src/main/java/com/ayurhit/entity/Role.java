package com.ayurhit.entity;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
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
public class Role extends BaseEntity {

	@Column(unique = true, nullable = false, length = 50)
	private String roleName;

	@OneToMany(mappedBy = "role")
	private Set<User> users = new HashSet<>();
}
