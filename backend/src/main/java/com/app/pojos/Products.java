package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotBlank;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
@Entity
public class Products {
	//id, name, price,quantity, catid
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int prodId;
	
	@NotBlank(message = "Please enter valid product name")
	//@NotNull(message = "Please enter product name")
	@Column(length = 30, nullable = false)
	private String prodName;
	
	@Column(nullable = false)
	private double price;
	
	private int quantity;
	
	@ManyToOne
	@JoinColumn(name="catId")
	private Category catId;
	
}
