package com.ayurhit.service;

import java.lang.reflect.Type;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ayurhit.dao.AdminDAO;
import com.ayurhit.dao.DepartmentDAO;
import com.ayurhit.dao.DoctorDAO;
import com.ayurhit.dao.ScheduleDAO;
import com.ayurhit.dto.DepartmentDTO;
import com.ayurhit.dto.ScheduleDTO;
import com.ayurhit.dto.ScheduleResponseDTO;
import com.ayurhit.entity.Admin;
import com.ayurhit.entity.Department;
import com.ayurhit.entity.Doctor;
import com.ayurhit.entity.Schedule;

@Service
@Transactional
public class ScheduleServiceImpl implements ScheduleService{

	@Autowired
	private ScheduleDAO scheduleDao;
	
	@Autowired
	private DoctorDAO doctorDao;
	
	@Autowired
	private DepartmentDAO departmentDao;
		
	@Autowired
	private AdminDAO adminDao;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Override
	public ScheduleResponseDTO addSchedule(ScheduleDTO dto) {
		Doctor doctor = doctorDao.findById(dto.getDoctorId()).orElseThrow();
		Department department = departmentDao.findById(dto.getDepartmentId()).orElseThrow();
		Admin admin = adminDao.findById(dto.getAdminId()).orElseThrow();
		
		Schedule scheduleEntity = modelMapper.map(dto, Schedule.class);
		scheduleEntity.setAdmin(admin);
		scheduleEntity.setDepartment(department);
		scheduleEntity.setDoctor(doctor);
		
		Schedule persistentSchedule = scheduleDao.save(scheduleEntity);
		return modelMapper.map(persistentSchedule, ScheduleResponseDTO.class);
	}

	@Override
	public String updateScheduleStatus(Long scheduleId) {
		
		Schedule schedule = scheduleDao.findById(scheduleId).orElseThrow();
		schedule.setSelected(true);
		return "changed status to selected";
	}

	@Override
	public List<ScheduleResponseDTO> getAllSchedules() {
		List<Schedule> schedules = scheduleDao.findAll();
		Type targetListType = new TypeToken <List<ScheduleResponseDTO>>() {}.getType();
		return modelMapper.map(schedules, targetListType);
	}
	
	public String deleteSchedule(Long id) {
		Schedule schedule = scheduleDao.findById(id).orElseThrow();
		scheduleDao.delete(schedule);
		return "schedule deleted successfully...";
	}

}
