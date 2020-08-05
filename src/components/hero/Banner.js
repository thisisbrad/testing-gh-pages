import React from "react";
import "./Hero.css";

//passing in the props to the function
export default function Banner({ children, title, subtitle }) {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <div></div>
      <h2>{subtitle}</h2>
      {children}
    </div>
  );
}
