package com.app.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Products;
import com.app.service.IProductsService;

@RestController
@RequestMapping("/products")
public class ProductController {
	
	@Autowired
	IProductsService productsService;
	
	
	//To add products to db
	@PostMapping
	public Products saveProducts(@RequestBody Products newProduct) {
		return productsService.addProduct(newProduct);
	}
	
	//to display all products
	@GetMapping
	public List<Products> getListAllProducts(){
		System.out.println("Inside Buyer's Product Controller");
		return productsService.showAllProducts();
	}
	
	
	//get product by product name
	@GetMapping("/{name}")
	public Products displayProducts(@PathVariable String name) {
		return productsService.getProductsByName(name);
	}
	
	//to update product
	@PutMapping
	public Products updateProduct(@RequestBody Products product) {
		return productsService.updateproductDetails(product);
	}
	
	//To deleteing the product by id
	@DeleteMapping("/{id}")
	public String removeProducts(@PathVariable @Valid Integer id) {
			return productsService.deleteProduct(id);
	}
	
}
