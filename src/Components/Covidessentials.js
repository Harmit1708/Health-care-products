import React, { useEffect, useContext, useState } from "react";
import { healthCareContext } from "../App";
import { useNavigate } from "react-router-dom";

function Covidessentials() {
  let context = useContext(healthCareContext);
  let [products, setProducts] = useState([]);
  let navigate = useNavigate();

  let getData = () => {
    if (context.data.length > 0) {
      setProducts(context.data[0].subItems);
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="product-wrapper">
      {products.map((e, i) => {
        return (
          <div key={i} className="product-item-wrapper">
            <img className="product-image" src={e.image} alt={e.name}></img>
            <h4 className="product-name">{e.name}</h4>
            <div className="product-price">&#x20b9;{e.price}</div>
            <button
              className="product-btn btn-dark text-light d-grid gap-2 d-md-flex justify-content-md-end"
              onClick={() => {
                let print = context.cart.findIndex((c) => c.name === e.name);
                if (print === -1) {
                  e["q"] = 1;
                  context.cart.push(e);
                  context.setCartValue(context.cart.length);
                } else {
                  context.cart[print]["q"] += 1;
                }
                console.log(context.cart);
              }}
            >
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Covidessentials;
