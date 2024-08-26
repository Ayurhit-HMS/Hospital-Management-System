//package com.ayurhit.dao;
//
//import static org.junit.jupiter.api.Assertions.assertEquals;
//import static org.junit.jupiter.api.Assertions.assertNotNull;
//
//import java.util.List;
//import java.util.Optional;
//
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//
//import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
//import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
//import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
//
//import com.ayurhit.entity.Department;
//
//@DataJpaTest
//@AutoConfigureTestDatabase(replace = Replace.NONE)
//public class DepartmentDAOTest {
//
//	@Autowired
//	private DepartmentDAO departmentDAO;
//
//	@Test
//	public void testFindById() {
//		Optional<Department> persistedDepartment = departmentDAO.findById(1L);
//
//		assertEquals("Cardiology", persistedDepartment.get().getDepartmentName());
//	}
//
//	@Test
//	public void testFindAllDepartments() {
//		List<Department> departments = departmentDAO.findAll();
//		assertNotNull(departments);
//		assertEquals(8, departments.size());
//		assertEquals("Cardiology", departments.get(0).getDepartmentName());
//		assertEquals("Neurology", departments.get(1).getDepartmentName());
//	}
//}
