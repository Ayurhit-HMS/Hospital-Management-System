package com.ayurhit.controller;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import com.ayurhit.dto.DoctorDTO;
import com.ayurhit.service.DoctorService;

@WebMvcTest(DoctorController.class)
public class DoctorControllerTest {

	@Autowired
	private MockMvc mockMvc;

	@MockBean
	private DoctorService doctorService;

	@Test
	public void testFindDoctorsByDepartment() throws Exception {
		DoctorDTO doctor = new DoctorDTO();
		doctor.setId(1L);
		doctor.setFirstName("Rohit");

		List<DoctorDTO> doctors = new ArrayList<DoctorDTO>();
		doctors.add(doctor);

		when(doctorService.getDoctorsByDepartment("Cardiology")).thenReturn(doctors);

		mockMvc.perform(get("/doctor/deptDoctors/Cardiology")).andExpect(status().isOk())
				.andExpect(jsonPath("$[0].firstName").value("Rohit"));
	}
}
