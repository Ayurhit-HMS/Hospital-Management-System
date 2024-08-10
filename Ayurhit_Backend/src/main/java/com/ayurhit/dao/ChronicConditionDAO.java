package com.ayurhit.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ayurhit.entity.ChronicCondition;

public interface ChronicConditionDAO extends JpaRepository<ChronicCondition, Long> {

}
