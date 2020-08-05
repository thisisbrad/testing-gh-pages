import React from "react";
import "./Footer.css";
import { GrFacebookOption } from "react-icons/gr";
import { IoLogoLinkedin } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="social">
      <h5 className="footer-title">Stay Connected</h5>
      <div className="social-icons">
        <GrFacebookOption className="footer-icon" />
        <AiFillInstagram className="footer-icon" />
        <IoLogoLinkedin className="footer-icon" />
        <FaTwitter className="footer-icon" />
      </div>
    </div>
  );
}
