import React, { Component } from "react";

//setting the form initial state
const initialState = {
  firstname: "",
  lastname: "",
  phone: "",
  email: "",
  message: "",
  firstnameError: "",
  lastnameError: "",
  phoneError: "",
  emailError: "",
};

export default class Contactform extends Component {
  //state for the input values
  state = initialState;

  handleChange = (e) => {
    const isCheckbox = e.target.type === "checkbox";
    this.setState({
      [e.target.name]: isCheckbox ? e.target.checked : e.target.value,
    });
  };

  //validation function
  validate = () => {
    let firstnameError = "";
    let lastnameError = "";
    let phoneError = "";
    let emailError = "";

    if (!this.state.phone) {
      phoneError = "Phone cannot be blank!";
    }

    if (!this.state.lastname) {
      lastnameError = "Last name cannot be blank!";
    }

    if (!this.state.firstname) {
      firstnameError = "First name cannot be blank!";
    }
    if (!this.state.email.includes("@")) {
      emailError = "Invalid email!";
    }

    if (firstnameError || lastnameError || emailError || phoneError) {
      this.setState({ firstnameError, lastnameError, emailError, phoneError });
      return false;
    }

    return true;
  };

  //function to prevent form from refreshing
  handleSubmit = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);

      //clear form after if validate, setting it to initial state
      this.setState(initialState);
    }
  };

  render() {
    return (
      <div className="contact-section">
        <div className="contact-box">
          <div className="contact-left">
            <h3>Get In Touch</h3>
            <form onSubmit={this.handleSubmit} noValidate>
              <div className="input-row">
                <div className="input-group">
                  <label htmlFor="firstname">First Name</label>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    value={this.state.firstname}
                    onChange={this.handleChange}
                    autoFocus
                  />
                  <div className="error-message">
                    {this.state.firstnameError}
                  </div>
                </div>
                <div className="input-group">
                  <label htmlFor="lastname">Last Name</label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    value={this.state.lastname}
                    onChange={this.handleChange}
                  />
                  <div className="error-message">
                    {this.state.lastnameError}
                  </div>
                </div>
              </div>
              <div className="input-row">
                <div className="input-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                  <div className="error-message">{this.state.emailError}</div>
                </div>
                <div className="input-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="phone"
                    name="phone"
                    id="phone"
                    value={this.state.phone}
                    onChange={this.handleChange}
                  />
                  <div className="error-message">{this.state.phoneError}</div>
                </div>
              </div>
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="5"></textarea>
              <button className="message-btn" type="submit">
                Send Message
              </button>
            </form>
          </div>
          <div className="contact-right">
            <h3>Reach Me</h3>
            <table>
              <tbody>
                <tr>
                  <td>Email:</td>
                  <td>johnkennedy1868@yahoo.com</td>
                </tr>
                <tr>
                  <td>Phone:</td>
                  <td>+1 515 943 8306</td>
                </tr>
                <tr>
                  <td>Address:</td>
                  <td>4205 Long Key LN, Winter Park, FL, 32792</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
