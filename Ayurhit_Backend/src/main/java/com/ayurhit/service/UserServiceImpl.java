package com.ayurhit.service;

import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ayurhit.dao.UserDAO;
import com.ayurhit.dto.LoginDTO;
import com.ayurhit.dto.ValidUserDTO;
import com.ayurhit.entity.User;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDAO userDAO;

	@Autowired
	private ModelMapper modelMapper;

	@Override
	public Optional<ValidUserDTO> loginUser(LoginDTO loginDTO) {
		User user = userDAO.findByEmailAndPassword(loginDTO.getEmail(), loginDTO.getPassword());
		ValidUserDTO userDto = modelMapper.map(user, ValidUserDTO.class);
		return Optional.ofNullable(userDto);
	}

}
