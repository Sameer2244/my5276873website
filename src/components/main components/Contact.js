import React from "react";
import MyMap from "../MyMap";
import "../../styles/contact.css";

export default function Contact(props) {
  return (
    <div className="contact-container">
      <div className="contact-inputs">
        <form>
          <h6>Name</h6>
          <input placeholder="Enter your name" />
          <h6>Email ID</h6>
          <input placeholder="Enter your email-id" />
          <h6>Contact number</h6>
          <input placeholder="Enter your phone number" />
          <h6>Message</h6>
          <textarea
            className="message"
            placeholder="Enter your message here..."
          ></textarea>
          <button type="button" class="btn ">
            Submit
          </button>
        </form>
      </div>
      <div className="right-side">
        <h1 style={{ margin: "0 1vw", color: "rgb(13, 13, 77)" }}>
          Contact Us
        </h1>
        <div className="contact-addresses">
          <div>
            <p>
              Mumbai Center (Head Office) Location: C/O 110, Shiv-Shakti
              Industrial Estate, Opposite Damodar Park, LBS Road,Ghatkopar West,
              Mumbai, Maharashtra - 400086, India
            </p>
          </div>
          <div>
            <p>
              Phone: <br />
              +919619616593/ +919137517358
            </p>
          </div>
          <div>
            <p>
              Contact email-id:
              <br />
              contact@eduvance.in
            </p>
          </div>
        </div>
        <MyMap style={{width:'350px'}}/>
      </div>
    </div>
  );
}

