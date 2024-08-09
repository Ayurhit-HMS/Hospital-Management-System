package com.ayurhit.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ayurhit.dto.DepartmentDTO;
import com.ayurhit.service.DepartmentService;

@RestController
@RequestMapping("/departments")
public class DepartmentController {

	@Autowired
	private DepartmentService departmentService;

	@GetMapping
	public ResponseEntity<List<DepartmentDTO>> getAllDepartments() {
		List<DepartmentDTO> deptList = departmentService.getAllDepartments();
		return ResponseEntity.ok(deptList);
	}
}
