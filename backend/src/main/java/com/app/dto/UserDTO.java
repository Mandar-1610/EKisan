package com.app.dto;

import java.util.HashSet;
import java.util.Set;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
public class UserDTO {
	private String firstName;
	private String lastName;
	private String email;
	private String password;
	private String contactNo;
	private Set<RoleDTO> roles = new HashSet<>();
}
