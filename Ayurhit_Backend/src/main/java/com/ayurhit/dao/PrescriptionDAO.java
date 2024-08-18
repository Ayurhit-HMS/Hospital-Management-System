package com.ayurhit.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ayurhit.entity.Prescription;

public interface PrescriptionDAO extends JpaRepository<Prescription, Long> {

	List<Prescription> findByPatientId(Long patientId);

	@Query("SELECT p FROM Prescription p WHERE p.doctor.id = :id")
	List<Prescription> findDoctorPrescriptions(@Param("id") Long id);

}
