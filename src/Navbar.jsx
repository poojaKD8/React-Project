import React from "react";
import "./Navbar.css";
import "./Home.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* Header */}
      <div className="container-fluid d-md-flex d-none pe-5" id="header">
        <p className="ms-auto mx-3 my-2">
          <img src="images/f1.gif" className="img-fluid" alt="" />
          <b className="text-secondary fw-normal"> India</b>
        </p>
        <p className="mx-3 my-2">
          <img src="images/f2.png" className="img-fluid" alt="" />
          <b className="text-secondary fw-normal"> UK</b>
        </p>
        <p className="mx-3 my-2">
          <i className="bi bi-telephone-fill text-danger"></i>
          <b className="text-secondary fw-normal"> HR +91 81138 62000</b>
        </p>
        <p className="mx-3 my-2">
          <i className="bi bi-telephone-fill text-danger"></i>
          <b className="text-secondary fw-normal"> Sales +91 81138 69000</b>
        </p>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-light px-5 py-3">
        <NavLink to="/" className="navbar-brand ms-5">
          <img src="images/logo.png" className="img-fluid" alt="" />
        </NavLink>

        <div className="navbar-collapse collapse d-none d-lg-block" id="nav_id">
          <ul className="navbar-nav m-lg-auto">
            <li className="nav-item mx-2">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li
              className="nav-item mx-2 dropdown mt-2"
              style={{ cursor: "pointer", color: "#575757" }}
            >
              <p className="dropdown-toggle" data-bs-toggle="dropdown">
                About Us
              </p>
              <ul className="dropdown-menu">
                <li className="dropdown-item">Who we are ?</li>
                <li className="dropdown-item">Career</li>
                <li className="dropdown-item">How we work</li>
                <li className="dropdown-item">TestBytes - Testing Partner</li>
              </ul>
            </li>
            <li
              className="nav-item mx-2 dropdown mt-2"
              style={{ cursor: "pointer", color: "#575757" }}
            >
              <p className="dropdown-toggle" data-bs-toggle="dropdown">
                Service
              </p>
              <ul className="dropdown-menu" style={{ width: "600px" }}>
                <ul className="dropdown-item list_1">
                  <li className="fw-bold">Industries</li>
                  <li> Automotive Industry</li>
                  <li>Ecommerce App Development</li>
                  <li>Banking and Finance App Development</li>
                  <li>MVP App Development</li>
                  <li className="fw-bold mt-3">Education</li>
                  <li>Education App Development</li>
                  <li>Learning Management System</li>
                </ul>
                <ul className="dropdown-item list_1">
                  <li className="fw-bold">Solutions</li>
                  <li>Enterprise Mobile App Development</li>
                  <li>Tracking and Delivery</li>
                  <li>Marketplace App Development</li>
                  <li>IoT App Development</li>
                  <li>On Demand Services App Development</li>
                  <li>Donation App Development</li>
                  <li>Redbytes Chatbot</li>
                </ul>
              </ul>
            </li>
            <li className="nav-item mx-2">
              <NavLink to="/portfolio" className="nav-link">
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink to="/ourapp" className="nav-link">
                Our App
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink to="/pricing" className="nav-link">
                Pricing
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink to="/contact" className="nav-link">
                Contact Us
              </NavLink>
            </li>
            <button className="btn btn_2 px-4">App Cost Calculator</button>
          </ul>
        </div>
        <button
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          className="ms-4 d-lg-none d-block"
          style={{ border: "none", backgroundColor: "transparent" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="offcanvas offcanvas-end bg-light d-lg-none d-block"
          tabindex="-1"
          id="offcanvasExample"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel"></h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body text-center">
            <p className="fw-bold">SERVICES</p>
            <p className="fw-bold">PORTFOLIO</p>
            <p className="fw-bold">PRICING</p>
            <p className="fw-bold">INDUSTRY INSIGHTS</p>
            <p className="fw-bold">CASE STUDIES</p>
            <p className="fw-bold">HOW WE WORK</p>
            <p className="fw-bold">OUR APP</p>
            <p className="fw-bold">OUR BLOGS</p>
            <p className="fw-bold">OUR CAREERS</p>
            <p className="fw-bold">ABOUT US</p>

            <button className="btn btn_2">DEVELOPER RATE CALCULATOR</button>
            <button className="btn btn_1 my-2">APP COST CALCULATOR</button>

            <div className="d-flex justify-content-around align-items-center mt-3 w-75 m-auto">
              <div>
                <i class="bi bi-envelope-fill text-danger"></i>
                <p>Mail</p>
              </div>
              <div>
                <i class="bi bi-telephone-fill text-danger"></i>
                <p>Call Us</p>
              </div>
              <div>
                <i class="bi bi-person-fill text-danger"></i>
                <p>Call HR</p>
              </div>
              <div>
                <i class="bi bi-whatsapp text-danger"></i>
                <p>Call Us</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
