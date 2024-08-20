package com.ayurhit.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ayurhit.dto.RoleDTO;
import com.ayurhit.service.RoleService;

@RestController
@RequestMapping("/roles")
public class RoleController {

	@Autowired
	private RoleService roleService;
	
	@PostMapping("/add")
	public ResponseEntity<?> addNewRole(@RequestBody RoleDTO dto){
		return ResponseEntity.status(HttpStatus.CREATED).body(roleService.addRole(dto));
	}
	
	@GetMapping
	public ResponseEntity<?> getAllRoles(){
		return ResponseEntity.ok(roleService.getAllRoles());
	}
	
	
}
