package com.ayurhit.dao;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.HashSet;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import com.ayurhit.entity.InsuranceProvider;
import com.ayurhit.entity.Patient;
import com.ayurhit.type.BloodGroup;

@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
public class PatientDAOTest {

	@Autowired
	private PatientDAO patientDAO;

	private Patient patient;

	@BeforeEach
	public void setUp() {
		patient = new Patient();
		patient.setFirstName("Rohit");
		patient.setLastName("Bagal");
		patient.setEmail("rohit@gmail.com");
		patient.setPassword("password@123");
		patient.setBloodGroup(BloodGroup.O_POSITIVE);
		patient.setEmergencyContactName("Narayan");
		patient.setEmergencyContactNumber("123456789");
		patient.setInsuranceNumber("INS12345");
		patient.setAbhaId("ABHA123456");
		patient.setAllergies(new HashSet<>());
		patient.setChronicConditions(new HashSet<>());
		patient.setCurrentMedications(new HashSet<>());
		patient.setPastSurgeries(new HashSet<>());
		patient.setInsuranceProvider(new InsuranceProvider());
	}

	@Test
	public void testSavePatient() {
		Patient savedPatient = patientDAO.save(patient);

		assertNotNull(savedPatient.getId());
		assertEquals("Rohit", savedPatient.getFirstName());
		assertEquals("Bagal", savedPatient.getLastName());
		assertEquals("rohit@gmail.com", savedPatient.getEmail());
		assertEquals(BloodGroup.O_POSITIVE, savedPatient.getBloodGroup());
		assertEquals("Narayan", savedPatient.getEmergencyContactName());
		assertEquals("123456789", savedPatient.getEmergencyContactNumber());
		assertEquals("INS12345", savedPatient.getInsuranceNumber());
		assertEquals("ABHA123456", savedPatient.getAbhaId());
	}

}
