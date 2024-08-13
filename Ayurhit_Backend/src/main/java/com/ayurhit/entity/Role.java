package com.ayurhit.entity;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
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

	@OneToMany(mappedBy = "role", fetch = FetchType.EAGER)
	private Set<User> users = new HashSet<>();
	
	public void addUser(User user) {
		users.add(user);
		user.setRole(this);
	}
	
	public void removeUser(User user) {
		users.remove(user);
		user.setRole(null);
	}
}
