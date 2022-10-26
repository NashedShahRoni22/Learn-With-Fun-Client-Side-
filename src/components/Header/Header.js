import React, { useContext } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../img/logo.png";
import { AuthContext } from "../../context/AuthProvider";
import { Container } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import { MdLogout, MdLogin, MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { useState } from "react";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const [theme, setTheme] = useState(<MdOutlineDarkMode className="text-light me-3"></MdOutlineDarkMode>)
  //handelTheme
  const handelTheme =()=>{
    setTheme(<MdDarkMode className="text-light me-3"></MdDarkMode>)
  }
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
        <Navbar.Brand>
          <Link to='/'><img src={logo} alt="" height="40px" /></Link>
          <span className="text-light ms-3">Learn with Fun</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <FaBars className="text-light"></FaBars>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-auto navlink">
            <Link to="/">Home</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/blog">Blog</Link>
          </Nav>

          {/* dark light logo  */}
          <div onClick={handelTheme}>
            {theme}
          </div>

          {user?.uid ? (
            <>
              <Link
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
              </Link>
              <MdLogout
                onClick={handelLogOut}
                className="text-light ms-3"
              />
            </>
          ) : (
            <Link to="/login">
              <MdLogin className="text-light" />
            </Link>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
