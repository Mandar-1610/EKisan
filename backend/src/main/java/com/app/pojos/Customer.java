package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
public class Customer {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int customerId;

	@Column(length = 30, nullable = false)
	@NotBlank(message = "please enter valid name")
	private String firstName;

	@Column(length = 30, nullable = false) // in database "not null" checking
	@NotNull // server side validation
	@NotBlank(message = "please enter valid name")
	private String lastName;

	@Column(length = 30, nullable = false)
	@NotBlank
	@Email
	private String email;

	@Column(length = 16, nullable = false)
	@NotBlank
	@Size(min=6, max=12, message = "password must be between 3 to 12 characters")
	private String password;

	@Column(length = 10, nullable = false)
	@NotNull
	private String contactNo;

	private String address;

	@Column(length = 4)
	private String otp;

}
