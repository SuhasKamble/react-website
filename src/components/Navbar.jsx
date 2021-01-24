import React from "react";
import { NavLink } from "react-router-dom";
import "./main.css";
function Navbar() {
  const navbarToggle = () => {
    document.querySelector(".navLinks").classList.toggle("show");
    document.querySelector(".fa-bars").classList.toggle("fa-times");
  };

  return (
    <header className="">
      <div className="max-width">
        <div className="navbar">
          <div className="logo">
            <img
              src="https://websitedemos.net/mountain/wp-content/uploads/sites/571/2020/04/logo1.png"
              alt=""
            />
          </div>
          <ul className="navLinks">
            <li>
              <NavLink className="links" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="links" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="links" to="/service">
                Service
              </NavLink>
            </li>
            <li>
              <NavLink className="links" to="/contact">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink className="links-btn" to="/service">
                Take Action
              </NavLink>
            </li>
          </ul>
          <div className="burger" onClick={navbarToggle}>
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
