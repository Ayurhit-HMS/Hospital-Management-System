package com.ayurhit.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ayurhit.entity.Appointment;
import com.ayurhit.entity.Doctor;
import com.ayurhit.type.AppointmentStatus;

public interface AppointmentDetailsDao extends JpaRepository<Appointment, Long> {

	List<Appointment> findByDoctor(Doctor doctor);
	
	 List<Appointment> findByDoctorAndStatus(Doctor doctor, AppointmentStatus status);
}
