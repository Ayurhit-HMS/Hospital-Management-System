package com.ayurhit.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ayurhit.entity.Role;

public interface RoleDAO extends JpaRepository<Role, Long> {
	
	Role findByRoleName(String roleName);	
}
