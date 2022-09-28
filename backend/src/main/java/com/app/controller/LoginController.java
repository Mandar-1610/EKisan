package com.app.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.User;
import com.app.service.IUserService;

@RestController
//@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("ekisan/user")
public class LoginController {

	@Autowired
	IUserService userService;
	
	@GetMapping
	public Iterable<User> displayAllUsers(){
		return userService.getAllUsers();
	} 
	
	@PostMapping("/register")
	public String addCustomer(@RequestBody @Valid User u) {
		userService.addUser(u);
		return "Successfully added";
	}
	
//	@PostMapping("/login")
//	public User loginValidateCustomer(@RequestBody @Valid UserLogin u, BindingResult result ) {	
//		User newUser =  userService.loginUser(u.getEmail(),u.getPassword());
//		if(newUser.getRole()==Role.BUYER) {
//			return null; //buyer la return karaycha
//		}
//		else {
//			return null; // la return karaycha
//		}
//	}
//	
//	
}
