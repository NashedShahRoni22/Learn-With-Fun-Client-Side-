import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Main = () => {
  return (
    <section className="container">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </section>
  );
};

export default Main;
