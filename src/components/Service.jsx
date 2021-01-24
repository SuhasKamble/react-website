import React from "react";
import Navbar from "./Navbar";
import "./main.css";
import Card from "./Card";
import Common from "./Common";
import Common2 from "./Common2";
function Service() {
  return (
    <section className="service">
      <Common2 title="Services" />
      <div className="service-content">
        <div className="max-width">
          <div className="service-container">
            {/* Card Body  */}
            <Card
              title="Website Design"
              imgSrc="https://cdn.pixabay.com/photo/2017/05/19/06/22/desktop-2325627__340.jpg"
            />

            <Card
              title="Javascrip "
              imgSrc="https://cdn.pixabay.com/photo/2015/06/24/16/36/office-820390__340.jpg"
            />

            <Card
              title="React JS"
              imgSrc="https://cdn.pixabay.com/photo/2017/10/10/21/47/laptop-2838921__340.jpg"
            />

            <Card
              title="Node js"
              imgSrc="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825__340.jpg"
            />

            <Card
              title="Programming Logic"
              imgSrc="https://cdn.pixabay.com/photo/2015/05/28/14/53/ux-788002__340.jpg"
            />

            <Card
              title="Projects"
              imgSrc="https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745__340.jpg"
            />
            {/* Card Body  */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
