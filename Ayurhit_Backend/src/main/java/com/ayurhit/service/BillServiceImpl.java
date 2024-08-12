package com.ayurhit.service;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ayurhit.dao.BillDAO;
import com.ayurhit.dto.BillDTO;
import com.ayurhit.entity.Bill;

@Service
@Transactional
public class BillServiceImpl implements BillService {

	@Autowired
	private BillDAO billDAO;

	@Autowired
	private ModelMapper modelMapper;

	@Override
	public List<BillDTO> getPatientBills(Long id) {
		Type targetListType = new TypeToken<List<BillDTO>>() {
		}.getType();
		List<Bill> bills = billDAO.getPatientBills(id);
		ArrayList<BillDTO> billList = modelMapper.map(bills, targetListType);
		return billList;
	}

}
