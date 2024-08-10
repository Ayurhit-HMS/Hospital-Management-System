package com.ayurhit.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ayurhit.entity.Branch;

public interface BranchDAO extends JpaRepository<Branch, Long> {

}
