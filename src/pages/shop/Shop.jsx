import React from "react";
import "./Shop.css";
import { PRODICTS } from "../../products";
import Product from "./product";
import image1 from '../../assets/1.png';
const Shop = () => {
  return (
    <div className="shop">

      <div className="container">
        <div className="welcometext">
        Welcom To Electro Baazar
        </div>
        <span>your ultimate destination for cutting-edge electronics!</span>
      </div>


      <div>
        <div className="shopTitle">Our Products</div>
        <div className="products">
          {PRODICTS.map((products) => (
            <Product data={products} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
