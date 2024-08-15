package com.ayurhit.dto;

import java.time.LocalDate;
import java.time.LocalTime;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ScheduleDTO {
	
	private Long id;
	
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate scheduleDate;

	@DateTimeFormat(pattern ="HH:mm:ss")
	private LocalTime scheduleTime;
	
	private boolean isSelected;

	private Long doctorId;

	private Long departmentId;

	private Long adminId;
	
}
