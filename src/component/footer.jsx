import React from "react";

import { FacebookLogo } from "phosphor-react";
import { TwitterLogo } from "phosphor-react";
import { WhatsappLogo } from "phosphor-react";
import { MessengerLogo } from "phosphor-react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="firstcontainer">
        <div className="contactinfo">
          <div className="logo">EB</div>
          <span>electrobaazar@gmail.com</span>
          <span>8911233488</span>
        </div>

        <div>
          <FacebookLogo className="socialmedia" size={20} />
          <TwitterLogo className="socialmedia" size={20} />
          <WhatsappLogo className="socialmedia" size={20} />
          <MessengerLogo className="socialmedia" size={20} />
        </div>
      </div>
      <div className="footer-line"></div>
      <div className="secondcontainer">
        <p>@Copyright 2024, Kochi,Kerala</p>
      </div>
    </div>
  );
};

export default Footer;
