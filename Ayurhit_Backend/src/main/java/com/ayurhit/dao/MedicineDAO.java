package com.ayurhit.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ayurhit.entity.Medicine;

public interface MedicineDAO extends JpaRepository<Medicine, Long> {

}
