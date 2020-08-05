import React, { Component } from "react";
// import Hero from "../components/hero/Hero";
import Banner from "../components/hero/Banner";
import Searchbar from "../components/searchbar/Searchbar";
// import Title from "../components/title/Title";
import Flower from "../components/fetchphotos/Flower";
//Api key
const API_KEY = "17559173-995704be0e53720e4ffec5a9f";

export default class Photos extends Component {
  //create state to take care of the data
  state = {
    //set an empty array to store data we get from api
    recipes: [],
  };

  getRecipe = async (e) => {
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;
    // console.log(recipeName);
    const api_call = await fetch(
      `https://pixabay.com/api/?key=${API_KEY}&q=${recipeName}&image_type=photo`
    );
    const data = await api_call.json();
    console.log(data);
    //set the piece of data to the rcipes array
    this.setState({ recipes: data.hits });
    console.log(this.state.recipes);
  };

  componentDidMount = () => {
    //we fetch everything in our local storage
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({ recipes });
  };

  //use component did update
  componentDidUpdate = () => {
    //storing into local storage
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  };

  render() {
    return (
      <div className="App">
        <div className="photoHero">
          <Banner
            title="Search for quality images"
            subtitle="With high resolution"
          ></Banner>
        </div>
        <Searchbar getRecipe={this.getRecipe} />
        <h6 className="search-total">
          Search Results ---- {this.state.recipes.length} images
        </h6>
        {/* <Title title="Photos" /> */}
        <Flower recipes={this.state.recipes} />
      </div>
    );
  }
}
