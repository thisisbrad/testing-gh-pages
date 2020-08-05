import React, { Component } from "react";
import { Menuitems } from "../navbar/Menuitems";
import "./Navbar.css";
import { Link } from "react-router-dom";

//We use a class because we are going to create a state
class Navbar extends Component {
  //create a state for the hamburger menu
  state = {
    isOpen: false,
  };

  //handleClick fucntion
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  closeNavbar = () => {
    this.setState({
      isOpen: false,
    });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="Navbar-logo">
          WoodSmith<span className="brand-span"> Images</span>
        </h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {Menuitems.map((link, index) => {
            return (
              <li key={index}>
                <Link
                  onClick={this.closeNavbar}
                  className="nav-lin"
                  to={link.path}
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
