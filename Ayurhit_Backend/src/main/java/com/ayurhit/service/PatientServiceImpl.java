package com.ayurhit.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ayurhit.dao.AddressDAO;
import com.ayurhit.dao.AllergyDAO;
import com.ayurhit.dao.ChronicConditionDAO;
import com.ayurhit.dao.CurrentMedicationDAO;
import com.ayurhit.dao.InsuranceProviderDAO;
import com.ayurhit.dao.MedicineDAO;
import com.ayurhit.dao.PatientDAO;
import com.ayurhit.dao.RoleDAO;
import com.ayurhit.dto.AddPatientDTO;
import com.ayurhit.dto.AddressDetialsDTO;
import com.ayurhit.dto.AllergyDTO;
import com.ayurhit.dto.BasicDetailsDTO;
import com.ayurhit.dto.ChronicConditionDTO;
import com.ayurhit.dto.CurrentMedicationDetailsDTO;
import com.ayurhit.dto.InsuranceDetailsDTO;
import com.ayurhit.dto.PatientDTO;
import com.ayurhit.entity.Address;
import com.ayurhit.entity.Allergy;
import com.ayurhit.entity.ChronicCondition;
import com.ayurhit.entity.CurrentMedication;
import com.ayurhit.entity.InsuranceProvider;
import com.ayurhit.entity.Medicine;
import com.ayurhit.entity.Patient;
import com.ayurhit.entity.Role;
import com.ayurhit.type.BloodGroup;

@Service
@Transactional
public class PatientServiceImpl implements PatientService {

	@Autowired
	private PatientDAO patientDAO;

	@Autowired
	private RoleDAO roleDAO;

	@Autowired
	private ModelMapper modelMapper;

	@Autowired
	private AddressDAO addressDAO;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private InsuranceProviderDAO insuranceProviderDAO;

	@Autowired
	private ChronicConditionDAO chronicConditionDAO;

	@Autowired
	private AllergyDAO allergyDAO;

	@Autowired
	private MedicineDAO medicineDAO;

	@Autowired
	private CurrentMedicationDAO currentMedicationDAO;

	@Override
	public void addPatient(AddPatientDTO addPatientDTO) {
		Patient patient = modelMapper.map(addPatientDTO, Patient.class);
		patient.setBloodGroup(BloodGroup.fromCode(addPatientDTO.getBloodGroup()));
		Role role = roleDAO.findById(6L).orElseThrow(() -> new RuntimeException("Role not found"));
		patient.setRole(role);
		System.out.println(addPatientDTO.getPhone());
		patient.setDeleted(false);
		patient.setPassword(passwordEncoder.encode(addPatientDTO.getPassword()));
		patientDAO.save(patient);
	}

	@Override
	public PatientDTO getPatientDetails(Long id) {
		Patient patient = patientDAO.findById(id).orElseThrow(null);
		return modelMapper.map(patient, PatientDTO.class);
	}

	@Override
	public PatientDTO updatePatient(Long id, BasicDetailsDTO basicDetailsDTO) {
		Patient persistedPatient = patientDAO.findById(id).orElseThrow(null);
		modelMapper.map(basicDetailsDTO, persistedPatient);
		Patient updatedPatient = patientDAO.save(persistedPatient);
		return modelMapper.map(updatedPatient, PatientDTO.class);
	}

	@Override
	public PatientDTO updatePatient(Long id, AddressDetialsDTO addressDetialsDTO) {
		Patient persistedPatient = patientDAO.findById(id).orElseThrow(null);
		Address updatedAddress = modelMapper.map(addressDetialsDTO.getAddress(), Address.class);
		if (persistedPatient.getAddress() == null) {
			persistedPatient.setAddress(updatedAddress);
			addressDAO.save(updatedAddress);
		} else {
			modelMapper.map(updatedAddress, persistedPatient.getAddress());
		}
		modelMapper.map(addressDetialsDTO, persistedPatient);
		Patient updatedPatient = patientDAO.save(persistedPatient);
		return modelMapper.map(updatedPatient, PatientDTO.class);
	}

	@Override
	public PatientDTO updatePatient(Long id, InsuranceDetailsDTO insuranceDetailsDTO) {
		Patient persistedPatient = patientDAO.findById(id).orElseThrow(null);
		InsuranceProvider updatedInsuranceProvider = modelMapper.map(insuranceDetailsDTO.getInsuranceProvider(),
				InsuranceProvider.class);
		if (persistedPatient.getInsuranceProvider() == null) {
			persistedPatient.setInsuranceProvider(updatedInsuranceProvider);
			insuranceProviderDAO.save(updatedInsuranceProvider);
		} else {
			modelMapper.map(updatedInsuranceProvider, persistedPatient.getInsuranceProvider());
		}
		modelMapper.map(insuranceDetailsDTO, persistedPatient);
		Patient updatedPatient = patientDAO.save(persistedPatient);
		return modelMapper.map(updatedPatient, PatientDTO.class);
	}

	@Override
	public PatientDTO addChronicCondition(Long id, ChronicConditionDTO chronicConditionDTO) {
		Patient persistedPatient = patientDAO.findById(id).orElseThrow(null);
		ChronicCondition persistedChronicCondition = chronicConditionDAO.findById(chronicConditionDTO.getId())
				.orElseThrow(null);
		persistedPatient.getChronicConditions().add(persistedChronicCondition);
		Patient updatedPatient = patientDAO.save(persistedPatient);
		return modelMapper.map(updatedPatient, PatientDTO.class);
	}

	@Override
	public PatientDTO addAllergy(Long id, AllergyDTO allergyDTO) {
		Patient persistedPatient = patientDAO.findById(id).orElseThrow(null);
		Allergy persistedAllergy = allergyDAO.findById(allergyDTO.getId()).orElseThrow(null);
		persistedPatient.getAllergies().add(persistedAllergy);
		Patient updatedPatient = patientDAO.save(persistedPatient);
		return modelMapper.map(updatedPatient, PatientDTO.class);
	}

	@Override
	public PatientDTO addCurrentMedication(Long id, CurrentMedicationDetailsDTO currentMedicationDetailsDTO) {
		Patient persistedPatient = patientDAO.findById(id).orElseThrow(null);
		Medicine persistedMedicine = medicineDAO.findById(currentMedicationDetailsDTO.getMedicineId())
				.orElseThrow(null);
		CurrentMedication currentMedication = modelMapper.map(currentMedicationDetailsDTO, CurrentMedication.class);
		currentMedication.setMedicine(persistedMedicine);
		currentMedication.setPatient(persistedPatient);
		currentMedicationDAO.save(currentMedication);
		Patient updatedPatient = patientDAO.findById(id).orElseThrow(null);
		return modelMapper.map(updatedPatient, PatientDTO.class);
	}

}
