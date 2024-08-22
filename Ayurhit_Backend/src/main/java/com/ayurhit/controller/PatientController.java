package com.ayurhit.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ayurhit.dto.AddPatientDTO;
import com.ayurhit.dto.AddressDetialsDTO;
import com.ayurhit.dto.AllergyDTO;
import com.ayurhit.dto.BasicDetailsDTO;
import com.ayurhit.dto.ChronicConditionDTO;
import com.ayurhit.dto.CurrentMedicationDetailsDTO;
import com.ayurhit.dto.InsuranceDetailsDTO;
import com.ayurhit.dto.PatientDTO;
import com.ayurhit.security.JwtUtils;
import com.ayurhit.service.PatientService;
import com.ayurhit.util.MailService;

@RestController
@RequestMapping("/patients")
public class PatientController {

	@Autowired
	private PatientService patientService;

	@Autowired
	JwtUtils jwtUtils;

	@PostMapping
	public ResponseEntity<Void> addPatient(@RequestBody AddPatientDTO patientDTO) {
		patientService.addPatient(patientDTO);
		String firstName = patientDTO.getFirstName();
		String lastName = patientDTO.getLastName();
		String email = patientDTO.getEmail();
		MailService.sendEmail(email, firstName, lastName);
		return ResponseEntity.ok().build();
	}

	@GetMapping
	public ResponseEntity<PatientDTO> getPatientDetails(@RequestHeader("Authorization") String authHeader) {
		PatientDTO patient = patientService.getPatientDetails(jwtUtils.getId(authHeader));
		return ResponseEntity.ok(patient);
	}

	@PatchMapping("/update/basic")
	public ResponseEntity<PatientDTO> updateBasicDetails(@RequestBody BasicDetailsDTO basicDetailsDTO,
			@RequestHeader("Authorization") String authHeader) {

		PatientDTO updatedPatient = patientService.updatePatient(jwtUtils.getId(authHeader), basicDetailsDTO);
		return ResponseEntity.ok(updatedPatient);
	}

	@PatchMapping("/update/address")
	public ResponseEntity<PatientDTO> updateAddressDetails(@RequestBody AddressDetialsDTO addressDetialsDTO,
			@RequestHeader("Authorization") String authHeader) {
		PatientDTO updatedPatient = patientService.updatePatient(jwtUtils.getId(authHeader), addressDetialsDTO);
		return ResponseEntity.ok(updatedPatient);
	}

	@PatchMapping("/update/insurance")
	public ResponseEntity<PatientDTO> updateAddressDetails(@RequestBody InsuranceDetailsDTO insuranceDetailsDTO,
			@RequestHeader("Authorization") String authHeader) {

		PatientDTO updatedPatient = patientService.updatePatient(jwtUtils.getId(authHeader), insuranceDetailsDTO);
		return ResponseEntity.ok(updatedPatient);
	}

	@PostMapping("/chronicCondition")
	public ResponseEntity<PatientDTO> addChronicCondition(@RequestBody ChronicConditionDTO chronicConditionDTO,
			@RequestHeader("Authorization") String authHeader) {

		PatientDTO updatedPatient = patientService.addChronicCondition(jwtUtils.getId(authHeader), chronicConditionDTO);
		return ResponseEntity.ok(updatedPatient);
	}

	@PostMapping("/allergy")
	public ResponseEntity<PatientDTO> addChronicCondition(@RequestBody AllergyDTO allergyDTO,
			@RequestHeader("Authorization") String authHeader) {

		PatientDTO updatedPatient = patientService.addAllergy(jwtUtils.getId(authHeader), allergyDTO);
		return ResponseEntity.ok(updatedPatient);
	}

	@PostMapping("/currentMedication")
	public ResponseEntity<PatientDTO> addCurrentMedication(
			@RequestBody CurrentMedicationDetailsDTO currentMedicationDetailsDTO,
			@RequestHeader("Authorization") String authHeader) {
		System.out.println(currentMedicationDetailsDTO);
		PatientDTO updatedPatient = patientService.addCurrentMedication(jwtUtils.getId(authHeader),
				currentMedicationDetailsDTO);
		return ResponseEntity.ok(updatedPatient);
	}

}
