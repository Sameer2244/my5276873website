import React from "react";
import "../../../styles/k12new.css";
export default function K12new() {
  return (
    <div className="k12-Container">
      <h2 data-aos="fade-down" className="k12-title">K-12 Edetech Products</h2>
      <div className="edetech-products">
        <img data-aos="fade-right" src="./images/logos/settings.svg" alt="..." />
        <div data-aos="fade-left" style={{display:'flex',flexDirection:'column',justifyContent:'space-around',minWidth:'350px',width:'25vw'}}>
            <div>
            <h1 className="Edetech-title">Edetech Products</h1>
            <p>
                Innovative ways to enhance teaching and learning
            </p>
            </div>
            <a style={{width:'fit-content'}} href="#">Learn more</a>
        </div>
      </div>
      <div className="edetech-products">
        <div data-aos="fade-right" style={{display:'flex',flexDirection:'column',justifyContent:'space-around',minWidth:'350px',width:'25vw'}}>
            <div>
            <h1 className="Edetech-title">Lab Setups</h1>
            <p>
            Advanced technology lab setup and atal tinkering lab setup at institutions to strengthen their foundation
            </p>
            </div>
            <a style={{width:'fit-content'}} href="#">Learn more</a>
        </div>
        <img data-aos="fade-left" src="./images/logos/lab setup.svg" alt="..." />
      </div>
      <div></div>
    </div>
  );
}
