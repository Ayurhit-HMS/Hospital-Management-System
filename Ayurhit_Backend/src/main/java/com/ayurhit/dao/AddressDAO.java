package com.ayurhit.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ayurhit.entity.Address;

public interface AddressDAO extends JpaRepository<Address, Long>{

}
