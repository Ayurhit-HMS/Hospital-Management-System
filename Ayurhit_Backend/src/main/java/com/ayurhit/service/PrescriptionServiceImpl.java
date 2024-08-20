package com.ayurhit.service;

import java.lang.reflect.Type;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ayurhit.dao.AppointmentDetailsDao;
import com.ayurhit.dao.DoctorDAO;
import com.ayurhit.dao.MedicineDAO;
import com.ayurhit.dao.PatientDAO;
import com.ayurhit.dao.PrescriptionDAO;
import com.ayurhit.dao.PrescriptionMedicineDAO;
import com.ayurhit.dto.DoctorPrescriptionDTO;
import com.ayurhit.dto.DoctorPrescriptionMedicineDTO;
import com.ayurhit.dto.PrescriptionDTO;
import com.ayurhit.entity.Appointment;
import com.ayurhit.entity.Doctor;
import com.ayurhit.entity.Medicine;
import com.ayurhit.entity.Patient;
import com.ayurhit.entity.Prescription;
import com.ayurhit.entity.PrescriptionMedicine;

@Service
@Transactional
public class PrescriptionServiceImpl implements PrescriptionService {

	@Autowired
	private PrescriptionDAO prescriptionDAO;

	@Autowired
	private ModelMapper modelmapper;

	@Override
	public List<PrescriptionDTO> getPatientPrescriptions(Long id) {
		Type targetListType = new TypeToken<List<PrescriptionDTO>>() {
		}.getType();

		List<Prescription> list = prescriptionDAO.findByPatientId(id);

		List<PrescriptionDTO> prescriptions = modelmapper.map(list, targetListType);
		return prescriptions;
	}

	@Override
	public List<PrescriptionDTO> getDoctorPrescriptions(Long id) {
		Type targetListType = new TypeToken<List<PrescriptionDTO>>() {
		}.getType();

		List<Prescription> list = prescriptionDAO.findDoctorPrescriptions(id);

		List<PrescriptionDTO> prescriptions = modelmapper.map(list, targetListType);
		return prescriptions;
	}
	
    @Autowired
    private PatientDAO patientDAO;

    @Autowired
    private DoctorDAO doctorDAO;

    @Autowired
    private AppointmentDetailsDao appointmentDetailsDao;
    
    @Autowired
    private PrescriptionMedicineDAO prescriptionMedicineDAO;
    
    @Autowired
    private MedicineDAO medicineDAO;
    
    public String createPrescription(DoctorPrescriptionDTO prescriptionRequest) {
        Prescription prescription = new Prescription();
        
        prescription.setPrescriptionDate(LocalDateTime.now());
        
        
        Patient patient = patientDAO.findById(prescriptionRequest.getPatientId())
                .orElseThrow(() -> new IllegalArgumentException("Patient not found"));
        prescription.setPatient(patient);

      
        Doctor doctor = doctorDAO.findById(prescriptionRequest.getDoctorId())
                .orElseThrow(() -> new IllegalArgumentException("Doctor not found"));
        prescription.setDoctor(doctor);
        
        

     
        Appointment appointment = appointmentDetailsDao.findById(prescriptionRequest.getAppointmentId())
                .orElseThrow(() -> new IllegalArgumentException("Appointment not found"));
        prescription.setAppointment(appointment);
        
        
        prescriptionDAO.save(prescription);

        List<PrescriptionMedicine> prescriptionMedicines = new ArrayList();
        
        for (DoctorPrescriptionMedicineDTO medDto : prescriptionRequest.getMedicinesDTO()) {
            PrescriptionMedicine prescriptionMedicine = new PrescriptionMedicine();
            prescriptionMedicine.setDosage(medDto.getDosage());
            prescriptionMedicine.setFrequency(medDto.getFrequency());
            prescriptionMedicine.setDuration(medDto.getDuration());
            Medicine medicine = medicineDAO.findByName(medDto.getMedicineName())
                                .orElseThrow(() -> new RuntimeException("Medicine not found"));
            prescriptionMedicine.setMedicine(medicine);
          
            prescriptionMedicine.setPrescription(prescription);
            prescriptionMedicines.add(prescriptionMedicine);
        }
        
      	prescriptionMedicineDAO.saveAll(prescriptionMedicines)  ;

        return "prescription added successfully!!";
    }

}
