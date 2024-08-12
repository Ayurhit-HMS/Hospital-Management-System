package com.ayurhit.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.ayurhit.entity.Bill;

@Repository
public interface BillDAO extends JpaRepository<Bill, Long> {

	@Query("SELECT b FROM Bill b WHERE b.patient.id = :id")
	List<Bill> getPatientBills(@Param("id") Long id);

}
