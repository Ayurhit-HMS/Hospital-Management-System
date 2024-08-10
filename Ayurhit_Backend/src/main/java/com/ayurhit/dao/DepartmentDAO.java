package com.ayurhit.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ayurhit.entity.Department;

public interface DepartmentDAO extends JpaRepository<Department, Long> {

}
