package com.ayurhit.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class PastSurgeryDTO {
	private String surgeryName;
	private LocalDate surgeryDate;
	private String surgeryDescription;
}
