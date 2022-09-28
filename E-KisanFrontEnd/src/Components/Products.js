import React from "react";
import ProductItem from "./ProductItem";
export default function Products() {
  const DUMMY_PRODUCTS = [
    {
      id: "p1",
      price: 6,
      title: "Tomato",
      description: "The first book I ever wrote",
    },
    {
      id: "p2",
      price: 5,
      title: "Onions",
      description: "The second book I ever wrote",
    },
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="my-4">
          <h1>Products</h1>
        </div>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
}
