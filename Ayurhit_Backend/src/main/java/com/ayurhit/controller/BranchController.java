package com.ayurhit.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ayurhit.dto.BranchDTO;
import com.ayurhit.service.BranchService;

@RestController
@RequestMapping("/branches")
public class BranchController {

	@Autowired
	private BranchService branchService;
	
	@PostMapping
	public ResponseEntity<?> addNewBranch(@RequestBody BranchDTO dto) {
		return ResponseEntity.status(HttpStatus.CREATED).body(branchService.addBranch(dto));
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<?> updateBranchDetails(@PathVariable Long id, @RequestBody BranchDTO dto){
		return ResponseEntity.ok(branchService.updateBranchDetails(id, dto));
	}
	
	@GetMapping
	public ResponseEntity<?> getAllBranches(){
		return ResponseEntity.ok(branchService.getAllBranchDetails());
	}
		
}
