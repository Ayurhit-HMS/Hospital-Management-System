package com.ayurhit.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ayurhit.entity.InsuranceProvider;

public interface InsuranceProviderDAO extends JpaRepository<InsuranceProvider,Long> {

}
