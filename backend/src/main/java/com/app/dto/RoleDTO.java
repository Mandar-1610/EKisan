package com.app.dto;


import java.util.HashSet;
import java.util.Set;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RoleDTO {
	private Long roleId;
	private Set<String> roles= new HashSet<>();
}
