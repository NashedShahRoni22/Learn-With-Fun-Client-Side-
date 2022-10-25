import React, { useContext } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../img/logo.png";
import { AuthContext } from "../../context/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handelLogOut =()=>{
    logOut()
    .then(()=>{
    })
    .catch(e =>{
      console.error(e);
    })
  }
  return (
    <Navbar expand="md" className="navbar-container">
      <Navbar.Brand href="#home">
        <img src={logo} alt="" height="40px" />
        <span className="text-light ms-3">Learn with Fun</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto me-auto navlink">
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/">FAQ</Link>
          <Link to="/">Blog</Link>
        </Nav>

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

            <Link className="btn btn-danger ms-2" onClick={handelLogOut}>
              Log Out
            </Link>
          </>
        ) : (
          <Link className="btn btn-light ms-2" to="/login">
            Login
          </Link>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
