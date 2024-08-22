package com.ayurhit.service;

import java.lang.reflect.Type;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ayurhit.dao.BillDAO;
import com.ayurhit.dao.DoctorDAO;
import com.ayurhit.dao.PatientDAO;
import com.ayurhit.dto.BillDTO;
import com.ayurhit.dto.BillDetailsDTO;
import com.ayurhit.entity.Bill;
import com.ayurhit.entity.Doctor;
import com.ayurhit.entity.Patient;

@Service
@Transactional
public class BillServiceImpl implements BillService {

	@Autowired
	private BillDAO billDAO;

	@Autowired
	private ModelMapper modelMapper;

	@Autowired
	private PatientDAO patientDAO;

	@Autowired
	private DoctorDAO doctorDAO;

	@Override
	public List<BillDTO> getPatientBills(Long id) {
		Type targetListType = new TypeToken<List<BillDTO>>() {
		}.getType();
		List<Bill> bills = billDAO.getPatientBills(id);
		ArrayList<BillDTO> billList = modelMapper.map(bills, targetListType);
		return billList;
	}

	@Override
	public Boolean generateBill(BillDetailsDTO billDetailsDTO) {
		Patient persistedPatient = patientDAO.findById(billDetailsDTO.getPatientId()).orElseThrow(null);
		Doctor persistedDoctor = doctorDAO.findById(billDetailsDTO.getDoctorId()).orElseThrow(null);
		Bill bill = new Bill();
		bill.setPatient(persistedPatient);
		bill.setDoctor(persistedDoctor);
		bill.setBillingDate(LocalDate.now().toString());
		Bill persitedBill = billDAO.save(bill);
		if (persitedBill == null)
			return false;
		return true;
	}

}
