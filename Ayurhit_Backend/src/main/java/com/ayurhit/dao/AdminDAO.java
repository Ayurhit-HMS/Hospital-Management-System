package com.ayurhit.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ayurhit.entity.Admin;

public interface AdminDAO extends JpaRepository<Admin, Long>{
	
	
}
