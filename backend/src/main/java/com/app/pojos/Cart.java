//package com.app.pojos;
//
//import java.util.List;
//
//import javax.persistence.CascadeType;
//import javax.persistence.Column;
//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//import javax.persistence.JoinColumn;
//import javax.persistence.OneToMany;
//import javax.persistence.OneToOne;
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
//public class Cart {
//	
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private int cartId;
//	
//	private int quantity;
//	
//	@Column(nullable = false)
//	private double price;
//	
//	@OneToMany
//	@JoinColumn(name = "prodId")
//	private List<Products> productList;
//	
//	@OneToOne
//	@JoinColumn(name = "customerId")
//	private Customer customerId;
//}
