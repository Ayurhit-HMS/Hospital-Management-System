package com.ayurhit.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ayurhit.entity.Medicine;

public interface MedicineDAO extends JpaRepository<Medicine, Long> {
	
	List<Medicine> findAll();
	 Optional<Medicine> findByName(String name);

}
