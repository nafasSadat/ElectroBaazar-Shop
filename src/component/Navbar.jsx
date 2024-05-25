import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import { ShopContext } from "../context/shop-context";

const Navbar = () => {
  const { cartItems, getTotalitem, checkout } = useContext(ShopContext);
  const totalItem = getTotalitem();
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Home</Link>
        {/* <Link to="/">Gallery</Link> */}
        <Link to="/contact">Contact</Link>
        <Link to="/about">About us</Link>
        <Link to="/cart">
          <div className="basket">
            <ShoppingCart size={32} />
          </div>
        </Link>
        <span className="showitemnumber">{totalItem}</span>
      </div>
      {/* <Link className="login">login</Link> */}
    </div>
  );
};

export default Navbar;
