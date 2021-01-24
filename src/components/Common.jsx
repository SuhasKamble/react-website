import React from "react";
import Navbar from "./Navbar";
import "./main.css";
import { NavLink } from "react-router-dom";
function Common({ title }) {
  return (
    <section className="home">
      <div className="home-overlay"></div>
      <div className="home-content">
        <Navbar />

        <div className="home-text">
          <h3>multi-purpose template</h3>
          <h1>{title}</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="btn-container">
            <NavLink to="/service" className="btn-service">
              Services
            </NavLink>
            <NavLink to="/about" className="btn-about">
              About us
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Common;
