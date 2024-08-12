package com.ayurhit.dto;


import com.ayurhit.entity.BaseEntity;

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
public class AppointmentDTO extends BaseEntity{
    private String appointmentDate;
    private String appointmentTime;
    private DoctorDTO doctor;
    private PatientDTO patient;
}


