import React from "react";
import "./Fetchphotos.css";
import { Link } from "react-router-dom";

//create a stateless function
const Flowers = (props) => (
  <div className="container">
    <div className="row">
      {/* we are gonna use map for the recipes array */}
      {props.recipes.map((flower) => {
        return (
          <div
            key={flower.id}
            className="col-md-4"
            style={{ marginBottom: "2rem" }}
          >
            <article>
              <div className="recipes__box">
                <div key={flower.id}>
                  <div className="overflow">
                    <div className="service-hover">
                      <img src={flower.webformatURL} alt={flower.type} />
                    </div>
                  </div>
                  <div className="recipe__text">
                    <h5 className="recipes__title">
                      {flower.tags.length < 20
                        ? `${flower.tags}`
                        : `${flower.tags.substring(0, 25)}...`}
                    </h5>
                  </div>
                  <button className="recipe_buttons">
                    <Link
                      to={{
                        pathname: `/imageflower/${flower.id}`,
                        state: { flower: flower.tags },
                      }}
                    >
                      View Details
                    </Link>
                  </button>
                </div>
              </div>
            </article>
          </div>
        );
      })}
    </div>
  </div>
);

export default Flowers;
