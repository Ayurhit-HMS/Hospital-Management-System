package com.ayurhit.service;

import java.util.List;

import com.ayurhit.dto.LanguagesDTO;
import com.ayurhit.entity.Language;

public interface LanguageService {
	
	Language addLanguage(Language lang);
	
	List<LanguagesDTO> getAllLanguages();

}
