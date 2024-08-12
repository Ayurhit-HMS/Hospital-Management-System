package com.ayurhit.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ayurhit.entity.Appointment;

@Repository
public interface AppointmetDAO extends JpaRepository<Appointment, Long> {

	List<Appointment> findAppointmentsByPatientId(Long patientId);

}
