import React from "react";
import Navbar from "./Navbar";

function Common2({ title }) {
  return (
    <div className="service-heading">
      <Navbar />
      <h1>{title}</h1>
    </div>
  );
}

export default Common2;
