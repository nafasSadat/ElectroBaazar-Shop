import React, { useContext } from "react";
import { PRODICTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import CartItems from "./cartItems";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODICTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItems data={product}></CartItems>;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p className="totalamount"> Subtotal: ${totalAmount} </p>
          <div>
            <button
              onClick={() => {
                navigate("/");
              }}
            >
              Back to Shop
            </button>

            <button
              onClick={() => {
                alert("Thank you for shopping with Electro Baazar");
                window.location.reload()
                navigate("/cart");
              }}
            >
              Checkout{" "}
            </button>
          </div>
        </div>
      ) : (
        <p className="emptycart">
          {" "}
          Your Shopping Cart is Empty -{">  "}
          <a href="/"> Go to Shop!</a>
        </p>
      )}
    </div>
  );
};

export default Cart;
