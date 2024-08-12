package com.ayurhit.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ayurhit.dto.BillDTO;
import com.ayurhit.service.BillService;

@RestController
@RequestMapping("/bill")
public class BillController {

	@Autowired
	private BillService billService;

	@GetMapping
	public ResponseEntity<List<BillDTO>> getAllBills(@RequestParam Long id) {
		List<BillDTO> bills = billService.getPatientBills(id);
		return ResponseEntity.ok(bills);
	}

}
