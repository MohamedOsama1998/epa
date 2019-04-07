import React, { Component } from "react";
import TextInput from "./TextInput";

export default class Login extends Component {
  state = {
    name: "",
    email: "",
    confEmail: "",
    password: "",
    confPassword: "",
    errors: {
      name: "",
      email: "",
      confEmail: "",
      password: "",
      confPassword: ""
    }
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const {
      name,
      email,
      confEmail,
      password,
      confPassword,
      errors
    } = this.state;

    // ERROR CHECKING

    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confEmail === "" ||
      confPassword === "" ||
      email !== confEmail ||
      password !== confPassword
    ) {
      const errorsCopy = errors;
      name === ""
        ? (errorsCopy.name = "Please enter your name...")
        : (errorsCopy.name = "");
      password === ""
        ? (errorsCopy.password = "Please enter a new password...")
        : (errorsCopy.password = "");
      confPassword === ""
        ? (errorsCopy.confPassword = "Please confirm your new password...")
        : password !== confPassword
        ? (errorsCopy.confPassword = "Your password must match...")
        : (errorsCopy.confPassword = "");
      email === ""
        ? (errorsCopy.email = "Please enter your E-maIl...")
        : (errorsCopy.email = "");
      confEmail === ""
        ? (errorsCopy.confEmail = "Please confirm your E-mail...")
        : email !== confEmail
        ? (errorsCopy.confEmail = "Your E-mail must match...")
        : (errorsCopy.confEmail = "");
      this.setState({
        errors: errorsCopy
      });
    }
  };

  render() {
    const {
      email,
      password,
      errors,
      confEmail,
      confPassword,
      name
    } = this.state;
    return (
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title mb-4 mt-1 text-center pt-3 pb-4 text-primary">
                <i className="fas fa-lock" /> Sign Up
              </h1>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <TextInput
                    label="Your Name"
                    name="name"
                    value={name}
                    placeholder="name"
                    type="text"
                    onChange={this.onChange}
                    error={errors.name}
                  />
                </div>
                <div className="form-group">
                  <TextInput
                    label="Your E-mail"
                    name="email"
                    value={email}
                    placeholder="example@domain.com"
                    type="email"
                    onChange={this.onChange}
                    error={errors.email}
                  />
                </div>
                <div className="form-group">
                  <TextInput
                    label="Confirm E-mail"
                    name="confEmail"
                    value={confEmail}
                    placeholder="example@domain.com"
                    type="email"
                    onChange={this.onChange}
                    error={errors.confEmail}
                  />
                </div>
                <div className="form-group">
                  <TextInput
                    label="New Password"
                    name="password"
                    value={password}
                    placeholder="******"
                    type="password"
                    onChange={this.onChange}
                    error={errors.password}
                  />
                </div>
                <div className="form-group">
                  <TextInput
                    label="Confirm Password"
                    name="confPassword"
                    value={confPassword}
                    placeholder="******"
                    type="password"
                    onChange={this.onChange}
                    error={errors.confPassword}
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block">
                    {" "}
                    Sign up{" "}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
