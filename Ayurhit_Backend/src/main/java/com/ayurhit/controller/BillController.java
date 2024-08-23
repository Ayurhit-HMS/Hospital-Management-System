package com.ayurhit.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ayurhit.dto.BillDTO;
import com.ayurhit.dto.BillDetailsDTO;
import com.ayurhit.security.JwtUtils;
import com.ayurhit.service.BillService;

@RestController
@RequestMapping("/bill")
public class BillController {

	@Autowired
	private BillService billService;

	@Autowired
	private JwtUtils jwtUtils;

	@GetMapping("/getBills")
	public ResponseEntity<List<BillDTO>> getAllBills(@RequestHeader("Authorization") String authHeader) {
		List<BillDTO> bills = billService.getPatientBills(jwtUtils.getId(authHeader));
		return ResponseEntity.ok(bills);
	}

	@PostMapping("/generate")
	public ResponseEntity<Boolean> generateBill(@RequestBody BillDetailsDTO billDetailsDTO) {
		System.out.println(billDetailsDTO);
		Boolean isBillGenerated = billService.generateBill(billDetailsDTO);
		return ResponseEntity.ok(isBillGenerated);
	}

}
