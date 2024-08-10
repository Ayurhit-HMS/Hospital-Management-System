package com.ayurhit.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ayurhit.entity.Patient;

@Repository
public interface PatientDAO extends JpaRepository<Patient, Long> {
	
}
