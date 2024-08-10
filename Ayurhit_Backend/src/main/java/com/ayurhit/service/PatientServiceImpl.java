package com.ayurhit.service;

import java.util.HashSet;
import java.util.Set;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ayurhit.dao.AddressDAO;
import com.ayurhit.dao.AllergyDAO;
import com.ayurhit.dao.ChronicConditionDAO;
import com.ayurhit.dao.CurrentMedicationDAO;
import com.ayurhit.dao.InsuranceProviderDAO;
import com.ayurhit.dao.PastSurgeryDAO;
import com.ayurhit.dao.PatientDAO;
import com.ayurhit.dao.RoleDAO;
import com.ayurhit.dto.PatientDTO;
import com.ayurhit.entity.Address;
import com.ayurhit.entity.Allergy;
import com.ayurhit.entity.ChronicCondition;
import com.ayurhit.entity.CurrentMedication;
import com.ayurhit.entity.InsuranceProvider;
import com.ayurhit.entity.PastSurgery;
import com.ayurhit.entity.Patient;
import com.ayurhit.entity.Role;
import com.ayurhit.type.BloodGroup;

@Service
@Transactional
public class PatientServiceImpl implements PatientService {

	@Autowired
	private PatientDAO patientDAO;

	@Autowired
	private AllergyDAO allergyDAO;

	@Autowired
	private ChronicConditionDAO chronicConditionDAO;

	@Autowired
	private InsuranceProviderDAO insuranceProviderDAO;

	@Autowired
	private AddressDAO addressDAO;

	@Autowired
	private RoleDAO roleDAO;

	@Autowired
	private CurrentMedicationDAO currentMedicationDAO;

	@Autowired
	private PastSurgeryDAO pastSurgeryDAO;

	@Autowired
	private ModelMapper modelMapper;

	@Override
	public void addPatient(PatientDTO patientDTO) {

		Patient patient = modelMapper.map(patientDTO, Patient.class);

		Address address = modelMapper.map(patientDTO.getAddressDTO(), Address.class);

		Address persistedAddress = addressDAO.save(address);

		patient.setAddress(persistedAddress);

		patient.setBloodGroup(BloodGroup.fromCode(patientDTO.getBloodGroup()));

		Set<Allergy> allergies = new HashSet<>();
		for (Long id : patientDTO.getAllergies()) {
			allergies.add(allergyDAO.findById(id).orElseThrow());
		}
		allergyDAO.saveAll(allergies);
		patient.setAllergies(allergies);

		Set<ChronicCondition> chronicConditions = new HashSet<>();
		for (Long id : patientDTO.getChronicConditions()) {
			chronicConditions.add(chronicConditionDAO.findById(id).orElseThrow());
		}
		chronicConditionDAO.saveAll(chronicConditions);
		patient.setChronicConditions(chronicConditions);

		TypeToken<Set<CurrentMedication>> typeCurrentMedication = new TypeToken<Set<CurrentMedication>>() {
		};
		Set<CurrentMedication> currentMedications = modelMapper.map(patientDTO.getCurrentMedications(),
				typeCurrentMedication.getType());
		currentMedicationDAO.saveAll(currentMedications);
		patient.setCurrentMedications(currentMedications);

		TypeToken<Set<PastSurgery>> typePastSurgeries = new TypeToken<Set<PastSurgery>>() {
		};
		Set<PastSurgery> pastSurgeries = modelMapper.map(patientDTO.getPastSurgeries(), typePastSurgeries.getType());
		pastSurgeryDAO.saveAll(pastSurgeries);
		patient.setPastSurgeries(pastSurgeries);

		InsuranceProvider insuranceProvider = insuranceProviderDAO.findById(patientDTO.getInsuranceProviderId())
				.orElseThrow();

		patient.setInsuranceProvider(insuranceProvider);

		Role role = roleDAO.findById(1L).orElseThrow(() -> new RuntimeException("Role not found"));
		patient.setRole(role);

		patientDAO.save(patient);
	}
}
