import React from "react";
import "./Searchbar.css";

//This is a stateless function component. coz we don't need any state
//if a component doesn't need a state, we can make it stateless function component
//and not a class based component
const Searchbar = (props) => (
  //create a form for the search
  //we use the name attribute in the form to read the value
  <section className="search-section">
    <form
      className="search-form"
      onSubmit={props.getRecipe}
      style={{ marginBottom: "2rem" }}
    >
      <input
        className="form__input"
        type="text"
        name="recipeName"
        placeholder="Search (e.g Landscape)"
      />
      <button className="form__button"></button>
    </form>
  </section>
);

export default Searchbar;
