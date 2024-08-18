package com.ayurhit.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ayurhit.entity.PrescriptionMedicine;

public interface PrescriptionMedicineDAO extends JpaRepository<PrescriptionMedicine, Long> {

}
