import React from "react";
import UniHeader from "../../small components/UniHeader";
import "../../../styles/k12new.css";
import K12new from "./K12new";
import OwlCarousel from "react-owl-carousel";
import Ktwelve from "./Ktwelve";
import TechnicalHE from "./TechnicalHE";
import TechnicalHEnew from "./TechnicalHEnew";
export default function OfferingHeading() {
  const demo = {
    display:'flex',
    flexWrap:'wrap',
    position:'relative',
    zIndex:'1',
    justifyContent:'space-evenly',
    width: "75vw",
    margin: "auto",
    color: "black",
    background:'#f5f5f5'
  };
  
  return (
    <div style={{ background: "#f5f5f5", padding: "3vh 0" }}>
      <UniHeader>Our Offerings</UniHeader>
      <h2 style={{textAlign:'center',color:'#1F4180',margin:'0',padding:'0'}}>K-12 Edtech Products </h2>
      <div className="owlContainer" style={demo}>
        {/* <K12new />
        <TechnicalHEnew /> */}
          <div className="edetech-products">
            <img
              style={{ width: "300px", height: "300px" }}
              src="./images/logos/settings.svg"
              alt="..."
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                minWidth: "350px",
                width: "25vw",
              }}
            >
              <div>
                <h1 className="Edetech-title">Edtech Products</h1>
                <p  style={{textAlign:'center'}}>Innovative ways to enhance teaching and learning</p>
              </div>
              <a style={{ width: "fit-content" }} href="#">
                Learn more
              </a>
            </div>
          </div>
          <div className="edetech-products">
            <img
              style={{ width: "300px", height: "300px" }}
              src="./images/logos/lab setup.svg"
              alt="..."
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                minWidth: "350px",
                width: "25vw",
              }}
            >
              <div style={{margin:'auto'}}>
                <h1 className="Edetech-title">Lab Setups</h1>
                <p style={{textAlign:'center'}}>
                  Advanced technology lab setup and atal tinkering lab setup at
                  institutions to strengthen their foundation
                </p>
              </div>
              <a style={{ width: "fit-content" }} href="#">
                Learn more
              </a>
            </div>
          </div>
      </div>



      <h2 style={{textAlign:'center',color:'#1F4180',margin:'0',padding:'0'}}>Technical Higher Products </h2>
      <div className="owlContainer" style={demo}>
        {/* <K12new />
        <TechnicalHEnew /> */}
          <div className="edetech-products">
            
          <img
              style={{ width: "300px", height: "300px" }}
              src="./images/logos/settings.svg"
              alt="..."
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                minWidth: "350px",
                width: "25vw",
              }}
            >
              <div>
                <h1 className="Edetech-title">Edtech Products</h1>
                <p  style={{textAlign:'center'}}>Innovative ways to enhance teaching and learning</p>
              </div>
              <a style={{ width: "fit-content" }} href="#">
                Learn more
              </a>
            </div>
          </div>
          <div className="edetech-products">
            
          <img
              style={{ width: "300px", height: "300px" }}
              src="./images/logos/lab setup.svg"
              alt="..."
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                minWidth: "350px",
                width: "25vw",
              }}
            >
              <div>
                <h1 className="Edetech-title">Lab Setups</h1>
                <p  style={{textAlign:'center'}}>
                  Advanced technology lab setup and atal tinkering lab setup at
                  institutions to strengthen their foundation
                </p>
              </div>
              <a style={{ width: "fit-content" }} href="#">
                Learn more
              </a>
            </div>
          </div>
      </div>
    </div>
  );
}
