package com.ayurhit.service;

import java.util.List;

import com.ayurhit.dto.BillDTO;

public interface BillService {

	List<BillDTO> getPatientBills(Long id);

}
