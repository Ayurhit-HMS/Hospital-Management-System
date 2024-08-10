package com.ayurhit.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ayurhit.entity.CurrentMedication;

public interface CurrentMedicationDAO extends JpaRepository<CurrentMedication, Long> {

}
