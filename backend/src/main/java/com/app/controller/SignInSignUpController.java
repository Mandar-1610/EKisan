package com.app.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AuthRequest;
import com.app.dto.AuthResp;
import com.app.dto.UserDTO;
import com.app.jwt_utils.JwtUtils;
import com.app.service.IUserService;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/ekisan")
@Slf4j
@CrossOrigin(origins = "http://localhost:3000")
public class SignInSignUpController {
//dep : JWT utils : for generating JWT
	@Autowired
	private JwtUtils utils;
	// dep : Auth mgr
	@Autowired
	private AuthenticationManager manager;
	
	@Autowired
	private IUserService userService;

	// add a method to authenticate user . Incase of success --send back token , o.w
	// send back err mesg
	@PostMapping("/signin")
	public ResponseEntity<?> validateUserCreateToken(@RequestBody @Valid AuthRequest request) {
		// store incoming user details(not yet validated) into Authentication object
		// Authentication i/f ---> imple by UserNamePasswordAuthToken
		UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(request.getEmail(),
				request.getPassword());
		log.info("auth token " + authToken);
		try { 
			// authenticate the credentials
			Authentication authenticatedDetails = manager.authenticate(authToken);
			// => auth succcess
			return ResponseEntity.ok(new AuthResp("Auth successful!", utils.generateJwtToken(authenticatedDetails)));
		} catch (BadCredentialsException e) { // lab work : replace this by a method in global exc handler
			// send back err resp code
			System.out.println("err "+e);
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Hello....");
		}
	}
	
	@PostMapping("/signup")
	public ResponseEntity<?> userResgister(@RequestBody UserDTO user){
		return ResponseEntity.status(HttpStatus.CREATED).body(userService.resgisterUser(user)) ;
	}
	
	
	//@PutMapping("/forgetPass")
//	public String forgetPassword(@RequestBody CustomerLogin c) {
//	
//		int response = userService.updatePassword(c.getEmail());
//		if(response==1)
//			return "Sucess";
//		else
//			return "Fail";
//	}
	
	
	
}
