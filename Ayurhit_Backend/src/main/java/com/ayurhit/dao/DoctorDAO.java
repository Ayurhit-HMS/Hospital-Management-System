package com.ayurhit.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.ayurhit.entity.Doctor;

@Repository
public interface DoctorDAO extends JpaRepository<Doctor, Long> {

	@Query("SELECT d FROM Doctor d WHERE d.department.departmentName = :departmentName")
	//@Query("SELECT * FROM doctor,department where department_name=? and doctor.department_id=department.id")
	List<Doctor> findDoctorsByDepartmentName(@Param("departmentName") String departmentName);

}
