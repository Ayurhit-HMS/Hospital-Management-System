package com.ayurhit.controller;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Arrays;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import com.ayurhit.dto.DepartmentDTO;
import com.ayurhit.service.DepartmentService;

@WebMvcTest(DepartmentController.class)
public class DepartmentControllerTest {

	@Autowired
	private MockMvc mockMvc;

	@MockBean
	private DepartmentService departmentService;

	@Test
	public void testGetAllDepartments() throws Exception {

		List<DepartmentDTO> departments = Arrays.asList(new DepartmentDTO(1L, "Cardiology", "about", "path1"),
				new DepartmentDTO(2L, "Dermatology", "about", "path2"),
				new DepartmentDTO(3L, "Neurology", "about", "path3"),
				new DepartmentDTO(4L, "Oncology", "about", "path4"));

		//when(departmentService.getAllDepartments()).thenReturn(departments);

		mockMvc.perform(get("/departments")).andExpect(status().isOk())
				.andExpect(jsonPath("$[0].departmentName").value("Cardiology"))
				.andExpect(jsonPath("$[1].departmentName").value("Dermatology"))
				.andExpect(jsonPath("$[2].departmentName").value("Neurology"))
				.andExpect(jsonPath("$[3].departmentName").value("Oncology"));

	}

}
