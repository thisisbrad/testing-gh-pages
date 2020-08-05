import React from "react";
import "../components/contactform/Contactform.css";
import Hero from "../components/hero/Hero";
import Banner from "../components/hero/Banner";
import Contactform from "../components/contactform/Contactform";

export default function Contact() {
  return (
    <div>
      <Hero hero="contact-hero">
        <Banner title="Contact Us"></Banner>
      </Hero>
      <Contactform />
    </div>
  );
}
