import React from "react";
import { Link } from "react-router-dom";
import banner from "../../img/banner.png";
import "./Home.css";

const Home = () => {
  return (
    <main className="home-container d-flex align-items-center justify-content-center">
      <div className="container bg-light p-5 rounded row align-items-center">
        <div className="left col-md-6">
          <h1>Learn with Fun</h1>
          <p>
            Start, switch, or advance your career with Learn with Fun,
            Professional Certificates, and degrees from world-class universities
            and companies.
          </p>
          <Link to="/courses" className="btn btn-primary">
            Explore Courses
          </Link>
        </div>
        <div className="right col-md-6">
          <img src={banner} alt="" className="img-fluid"/>
        </div>
      </div>
    </main>
  );
};

export default Home;
