package com.ayurhit.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ayurhit.entity.Language;

public interface LanguageDAO  extends JpaRepository<Language, Long> {

}
