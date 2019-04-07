import React from "react";

import { Link } from "react-router-dom";
import logo from "../../sources/logo2.png";

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img
              src={logo}
              alt="logo"
              style={{ height: "50px", margin: "5px" }}
            />
          </Link>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="fas fa-home" />
                  {"  "}
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  <i className="fas fa-question" />
                  {"  "}
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contactus" className="nav-link">
                  <i className="fas fa-headset" />
                  {"  "}
                  Contact us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  <i className="fas fa-sign-in-alt" />
                  {"  "}
                  Sign in
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signup" className="nav-link">
                  <i className="fas fa-user-plus" />
                  {"  "}
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
