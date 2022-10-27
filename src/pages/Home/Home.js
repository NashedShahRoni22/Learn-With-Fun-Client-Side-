import React from "react";
import { Link } from "react-router-dom";
import banner from "../../img/banner-img.png";

const Home = () => {
  return (
    <main className="home-container d-flex align-items-center justify-content-center">
      <div className="container p-5 rounded row align-items-center">
        <div className="left col-md-6 text-light">
          <h1 className="fw-bold display-1">Learn with Fun</h1>
          <h4 className="my-5">
            Start, switch, or advance your career with Learn with Fun,
            Professional Certificates, and degrees from world-class universities
            and companies.
          </h4>
          <Link to="/courses" className="home-btn">
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
