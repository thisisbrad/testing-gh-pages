import React, { Component } from "react";
import "./Featured.css";
import Title from "../title/Title";

export default class Featured extends Component {
  //create state for the featured items so that we loop through them and display them on screen
  state = {
    services: [
      {
        // user: (
        //   <img
        //     className="featured"
        //     src="https://images.pexels.com/photos/230291/pexels-photo-230291.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        //     alt="pic"
        //   />
        // ),
        number: "1",
        title: "Party Images",
        info:
          "Look nowhere else when you want to get high resolution images for your party. We will provide you with a great service of taking your party to the next level.",
      },
      {
        // user: (
        //   <img
        //     className="featured"
        //     src="https://images.pexels.com/photos/265791/pexels-photo-265791.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        //     alt="pic"
        //   />
        // ),
        number: "2",
        title: "Camera Rental",
        info:
          "Get cameras from us at a lower cost for that trip you have been looking for. We will provide you with our modern cameras that you will rent from us.",
      },
      {
        // user: (
        //   <img
        //     className="featured"
        //     src="https://images.pexels.com/photos/288008/pexels-photo-288008.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        //     alt="pic"
        //   />
        // ),
        number: "3",
        title: "Wedding Photos",
        info:
          "We all know this the day we want to remember for the rest of our lives. So, to keep you backedup, we will provide you with qualified photographers.",
      },
      {
        // user: (
        //   <img
        //     className="featured"
        //     src="https://images.pexels.com/photos/2697598/pexels-photo-2697598.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        //     alt="pic"
        //   />
        // ),
        number: "4",
        title: "Post Your Images",
        info:
          "Are you a photographer and trying to find ways of exposing your photos to the world? Well, we got you. Just sign up or visit or office.",
      },
      {
        // user: (
        //   <img
        //     className="featured"
        //     src="https://images.pexels.com/photos/837254/pexels-photo-837254.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        //     alt="pic"
        //   />
        // ),
        number: "5",
        title: "Free API",
        info:
          "If you are working on projects and need images, all you have to do is signup and tell us how you will be using our images.",
      },
    ],
  };
  render() {
    return (
      <div className="container">
        <section className="services">
          <Title title="Our Services" />
          <div className="services-center2">
            {this.state.services.map((item, index) => {
              return (
                <article key={index} className="service">
                  <div className="overflow">
                    <div className="service-hover">
                      <p>{item.user}</p>
                    </div>
                  </div>
                  <div className="imageContent">
                    <h5 className="numbers">{item.number}</h5>
                    <h4 className="service-heading">{item.title}</h4>
                    <p className="info-left">{item.info}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    );
  }
}
