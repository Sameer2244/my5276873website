import React, { useEffect } from "react";
import "../../styles/footer.css";
export default function Footer() {
  useEffect(() => {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    var rootElement = document.documentElement;
    function scrollToTop() {
      // Scroll to top logic
      rootElement.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    scrollToTopBtn.addEventListener("click", scrollToTop);
  }, []);
  return (
    <div style={{ position: "relative",fontSize:'0.95rem',background:'#4DA6FF'}}>
      <footer  className="container myContainer">
        <div className="row">
          <div className="info col-sm-12 col-md-3 col-xs-12">
          <img
            style={{
              width: "auto",
              height: "10vh",
              minHeight: "80px",
              minWidth: "150px",
            }}
            src="./images/alogo.png"
            alt="..."
          />
          <div >
            <h5 style={{ marginLeft: "3vw", marginBottom: "2vh" }}>
              Connect with Us
            </h5>
            <div className="symbols">
              <img
                style={{ width: "30px", height: "30px" }}
                src="./images/logos/facebook.png"
              />
              <img
                style={{ width: "30px", height: "30px" }}
                src="./images/logos/linkedin.png"
              />
            </div>
          </div>
          </div>
          <div className="info address col-sm-5 col-md-4 col-xs-12">
            <h5 className="h5">Contact Now</h5>
            <a>
              C/O Edkits Electronics, 110, Shiv-Shakti Industrial Estate,
              Opposite Damodar Park, LBS Road, Ghatkopar West, Mumbai,
              Maharashtra - 400086.
              <br/>
              +919619616593
              <br />
              +919137517358
              <br/>
              contact@eduvance.com
            </a>
          </div>
          <div className="info col-sm-2 col-md-3 col-xs-12">
            <h5 style={{marginLeft:'1vw'}} className="h5">Products</h5>
            <ul>
                <li><a>EDTech Products</a></li>
                <li><a>Higher Education Edtech Products</a></li>
            </ul>
          </div>
          <div className="info menu col-sm-2 col-md-2 col-xs-12">
            <h5 className="h5">Menu</h5>
            <a>
              Why Us
              <br />
              Verify
            </a>
          </div>
          
        </div>
      </footer>
      <button id="scrollToTopBtn">^</button>
    </div>
  );
}
