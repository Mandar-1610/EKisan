//import logo from './logo.svg';
//import fruits from './Images/fruits'
import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Registration from "./Components/Registration";
import { useState } from "react";
import Aboutus from "./Components/Aboutus";
import Contactus from "./Components/Contactus";
import Loginpage from "./Components/Loginpage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Payment from "./Components/Payment";
import Thankyou from "./Components/Thankyou";
import Dashboard from "./Components/Dashboard";
import Products from "./Components/Products";
import { useSelector } from "react-redux";
import Body from "./Components/Body";
import Cart from "./Components/Cart";

function App() {
  // const [mode, setMode] = useState(false);
  // const toggleMode = () => {
  //   if (mode === "light") {
  //     setMode("dark");
  //     //showAlert("Dark mode has been enabled", "Success");
  //   } else setMode("light");
  // };

  return (
    <>
      <div className="App">
        {/* <img src='/src/images/bgimage.jpg'/> */}

        {/* <Aboutus/> */}
        {/* <Loginpage/> */}
        {/* <Contactus/> */}
        <Router>
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route exact path="/about">
              <Body>
                <Aboutus />
              </Body>
            </Route>
            <Route exact path="/register">
              <Registration />
            </Route>
            <Route exact path="/login">
              <Body>
                <Loginpage />
              </Body>
            </Route>
            <Route exact path="/payment">
              <Payment />
            </Route>
            <Route exact path="/thankyou">
              <Thankyou />
            </Route>
            <Route exact path="/products">
              <Body>
                <Products />
              </Body>
            </Route>
            <Route exact path="/cart">
              <Body>
                <Cart />
              </Body>
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
