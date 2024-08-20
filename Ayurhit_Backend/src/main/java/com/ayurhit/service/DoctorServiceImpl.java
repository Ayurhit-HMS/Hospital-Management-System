package com.ayurhit.service;

import java.lang.reflect.Type;
import java.util.HashSet;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ayurhit.dao.AddressDAO;
import com.ayurhit.dao.BranchDAO;
import com.ayurhit.dao.DepartmentDAO;
import com.ayurhit.dao.DoctorDAO;
import com.ayurhit.dao.LanguageDAO;
import com.ayurhit.dao.RoleDAO;
import com.ayurhit.dao.ScheduleDAO;
import com.ayurhit.dto.DoctorDTO;
import com.ayurhit.dto.DoctorRequestDTO;
import com.ayurhit.dto.DoctorResponseDTO;
import com.ayurhit.dto.ScheduleDTO;
import com.ayurhit.dto.UpdateDoctorDTO;
import com.ayurhit.entity.Address;
import com.ayurhit.entity.Branch;
import com.ayurhit.entity.Department;
import com.ayurhit.entity.Doctor;
import com.ayurhit.entity.Language;
import com.ayurhit.entity.Role;
import com.ayurhit.entity.Schedule;
import com.ayurhit.type.EmployeeStatus;

@Service
@Transactional
public class DoctorServiceImpl implements DoctorService {

	@Autowired
	private AddressDAO addressDAO;

	@Autowired
	private ModelMapper modelMapper;

	@Autowired
	private LanguageDAO languageDAO;

	@Autowired
	private DoctorDAO doctorDAO;

	@Autowired
	private RoleDAO roleDAO;

	@Autowired
	private BranchDAO branchDAO;

	@Autowired
	private DepartmentDAO departmentDAO;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private ScheduleDAO scheduleDAO;

	public Address getAddress(DoctorRequestDTO dto) {
		Address address = new Address();
		address.setAddressLine1(dto.getAddressDTO().getAddressLine1());
		address.setAddressLine2(dto.getAddressDTO().getAddressLine2());
		address.setCity(dto.getAddressDTO().getCity());
		address.setCountry(dto.getAddressDTO().getCountry());
		address.setPinCode(dto.getAddressDTO().getPinCode());
		address.setState(dto.getAddressDTO().getState());

		return address;
	}

	@Override
	public DoctorResponseDTO addDoctor(DoctorRequestDTO dto) {

		HashSet<Long> doctorLanguageIds = new HashSet<Long>();
		for (Long langId : dto.getLanguageIds()) {
			doctorLanguageIds.add(langId);
		}

		HashSet<Language> doctorLanguages = new HashSet<Language>();
		for (Long id : doctorLanguageIds) {
			Language doctorLanguage = languageDAO.findById(id).orElseThrow(null);
			doctorLanguages.add(doctorLanguage);
		}

		String password = dto.getPassword();
		String encodedPassword = passwordEncoder.encode(password);

		Branch branch = branchDAO.findById(dto.getBranchId()).orElseThrow();
		Address address = getAddress(dto);
		Address persistentAddress = addressDAO.save(address);
		Role role = roleDAO.findByRoleName("ROLE_DOCTOR");
		Department department = departmentDAO.findById(dto.getDepartmentId()).orElseThrow(null);
		Doctor doctorEntity = modelMapper.map(dto, Doctor.class);
		doctorEntity.setEmployeeStatus(EmployeeStatus.ACTIVE);
		doctorEntity.setPassword(encodedPassword);
		doctorEntity.setDepartment(department);
		doctorEntity.setBranch(branch);
		doctorEntity.setAddress(persistentAddress);
		doctorEntity.setRole(role);
		doctorEntity.setDeleted(false);
		doctorEntity.setLanguages(doctorLanguages);
		Doctor persistentDoctor = doctorDAO.save(doctorEntity);
		return modelMapper.map(persistentDoctor, DoctorResponseDTO.class);
	}

	@Override
	public DoctorResponseDTO getDoctorDetails(Long id) {

		Doctor persistentDoctor = doctorDAO.findById(id).orElseThrow();
		return modelMapper.map(persistentDoctor, DoctorResponseDTO.class);
	}

	@Override
	public DoctorResponseDTO updateDoctorDetails(Long doctorId, UpdateDoctorDTO dto) {
		if (doctorDAO.existsById(doctorId)) {
			Doctor doctorEntity = doctorDAO.findById(doctorId).orElseThrow();
			modelMapper.map(dto, doctorEntity);
			return modelMapper.map(doctorEntity, DoctorResponseDTO.class);
		} else
			return null;
	}

	@Override
	public String deleteDoctorDetails(Long id) {
		if (doctorDAO.existsById(id)) {
			doctorDAO.deleteById(id);
			return "deleted doctor details...";
		}
		return "deletion of doctor details failed ...";
	}

	@Override
	public List<DoctorDTO> getDoctorsByDepartment(String departmentName) {
		List<Doctor> doctors = doctorDAO.findDoctorsByDepartmentName(departmentName);
		Type targetListType = new TypeToken<List<DoctorDTO>>() {
		}.getType();
		return modelMapper.map(doctors, targetListType);
	}

	@Override
	public List<ScheduleDTO> getAllSchedules(Long id) {
		List<Schedule> schedules = scheduleDAO.findByDoctorId(id);
		Type targetListType = new TypeToken<List<ScheduleDTO>>() {
		}.getType();
		return modelMapper.map(schedules, targetListType);
	}
}
