package com.ayurhit.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ayurhit.dao.UserDAO;
import com.ayurhit.entity.User;

@Service
@Transactional
public class CustomUserDetailsService implements UserDetailsService {
	
	@Autowired
	private UserDAO userDAO;

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		// invoke dao's method
		User user = userDAO.findByEmail(email).orElseThrow();
		//=> user email exists - user : persistent
		/*
		 * In case of email found -- this method has to ret UserDetails object filled with details lifted from DB
		 */
		return new CustomUserDetails(user);
	}

}
