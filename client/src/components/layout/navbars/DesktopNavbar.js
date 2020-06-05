import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "../../../css/desktop-navbar.css";

const DesktopNavbar = () => {
  return (
    <>
      <Navbar
        className="position-absolute desktop-navbar w-100 slider-container"
        expand="lg"
      >
        <Navbar.Brand>
          <Link className="text-decoration-none" to="/">
            <h2 className="text-white w-100 brand mb-0 ml-5">
              SQU<i className="fas fa-heart squad-color heart"></i>D
            </h2>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link
              className="text-white mr-5 lead text-decoration-none"
              to="/howItWork"
            >
              Comment ça marche ?
            </Link>
            <Link
              className="text-white mr-5 lead text-decoration-none"
              to="/signup"
            >
              Animer un live
            </Link>
            <a
              className="text-white mr-5 lead text-decoration-none"
              href="mailto:contact@squadapp.fr"
            >
              Contact
            </a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default DesktopNavbar;
