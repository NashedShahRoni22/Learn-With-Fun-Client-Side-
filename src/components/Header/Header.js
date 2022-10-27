import React, { useContext } from "react";
import logo from "../../img/logo.png";
import { AuthContext } from "../../context/AuthProvider";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import {
  MdLogout,
  MdLogin,
  MdDarkMode,
  MdOutlineDarkMode,
} from "react-icons/md";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const [theme, setTheme] = useState(
    <MdOutlineDarkMode className="text-light m-3"></MdOutlineDarkMode>
  );
  //handelTheme
  const handelTheme = () => {
    setTheme(<MdDarkMode className="text-light m-3"></MdDarkMode>);
  };
  //handel user log out
  const handelLogOut = () => {
    logOut()
      .then(() => {})
      .catch((e) => {
        console.error(e);
      });
  };
  return (
    <Navbar expand="md" className="navbar-container">
      <Container>
        <Navbar.Brand className="navlink">
          <NavLink to="/">
            <img src={logo} alt="" height="40px" />
          </NavLink>
          <span className="text-light ms-3">Learn with Fun</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <FaBars className="text-light"></FaBars>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-auto navlink">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/courses">Courses</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
            <NavLink to="/blog">Blog</NavLink>
          </Nav>

          {/* dark light logo  */}
          <div onClick={handelTheme}>{theme}</div>

          {user?.uid ? (
            <>
              <NavLink
                to="/"
                data-toggle="tooltip"
                data-placement="bottom"
                title={user?.displayName}
              >
                <img
                  src={user?.photoURL}
                  height="40px"
                  alt=""
                  className="rounded-circle"
                ></img>
              </NavLink>
              <MdLogout onClick={handelLogOut} className="text-light ms-3" />
              <span className="ms-2 text-light">Sign Out</span>
            </>
          ) : (
            <>
              <NavLink to="/login">
                <MdLogin className="text-light" />
              </NavLink>
              <span className="ms-2 text-light">Sign In</span>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
