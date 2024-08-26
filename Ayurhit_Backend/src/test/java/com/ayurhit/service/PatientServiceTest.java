//package com.ayurhit.service;
//
//import static org.mockito.Mockito.times;
//import static org.mockito.Mockito.verify;
//import static org.mockito.Mockito.when;
//
//import java.time.LocalDate;
//import java.util.Optional;
//
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.mockito.MockitoAnnotations;
//import org.modelmapper.ModelMapper;
//import org.springframework.security.crypto.password.PasswordEncoder;
//
//import com.ayurhit.dao.PatientDAO;
//import com.ayurhit.dao.RoleDAO;
//import com.ayurhit.dto.AddPatientDTO;
//import com.ayurhit.entity.Patient;
//import com.ayurhit.entity.Role;
//import com.ayurhit.type.BloodGroup;
//
//public class PatientServiceTest {
//
//	@Mock
//	private PatientDAO patientDAO;
//
//	@Mock
//	private RoleDAO roleDAO;
//
//	@Mock
//	private ModelMapper modelMapper;
//
//	@Mock
//	private PasswordEncoder passwordEncoder;
//
//	@InjectMocks
//	private PatientServiceImpl patientService;
//
//	@BeforeEach
//	public void setUp() {
//		MockitoAnnotations.openMocks(this);
//	}
//
//	@Test
//	public void testAddPatient() {
//		AddPatientDTO addPatientDTO = new AddPatientDTO();
//		addPatientDTO.setFirstName("Rohit");
//		addPatientDTO.setLastName("Bagal");
//		addPatientDTO.setEmail("rohit@gmail.com");
//		addPatientDTO.setBirthDate(LocalDate.of(1999, 1, 1));
//		addPatientDTO.setPhone("1234567890");
//		addPatientDTO.setBloodGroup("B+");
//		addPatientDTO.setPassword("password123");
//
//		Patient patient = new Patient();
//		Role role = new Role();
//		role.setId(1L);
//
//		when(modelMapper.map(addPatientDTO, Patient.class)).thenReturn(patient);
//		when(roleDAO.findById(1L)).thenReturn(Optional.of(role));
//		when(passwordEncoder.encode(addPatientDTO.getPassword())).thenReturn("encodedPassword");
//
//		patientService.addPatient(addPatientDTO);
//
//		verify(patientDAO, times(1)).save(patient);
//		verify(roleDAO, times(1)).findById(1L);
//
//		assert patient.getBloodGroup().equals(BloodGroup.fromCode(addPatientDTO.getBloodGroup()));
//		assert patient.getRole().equals(role);
//		assert patient.getPassword().equals("encodedPassword");
//		assert !patient.isDeleted();
//	}
//
//}
