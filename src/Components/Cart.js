import React, { useContext } from "react";
import { healthCareContext } from "../App";
import { Link } from "react-router-dom";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

function Cart() {
  let context = useContext(healthCareContext);
  let cartPrice = 0;

  let handleRemove = (e) => {
    context.cart.splice(context.cart.indexOf(e), 1);
    context.setCartValue(context.cart.length);
  };

  let handleMinus = (e) => {
    let index = context.cart.findIndex((c) => c.name === e.name);
    if (index !== -1) {
      context.cart[index]["q"] = context.cart[index]["q"] - 1;
      context.setCartValue(context.cart.length);
    }
  };

  let handlePlus = (e) => {
    let index = context.cart.findIndex((c) => c.name === e.name);
    if (index !== -1) {
      context.cart[index]["q"] += 1;
      context.setCartValue(context.cart.length);
    }
  };
  return (
    <div className="product-wrapper row">
      {context.cart.length > 0 ? (
        <>
          {context.cart.map((e, i) => {
            cartPrice = cartPrice + Number(e.price * e.q);
            return (
              <div key={i} className="product-item-wrapper">
                <img className="product-image" src={e.image} alt={e.name}></img>
                <h4 className="product-name">{e.name}</h4>
                <div className="product-price">&#x20b9;{e.price}</div>
                <div className="product-qty">
                  <button
                    className="btn minus bg-danger text-light "
                    onClick={() => {
                      handleMinus(e);
                    }}
                  >
                    <RemoveIcon />
                  </button>
                  Qty:{e.q}
                  <button
                    className="btn plus bg-danger text-light"
                    onClick={() => {
                      handlePlus(e);
                    }}
                  >
                    <AddIcon />
                  </button>
                </div>
                <button
                  className="product-btn-remove btn-danger d-grid gap-2 d-md-flex justify-content-md-end"
                  onClick={() => {
                    handleRemove(e);
                  }}
                >
                  Remove from Cart
                </button>
              </div>
            );
          })}

          <div className="placeholder-wrapper row text-decoration-none">
            <div className="product-price-total text-center ">
              Total Pay : {cartPrice}
            </div>
            <Link to="/">
              <button
                className="product-btn-placeholder "
                onClick={() => {
                  context.setCart([]);
                  context.setCartValue(0);
                }}
              >
                Place Order
              </button>
            </Link>
          </div>
        </>
      ) : (
        <>
          <h4 className="text-center">Cart Is Empty!</h4>
        </>
      )}
    </div>
  );
}

export default Cart;
