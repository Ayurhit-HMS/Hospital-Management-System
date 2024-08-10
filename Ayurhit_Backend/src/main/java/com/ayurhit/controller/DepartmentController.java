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

	@PostMapping
	public ResponseEntity<?> addNewDepartment(@RequestBody DepartmentDTO dto){
		return ResponseEntity.status(HttpStatus.CREATED).body(departmentService.addDepartment(dto));
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<?> updateDepartmentDetails(@PathVariable Long id, @RequestBody DepartmentDTO dto){
		return ResponseEntity.ok(departmentService.updateDepartment(id, dto));
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteDepartmentDetails(@PathVariable Long id){
		return ResponseEntity.ok(departmentService.deleteDepartment(id));
	}

	public ResponseEntity<List<DepartmentDTO>> getAllDepartments() {
		List<DepartmentDTO> deptList = departmentService.getAllDepartments();
		return ResponseEntity.ok(deptList);
	}

	@GetMapping("/{id}")
	public ResponseEntity<?> getDepartmentDetails(@PathVariable Long id){
		return ResponseEntity.ok(departmentService.getDepartmentDetails(id));
	}

}
