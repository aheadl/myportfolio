import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Control, LocalForm, Errors } from "react-redux-form";



class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      agree: false,
      contactType: "",
      feedback: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleCheckboxValue = this.toggleCheckboxValue.bind(this);
  }

  handleInputChange(event) {
    const name = event.target.name;
    console.log("event name is ", name);
    console.log("event value is ", event.target.value);
    this.setState({ [event.target.name]: event.target.value });
    console.log("DISPLAY STATE: ", this.state);
  }
  toggleCheckboxValue(event) {
    this.setState({agree: true})
  }

  handleSubmit(values) {
    console.log("In handle submit function");
    console.log("DISPLAY STATE after submit: ", this.state);
    console.log("Feedback entered: ", this.state.feedback)
    alert(`Thanks ${this.state.firstName} for filling in the form`);
    this.props.addFeedback(
      this.state.firstName,
      this.state.lastName,
      this.state.phone,
      this.state.email,
      this.state.agree,
      this.state.contactType,
      this.state.feedback
    );
  }

  render() {
    return (
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 ml-2">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>

              <li className="breadcrumb-item active">
                <a href="/contact">Contact</a>
              </li>
            </ol>
            <h3 id="fontcolor">
              <span id="category"></span>
            </h3>
          </div>
        </div>
        <div className="row row-content align-items-center ml-2">
          <div className="col-sm-4 ">
            <h5>
              <b>Contact Us</b>
            </h5>
            <p></p>
            <h6>Our Address</h6>
            <address>
              1 Moira Way
              <br />
              Union, NJ 07083
              <br />
              U.S.A.
            </address>
          </div>
          <div className="col">
            <Link
              role="button"
              className="btn btn-link"
              href="tel:+19085551234"
            >
              <i className="fa fa-phone"></i> 1-908-555-1234
            </Link>
            <br />
            <Link
              role="button"
              className="btn btn-link"
              href="mailto:healthybalance@yahoo.com"
            >
              <i className="fa fa-envelope-o"></i> aheadley@gmail.com
            </Link>
          </div>
        </div>
        <div className="row row-content ml-3">
          <div className="col-12">
            <h3>
              <b>Send us your Feedback</b>
            </h3>
            <hr />
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-2">
              <label htmlFor="firstName" md={2}>
                First Name:
              </label>
            </div>
            <div className="col-10">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                // value={this.state.firstName}
                onChange={(e) => this.handleInputChange(e)}
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-2">
              <label htmlFor="lastName" md={2}>
                Last Name:
              </label>
            </div>
            <div className="col-10">
              <input
                type="text"
                placeholder="Last name"
                name="lastName"
                // value={this.state.lastName}
                onChange={this.handleInputChange}
              ></input>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-2">
              <label htmlFor="email" md={2}>
                Email:
              </label>
            </div>
            <div className="col-10">
              <input
                type="text"
                placeholder="Email"
                name="email"
                // value={this.state.email}
                onChange={this.handleInputChange}
              ></input>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-2">
              <label htmlFor="phone" md={2}>
                Phone:
              </label>
            </div>
            <div className="col-10">
              <input
                type="text"
                placeholder="Phone"
                name="phone"
                // value={this.state.phone}
                onChange={this.handleInputChange}
              ></input>
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col-2">
              <label htmlFor="contactType" md={2}>
                May we contact you?
              </label>
            </div>
            <div className="col-2">
              <input
                type="checkbox"
                name="agree"
                onChange={this.toggleCheckboxValue}
                // value={this.state.agree}
              />
            </div>
            <div className="col-8">
              <select
                name="contactType"
                onChange={this.handleInputChange}
                // value={this.state.contactType}
              >
                <option value="By email">By email</option>
                <option value="By phone">By phone</option>
                <option selected value="...Select">
                  ...Select
                </option>
              </select>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-2">
              <label htmlFor="feedback" md={2}>
                Add feedback:
              </label>
            </div>
            <div className="col-10">
              <textarea
                name="feedback"
                // value={this.state.feedback}
                onChange={this.handleInputChange}
              />
            </div>
            <br />
          </div>
          <div className="row">
            <div className="col-3">
              <input type="submit" name="submit" />
            </div>
            <div className="col-2">
              <input type="reset" name="reset" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
 

export default Contact;