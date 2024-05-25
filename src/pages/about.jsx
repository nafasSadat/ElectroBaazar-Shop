import React from "react";
import "./about.css";
const About = () => {
  return (
    <div className="about">
      <div className="content">
        <p className="title"> Welcome to Electro Baazar</p>
        <p className="contentdescription">
          Our shop is your one-stop destination for top-quality electronics
          online. We specialize in providing the latest laptops, mobiles,
          iPhones, Samsung devices, AirPods, and cameras. Our mission is to
          offer the best technology at competitive prices, backed by exceptional
          customer service. Whether you're a tech enthusiast or looking for the
          perfect gadget, we have everything you need to stay connected and
          ahead of the curve. Shop with us today and experience the future of
          electronics!
        </p>
      </div>
      <div className="inputfield">
        <span>Tell us:</span>
        <input />
        <button>Send</button>
      </div>
    </div>
  );
};

export default About;
