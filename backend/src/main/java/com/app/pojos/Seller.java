//package com.app.pojos;
//
//import javax.persistence.Column;
//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//import javax.validation.constraints.NotNull;
//
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import lombok.Setter;
//import lombok.ToString;
//
//@Getter
//@Setter
//@ToString
//@NoArgsConstructor
//@Entity
//public class Seller {
//	
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private int sellerId;
//	
//	@NotNull(message = "Please enter your first name")
//	@Column(length = 30, nullable = false)
//	private String firstName;
//	
//	@NotNull(message = "Please enter your last name")
//	@Column(length = 30, nullable = false)
//	private String lastName;
//	
//	@NotNull(message = "Please enter your email")
//	@Column(length = 30, nullable = false)
//	private String email;
//	
//	@NotNull(message = "Please enter your password")
//	@Column(length = 16, nullable = false)
//	private String password;
//	
//	@Column(length = 10, nullable = false)
//	private String contactNumber;
//	
//	private String address;
//	
//	@Column(length = 4)
//	private int otp;
//	
//	
//}
