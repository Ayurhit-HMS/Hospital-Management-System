package com.ayurhit.service;

import java.util.Optional;

import com.ayurhit.dto.LoginDTO;
import com.ayurhit.dto.ValidUserDTO;

public interface UserService {

	Optional<ValidUserDTO> loginUser(LoginDTO loginDTO);

}
