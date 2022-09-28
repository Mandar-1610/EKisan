package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

//import com.app.pojos.Customer;
import com.app.pojos.User;

public interface IUserRepository extends JpaRepository<User, Integer> {
//	@Query(value = "select c from Customer c where c.email=?1 and c.password=?2")
//	Customer findByCustomerIdandPassword(String email,String password);//These Parameters are coming from CustomerLogin entity
	 //the parameters present in query are of type 'Customer'
	
	//for login
	Optional<User> findByEmailAndPassword(String email, String password);
	
	//for checking email is already present
	Optional<User> findByEmail(String email);
//	
//	
//	@Modifying
//	@Query(value="update Customer c set c.password=?1 where c.email=?2")
//	void updateCustomerPassword(String password, String email);
}
