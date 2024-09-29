import React from "react";
import "./Main.css";
// import About from "./About";
// import Contact from "./Contact";
// import Services from "./Services";
// import Login from "./Login";
import { Link } from "react-router-dom";

function Main() {
  return (
    <>
      <div className="navbar">
        <h1>Navbar</h1>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/services">
            <li>Services</li>
          </Link>
          <Link to="/login">
            <li>Login</li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Main;
