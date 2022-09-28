import React from "react";
import { cartActions } from "../store";
import { useDispatch } from "react-redux";

export default function ProductItem(props) {
    const dispatch = useDispatch();

  const { title, price, description, id } = props;

  const addToCartHandler = () => {
    // and then send Http request
    // fetch('firebase-url', { method: 'POST', body: JSON.stringify(newCart) })
    dispatch(
        cartActions.addToCart({
          id,
          title,
          price,
        })
      );
  };
  const removeFromCartHandler = () => {
    dispatch(cartActions.removeFromCart(id));
  };
  return (
    <div className="col md-4 my-4">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
           {description}
          </p>
          <p className="card-text">
           ₹{price}
          </p>
          <button className="btn btn-primary" onClick={removeFromCartHandler}>
            -
          </button>
          <p>Add to cart</p>
          <button className="btn btn-primary" onClick={addToCartHandler}>
            +
          </button>
          {/* <button className="btn btn-primary" >add to cart:{quantity}</button> */}
        </div>
      </div>
      
    </div>
  );
}
