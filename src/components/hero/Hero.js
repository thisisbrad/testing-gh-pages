import React from "react";

//I am paasing in the props 'children and banner' because I want to add text to the hero
//Each time we are rendering the header we want to render the children
export const Hero = ({ children, hero }) => {
  return <header className={hero}>{children}</header>;
};

//we add the default prop so that the banner image for the home page will be set to default and we are
//also going to change each page's banner
Hero.defaultProps = {
  hero: "defaultHero",
};
export default Hero;
