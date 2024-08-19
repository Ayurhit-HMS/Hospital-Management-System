package com.ayurhit.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ayurhit.entity.Language;
import com.ayurhit.service.LanguageService;

@RestController
@RequestMapping("/languages")
public class LanguageController {
	
	@Autowired
	private LanguageService languageService;
	
	@PostMapping
	public ResponseEntity<?> addLanguage(Language lang){
		return ResponseEntity.status(HttpStatus.CREATED).body(languageService.addLanguage(lang));
	}

	@GetMapping
	public ResponseEntity<?> getAllLanguages(){
		return ResponseEntity.ok(languageService.getAllLanguages());
	}
}
