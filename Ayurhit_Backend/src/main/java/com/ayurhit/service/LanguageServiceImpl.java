package com.ayurhit.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ayurhit.dao.LanguageDAO;
import com.ayurhit.entity.Language;

@Service
@Transactional
public class LanguageServiceImpl implements LanguageService{
	
	@Autowired
	private LanguageDAO languageDAO;
	
	


	@Override
	public Language addLanguage(Language lang) {
		
		Language persistentEntity = languageDAO.save(lang);
		
		return persistentEntity;
	}

}
