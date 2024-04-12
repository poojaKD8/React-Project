import React from "react";
import { Heading } from "./Heading";
import "./Home.css";
import Services1 from "./Services1";
import Icon from "./Icon";
import Client from "./Client";
import Test from "./Test";
import Test1 from "./Test1";
import Portfolio from "./Portfolio";
import AppCost from "./AppCost";
import Staffing from "./Staffing";
import Development from "./Development";
// import Animation from "./Animation";
import { useNavigate } from "react-router-dom";

const Home = () => {
  var nav = useNavigate();
  const GoOurApp = () => {
    nav("/ourapp");
  };
  return (
    <>
      <div className="row m-0 p-0">
        {/* heading */}
        <Heading />
        {/* image */}
        <div className="col-12 m-0 p-0">
          <img src="images/backgroundimage.png" className="img-fluid" alt="" />
        </div>
        {/* <Animation/> */}
        {/* services */}
        <Services1 />
        {/* icons */}
        <Icon />
        {/* clients */}
        <Client />
        {/* Tests */}
        <Test />
        <Test1 />
        {/* Portfolio */}
        <Portfolio />
        {/* App cost */}
        <AppCost />
        {/* Recuring and Staffing */}
        <Staffing />
        {/* Mobile App Development */}
        <Development />
        <div className="col-12 text-center p-5 mt-5">
          <h1 className="fw-medium mt-5">
            <b className="fw-bold">Get</b> a Cost Estimate for Your App
          </h1>
          <button className="btn btn_1" onClick={() => GoOurApp()}>
            Let's Work On Your Idea <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;

