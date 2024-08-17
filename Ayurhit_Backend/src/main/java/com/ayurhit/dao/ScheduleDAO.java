package com.ayurhit.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ayurhit.entity.Schedule;

public interface ScheduleDAO extends JpaRepository<Schedule, Long> {

	List<Schedule> findByDoctorId(Long id);

}
