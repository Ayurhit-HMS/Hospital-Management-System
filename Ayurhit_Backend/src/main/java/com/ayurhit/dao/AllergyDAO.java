package com.ayurhit.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ayurhit.entity.Allergy;

public interface AllergyDAO extends JpaRepository<Allergy, Long> {
	
}
