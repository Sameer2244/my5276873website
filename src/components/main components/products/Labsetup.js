import React from "react";
import "../../../styles/bootCard.css";
export default function Labsetup() {
  return (
    <div className="labsetup">
        <h2>Industry Sponsored Lab Setups</h2>
        <div className="labContainer">
      <div style={{width:'20vw',padding:'2% 0',border:'0px solid black'}} className="card mcard1">
        <img src="./images/Lab/embedded.png" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Embedded Systems Lab Setup</h5>
          <p className="card-text">
          Industry sponsored labs from ARM and Cypress Semiconductors
          </p>
        </div>
          <a href="#go" className="btn btn-primary">
            Learn more
          </a>
      </div>
      <div style={{width:'20vw',padding:'2% 0',border:'0px solid black'}} className="card mcard2">
        <img  src="./images/Lab/hardwaredsp.png" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">
          PLC Lab Setup</h5>
          <p className="card-text">PLC Labs from Accelus Robotics
          </p>
        </div>
          <a href="#go" className="btn btn-primary">
            Learn more
          </a>
      </div>
    </div>
    </div>
  );
}
