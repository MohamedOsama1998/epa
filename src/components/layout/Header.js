import React from "react";
import Login from "../accountMan/Login";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
        <div className="container">
          <div className="navbar-brand" />
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-link">
                <Link to="/" className="nav-link">
                  <i className="fas fa-home" />
                  {"  "}
                  Home
                </Link>
              </li>
              <li className="nav-link">
                <Link to="/about" className="nav-link">
                  <i className="fas fa-question" />
                  {"  "}
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Login />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
