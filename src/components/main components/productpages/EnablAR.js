import React from "react";
import "../../../styles/productpages/enablar.css";
import UniHeader from "../../small components/UniHeader";
import Grid from '@mui/material/Grid';
import ProductCards from "./ProductCards";

export default function EnablAR() {
  return (
    <div>
      <div className="enblAR-container">
        <h1>EnablAR AR VR DEVELOPMENT PLATFORM</h1>
      </div>
      <div className="lower-enablar-content">
        <img src="./images/products/enablar.png" />
        <div className="enablarfeature">
          <h2>AR VR application development using EnablAR</h2>
          <p>
            EnablAR is an AR-VR coding and development platform, for students to
            develop their coding and design skills. Accompanied with a
            step-by-step learning interface, students can design their AR-VR
            games and applications to develop future-ready skills.
          </p>
          <UniHeader>Features</UniHeader>
          <div className="enablar-feature-item">
            <img
              style={{ paddingRight: "2vw" }}
              src="./images/products/BlockCoding.jpg"
            />
            <div className="info-feature">
              <h4>Give your students a platform to learn AR, VR and coding</h4>
              <p>
                EnablAR helps stidents to develop their own AR,VR games and
                applications by coding then in a simple and user friendly way.
              </p>
            </div>
          </div>
          <div className="enablar-feature-item">
            <div className="info-feature">
              <h4>Give your students a platform to learn AR, VR and coding</h4>
              <p>
                EnablAR helps stidents to develop their own AR,VR games and
                applications by coding then in a simple and user friendly way.
              </p>
            </div>
            <img
              style={{ paddingLeft: "2vw" }}
              src="./images/products/Desktop Applications.jpg"
            />
          </div>
        </div>
      </div>

      <div className="other-features">
        <div className="my-header">
          <h2>Intuitive Interface</h2>
          <p>
            Simple user friendly interface to learn coding and AR, VR from basic
            coding to advance javascript coding.
          </p>
        </div>

        <div className="cards-section">
          <Grid container>
              <Grid item md={4} xs={12} sm={6}>
                <ProductCards src="./images/products/BlockCoding.jpg" title="Block Coding"/>
              </Grid>
              <Grid item md={4} xs={12} sm={6}>
              <ProductCards src="./images/products/Intermediate.jpg" title="Designing"/>
              </Grid>
              <Grid item md={4} xs={12} sm={6}>
              <ProductCards src="./images/products/Advanced.jpg" title="Javascript Coding"/>
              </Grid>
          </Grid>
        </div>
      </div>
      <div className="my-header">
          <h2>Customization</h2>
          <p>
          Students can enjoy customization by adding their own 3D model, code their own logic and deploy on device of their choice( 100M+ supported device).
          </p>
        </div>
        <div className="cards-section">
          <Grid container>
              <Grid item md={4} xs={12} sm={6}>
                <ProductCards src="./images/products/Custom 3D model.jpg" title="Custom 3D Model"/>
              </Grid>
              <Grid item md={4} xs={12} sm={6}>
              <ProductCards src="./images/products/Custom Game.jpg" title="Custom Game"/>
              </Grid>
              <Grid item md={4} xs={12} sm={6}>
              <ProductCards src="./images/products/Multiple Platforms.jpg" title="Devices"/>
              </Grid>
          </Grid>
        </div>
    </div>
  );
}
