package com.ayurhit.service;

import java.lang.reflect.Type;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ayurhit.dao.LanguageDAO;
import com.ayurhit.dto.BranchDTO;
import com.ayurhit.dto.LanguagesDTO;
import com.ayurhit.entity.Language;


@Service
@Transactional
public class LanguageServiceImpl implements LanguageService{
	
	@Autowired
	private LanguageDAO languageDAO;
	
	@Autowired
	private ModelMapper modelMapper;
	
	
	@Override
	public Language addLanguage(Language lang) {		
		Language persistentEntity = languageDAO.save(lang);		
		return persistentEntity;
	}
	

	@Override
	public List<LanguagesDTO> getAllLanguages() {
		List<Language> languages = languageDAO.findAll();
		Type targetListType = new TypeToken <List<LanguagesDTO>>() {}.getType();	
		return modelMapper.map(languages, targetListType);
	}

}
