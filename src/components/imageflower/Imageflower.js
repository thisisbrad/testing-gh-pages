import React, { Component } from "react";
import "./Imageflower.css";
import { Link } from "react-router-dom";

const API_KEY = "17559173-995704be0e53720e4ffec5a9f";

export default class Imageflower extends Component {
  state = {
    activeImage: [],
  };

  componentDidMount = async () => {
    const tags = this.props.location.state.flower;
    const req = await fetch(
      `https://pixabay.com/api/?key=${API_KEY}&q=${tags}&image_type=photo`
    );
    const res = await req.json();
    this.setState({ activeImage: res.hits[0] });
    console.log(this.state.activeImage);
  };

  render() {
    console.log(this.props);
    const flowers = this.state.activeImage;
    return (
      <div className="container">
        <div className="image-details">
          {this.state.activeImage.length !== 0 && (
            <div className="active-image">
              <img
                className="active-image-view"
                src={flowers.webformatURL}
                alt={flowers.pageURL}
              />
              <h5 className="imagetitle">{flowers.tags}</h5>
              <h5 className="user-name">
                {" "}
                Photographer Name: <span>{flowers.user}</span>
              </h5>
              <p className="web-page">
                Download:{" "}
                <span>
                  <a className="photo-link" href={flowers.pageURL}>
                    {flowers.pageURL}
                  </a>
                </span>
              </p>
              <button className="btn-photos">
                <Link to="/photos">Back to Photos</Link>
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}
