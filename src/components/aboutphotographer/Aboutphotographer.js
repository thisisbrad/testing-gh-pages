import React, { Component } from "react";
import "./Aboutphotographer.css";
import Title from "../title/Title";
import images from "../../images/john.jpeg";

export default class Aboutphotographer extends Component {
  //create state for the featured items so that we loop through them and display them on screen
  state = {
    aboutPhoto: [
      {
        title: "Founded",
        info:
          "Hello, my name is John Achero and I am the founder of WoodSmithImages. WoodSmithImages was founded in the year 2019. The main purpose for the application is to help users get access to images using our searchbar.  We hope you will visit our application and also visit us in our office. Incase you have any quesition, please don't hesitate to reach us. Our application provides you with all types of images, all you have to do is know what you are looking for. We hope you enjoy using our application. You can visit our contact page for more information how to reach us.",
      },
      {
        title: "Our Images",
        info:
          "Our images are from Pixabay, and as you can see in our website, these images are of high quality. They were or have been taken by best photographers across the globe. Please note that incase you intend to use our images in your project, you are required to credit the photographers. Good luck using our images, looking forward to seeing your projects.",
      },
    ],
  };
  render() {
    return (
      <div className="container">
        <section className="services">
          <Title title="About" />
          <img className="useravatar" src={images} alt="person" />
          <div className="services-center3">
            {this.state.aboutPhoto.map((item, index) => {
              return (
                <article key={index} className="about-service">
                  <h6>{item.title}</h6>
                  <div className="about-content">
                    <p>{item.user}</p>
                    <p>{item.info}</p>
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
