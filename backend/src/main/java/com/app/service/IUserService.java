package com.app.service;

import java.util.List;

import com.app.dto.UserDTO;
import com.app.dto.UserRegResponse;
//import com.app.pojos.Customer;
import com.app.pojos.User;

public interface IUserService {

	//Add new user to db
//	Customer addCustomer(Customer c);
	User addUser(User u);
	
	//to get list of all users including buyer and seller
	List<User> getAllUsers();

	//for login	
	User loginUser(String email, String password);
	
	//for checking email is already present
	User checkingUserEmail(String email);
//	
//	int updatePassword(String email);

	UserRegResponse resgisterUser(UserDTO user);
}
