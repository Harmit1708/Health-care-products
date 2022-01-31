import React, { useContext } from "react";
import { healthCareContext } from "../App";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Header() {
  let context = useContext(healthCareContext);
  return (
    <div className="header-wrapper">
      <div className="header-title">
        <Link className="Link" to="/">
          Health Care Products
        </Link>
      </div>
      <div className="header-cart">
        <Link to="/cart" className="header-icon">
          <ShoppingCartIcon />
        </Link>
        <span className="count">{context.cartValue}</span>
      </div>
    </div>
  );
}

export default Header;
