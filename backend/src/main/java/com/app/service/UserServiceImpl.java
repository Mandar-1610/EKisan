package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.IUserRepository;
import com.app.dto.UserDTO;
import com.app.dto.UserRegResponse;
//import com.app.pojos.Customer;
import com.app.pojos.User;

@Service
@Transactional
public class UserServiceImpl implements IUserService{

	@Autowired
	IUserRepository userRepo;
	
	@Override
	public UserRegResponse resgisterUser(UserDTO user) {
//		userRepo.save(user);
		return null;
	}

	//to add new user to db
	@Override
	public User addUser(User u) {
		System.out.println("inside service impl");
		return userRepo.save(u);
	}
	

	@Override
	public List<User> getAllUsers() {
		return (List<User>) userRepo.findAll();
	}

	//for login
	@Override
	public User loginUser(String email, String password) {
		return userRepo.findByEmailAndPassword(email, password).orElseThrow(()->new RuntimeException("invalid credentials"));
	}

	//for checking email
	@Override
	public User checkingUserEmail(String email) {
		return userRepo.findByEmail(email).orElseThrow(()->new RuntimeException("User with email " + email+"is already present"));
	}
	
	
	
	
	
//
//	@Override
//	public int updatePassword(String email) {
//		String password;
//		int min=200;
//		int max=500;                                                    //(length, letters, numbers)-->letters : true , numbers: false
//		password=(int)(Math.random()*(max-min+1)+min)+RandomStringUtils.random(3,true,false);
//		
//		userRepo.updateCustomerPassword(password, email);
//		return 1;
//	}
//	
	

}
