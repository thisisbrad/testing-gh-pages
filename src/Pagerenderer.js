import React from "react";
import { useRouteMatch } from "react-router-dom";

//make a function
const generatePage = (page) => {
  const component = () => require(`./pages/${page}`).default;

  try {
    return React.createElement(component());
  } catch (err) {
    console.warn(err);
    return React.createElement(() => 404);
  }
};

export default function Pagerenderer() {
  const {
    //using react hook called use
    params: { page },
  } = useRouteMatch();

  return generatePage(page);
}
