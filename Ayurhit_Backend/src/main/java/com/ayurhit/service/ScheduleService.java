package com.ayurhit.service;

import java.util.List;

import com.ayurhit.dto.ScheduleDTO;
import com.ayurhit.dto.ScheduleResponseDTO;
import com.ayurhit.entity.Schedule;

public interface ScheduleService {

	ScheduleResponseDTO addSchedule(ScheduleDTO dto);
	
	String updateScheduleStatus(Long scheduleId);
	
	List<ScheduleResponseDTO> getAllSchedules();
	
	String deleteSchedule(Long id);
}
