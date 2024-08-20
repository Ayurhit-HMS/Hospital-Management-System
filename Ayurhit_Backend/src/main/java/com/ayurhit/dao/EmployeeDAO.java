package com.ayurhit.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ayurhit.entity.Employee;

public interface EmployeeDAO extends JpaRepository<Employee, Long>{

}
