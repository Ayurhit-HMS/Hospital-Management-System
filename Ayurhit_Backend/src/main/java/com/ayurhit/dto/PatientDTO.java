package com.ayurhit.dto;

import java.util.HashSet;
import java.util.Set;

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
public class PatientDTO extends UserDTO {
	private String bloodGroup;
	private String emergencyContactName;
	private String emergencyContactNumber;
	private String insuranceNumber;
	private String ABHA_Id;
	private Set<Long> allergies = new HashSet<>();
	private Set<Long> chronicConditions = new HashSet<>();
	private Set<CurrentMedicationDTO> currentMedications = new HashSet<>();
	private Set<PastSurgeryDTO> PastSurgeries = new HashSet<>();
	private Long insuranceProviderId;
}
