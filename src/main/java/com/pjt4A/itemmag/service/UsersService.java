package com.pjt4A.itemmag.service;

import java.util.List;


import com.pjt4A.itemmag.entity.Users;
import com.pjt4A.itemmag.repository.UsersRepository;
import org.springframework.stereotype.Service;

@Service
public class UsersService {
	
	private UsersRepository usersRepository;

    public UsersService(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }

    public List<Users> getUsers() {
        return usersRepository.findAll();
    }
    
    public Users saveUser(Users users) {
    	return usersRepository.save(users);
    }

}
