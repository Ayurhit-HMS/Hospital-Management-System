package com.ayurhit.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;

import com.ayurhit.dao.DepartmentDAO;
import com.ayurhit.dto.DepartmentDTO;
import com.ayurhit.entity.Department;

public class DepartmentServiceTest {

	@Mock
	private DepartmentDAO departmentDAO;

	@Mock
	private ModelMapper modelMapper;

	@InjectMocks
	private DepartmentServiceImpl departmentService;

	@BeforeEach
	public void setUp() {
		MockitoAnnotations.openMocks(this);
	}

	@Test
	public void testGetAllDepartments() {
		Department department = new Department();
		department.setId(1L);
		department.setDepartmentName("Cardiology");

		List<Department> departments = new ArrayList<>();

		DepartmentDTO departmentDTO = new DepartmentDTO();
		departmentDTO.setId(1L);
		departmentDTO.setDepartmentName("Cardiology");

		List<DepartmentDTO> departmentDTOs = new ArrayList<>();
		departmentDTOs.add(departmentDTO);

		when(departmentDAO.findAll()).thenReturn(departments);
		when(modelMapper.map(departments, new TypeToken<List<DepartmentDTO>>() {
		}.getType())).thenReturn(departmentDTOs);

		List<DepartmentDTO> result = departmentService.getAllDepartments();

		assertNotNull(result);
		assertEquals(1, result.size());
		assertEquals("Cardiology", result.get(0).getDepartmentName());

	}
}
