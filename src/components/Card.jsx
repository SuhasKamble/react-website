import React from "react";
import { Link } from "react-router-dom";
import "./main.css";
function Card({ title, imgSrc }) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={imgSrc} alt="" />
      </div>
      <div className="card-body">
        <h3>{title}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nulla
          obcaecati itaque aperiam quibusdam! Delectus labore recusandae
          excepturi culpa reiciendis!
        </p>
        <Link to="/">Read More</Link>
      </div>
    </div>
  );
}

export default Card;
