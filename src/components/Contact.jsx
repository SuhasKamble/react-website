import React from "react";
import Common2 from "./Common2";

function Contact() {
  return (
    <section className="contact">
      <Common2 title="Contact Us" />
      <div className="contact-container">
        <div className="max-width">
          <h2>Fill the Contact Form</h2>
          <form className="add-form">
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <input type="text" placeholder="Enter Name..." />
            </div>
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="Enter Email..." />
            </div>

            <div className="form-control">
              <label htmlFor="phone">Phone</label>
              <input type="number" placeholder="Enter Phone number..." />
            </div>

            <div className="form-control">
              <label htmlFor="name">Message</label>
              <textarea name="msg" id="msg" cols="30" rows="10"></textarea>
            </div>
            <div className="form-control">
              <button type="submit" className="submit-btn ">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
