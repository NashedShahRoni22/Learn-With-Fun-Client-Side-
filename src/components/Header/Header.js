import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../img/logo.png"

const Header = () => {
  return (
    <Navbar expand="md" className="navbar-container">
        <Navbar.Brand href="#home">
          <img src={logo} alt="" height="40px"/>
          <span className="text-light ms-3">Learn With Fun</span>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-auto navlink">
            <Link to="/">Home</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/">FAQ</Link>
            <Link to="/">Blog</Link>
          </Nav>
          <Link to="/">
            <img
              src="https://media1.popsugar-assets.com/files/thumbor/msjEO8oq7PWud7pFv_Cm6GR6E-U/0x1:2771x2772/fit-in/500x500/filters:format_auto-!!-:strip_icc-!!-/2020/03/30/878/n/1922398/eb11f12e5e825104ca01c1.02079643_/i/Robert-Downey-Jr.jpg"
              height="40px"
              alt=""
              className="rounded-circle"
            ></img>
          </Link>
          <Link className="btn btn-light ms-2">Login</Link>
        </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
