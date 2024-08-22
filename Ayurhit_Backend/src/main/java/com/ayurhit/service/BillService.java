package com.ayurhit.service;

import java.util.List;

import com.ayurhit.dto.BillDTO;
import com.ayurhit.dto.BillDetailsDTO;

public interface BillService {

	List<BillDTO> getPatientBills(Long id);

	Boolean generateBill(BillDetailsDTO billDetailsDTO);

}
