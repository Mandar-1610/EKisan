package com.app.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.dao.IProductsRepository;
import com.app.pojos.Products;

@Service
@Transactional
public class ProductsServiceImpl implements IProductsService {

	@Autowired
	IProductsRepository productsRepo;
	
	
	//To display all products
	@Override
	public List<Products> showAllProducts() {
			return productsRepo.findAll();
	}

	
	//To display product, searched by its name 
	@Override
	public Products getProductsByName(String name) {
		return productsRepo.findByProdName(name).orElseThrow(()->new RuntimeException(" invalid product name"));
	}
	

	//To add product to the database
	@Override
	public Products addProduct(Products product) {
		return productsRepo.save(product);
	}

	
	//To update product
	@Override
	public Products updateproductDetails(Products updatedProduct) {
		return productsRepo.save(updatedProduct);
	}


	//To delete the product by its id
	@Override
	public String deleteProduct(int id) {
		String msg="Deletion of the product is failed";
		
		if(productsRepo.existsById(id)) {
			productsRepo.deleteById(id);
			msg="product deleted successfully";
		}
		
		return msg; 
	}
	
	

}
