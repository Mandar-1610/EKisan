import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import registerService from "../services/registerService";

export default function Registration() {

  // const[firstName, setFirstName] = useState('');
  // const[lastName, setLastName] = useState('');
  // const[email, setEmail] = useState('');
  // const[password, setPassword] = useState('');
  // const[contactNo, setContactNo] = useState('');
  // const[role, setRole] = useState(''); 
  
  // const saveUser = (e) =>{
  //   e.preventDefault();
  //   registerService.create(employee).then(response=>{
  //     history.push("/register")
  //   })
  //   const user={firstName, lastName, email, password, contactNo, role}
  // }



  // useEffect(()=>{

  // },[])

  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col">
            <div>
              <div className="container my-4" style={{ textAlign: "left" }}>
                <h2 class="text-left">Register</h2>
              </div>
              <form action="/login"
                className="row g-3 needs-validation"
                validate
                style={{ textAlign: "left" }}
              >
                <div class="col-md-5">
                  <label for="validationCustom01" class="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="firstName"
                    //value={firstName}
                    required
                    placeholder="Enter your first name"
                    //onChange={(e)=> setFirstName(e.target.//value)}
                  />
                  <div class="valid-feedback">Looks good!</div>
                </div>
                <div class="col-md-5 mx-4">
                  <label for="validationCustom01" class="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="lastName"
                    //value={lastName}
                    required
                    placeholder="Enter your last name"
                    //onChange={(e)=> setLastName(e.target.//value)}
                  />
                  <div class="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-5">
                  <label for="inputEmail4" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    //value={email}
                    required
                    placeholder="example@mail.com"
                    //onChange={(e)=> setEmail(e.target.//value)}
                  />
                </div>
                <div className="col-md-5 mx-4">
                  <label for="inputPassword4" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    //value={password}
                    pattern="(?=.*\d)(?=.*[aA-zZ]).{6,}"
                    required
                    placeholder="example123"
                    //onChange={(e)=> setPassword(e.target.//value)}
                  />
                </div>
                <div className="col-md-5 mx-6 my-3">
                  <label for="contactNo" className="form-label">
                    Contact No
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="contactNo"
                    //value={contactNo}
                    data-validation="number"
                    required="required"
                    placeholder="10-digit number"
                    //onChange={(e)=> setContactNo(e.target.//value)}
                  />
                </div>
                <div className="select col-8">
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Please Select the Role</option>
                    <option value="1">Buyer</option>
                    <option value="2">Seller</option>
                  </select>
                </div>
                <div class="col-6">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      //value=""
                      id="invalidCheck"
                      required
                    />
                    <label class="form-check-label" for="invalidCheck">
                      Agree to terms and conditions
                    </label>
                    <div class="invalid-feedback">
                      You must agree before submitting.
                    </div>
                  </div>
                </div>
                <div className="col-7 my-3">
                  <button type="submit" className="btn btn-primary" >
                    Register
                  </button>
                  <Link to="/login" class="link-primary mx-4">Already a user</Link>
                </div>
              </form>
            </div>
          </div>
          <div class="col-md-6">
            <div className="my-5"></div>
            {/* <div className="my-5"></div>
            <div className="my-5"></div> */}
          <img src="./image/cart11.PNG" width="90%" height="90%" style={{}}/> 
          </div>
        </div>
      </div>
    </>
  );
}
