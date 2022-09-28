//shortcut for react function based component -> rfc
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartActions  } from "../store";
export default function Navbar(props) {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const data = typeof window !== "undefined" && localStorage.getItem("cart") ? 
 JSON.parse(localStorage.getItem("cart")) : []
  console.log(data);
  const authentication = useSelector((state) => state.cart.isauth);

  const logoutHandler = () => {
    dispatch(cartActions.logout());
  };
  return (
    //all code of navbar writting here             //to change the theme via toggl switch from app.js
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-light`}
      style={{ backgroundColor: "dark" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand " href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Contact us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-3" href="/about">
                {props.about}
              </a>
            </li>
            {authentication && (
              <>
                <Link to='/cart' class="btn btn-primary ms-2">
                  Add to card: {quantity}
                </Link>
                <Link
                  to="/login"
                  class="btn btn-primary"
                  onClick={logoutHandler}
                >
                  Log out
                </Link>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired, //title will be compulsary..it cannot be undefined
  about: PropTypes.string,
};
//setting type of each property..

Navbar.defaultProps = {
  title: "Set title here",
  about: "about us",
};
//setting default value of props
//if we do not pass any value from <Navbar/> in app.js ..
//these values will be used
