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
    <div style={{ position: "relative",fontSize:'0.95rem',background:'#fff'}}>
      <footer  className=" myContainer">
        <div className="row">
          <div style={{marginTop:'-0.1vw'}} className="info col-sm-12 col-md-3 col-xs-12">
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
          <div style={{width:'20vw',marginLeft:'1vw',minWidth:'220px'}}>
            <p style={{fontWeight:'550',color:'#1F4180'}}>
            India's Premier Edtech and Skill Development Company in the K-12 and Higher Education Sector
            </p>
            <h5 style={{ marginBottom: "2vh" ,color:'black',fontSize:"1rem",fontWeight:'550'}}>
              Connect with Us
            </h5>
            <div className="symbols">
              <img
                style={{ width: "30px", height: "30px",marginRight:'20px' }}
                src="./images/logos/facebook.png"
              />
              <img
                style={{ width: "30px", height: "30px",marginRight:'20px' }}
                src="./images/logos/linkedin.png"
              />
              <img
                style={{ width: "30px", height: "30px" }}
                src="./images/logos/instagram.png"
              />
            </div>
          </div>
          </div>
          <div style={{marginLeft:'5vw',marginRight:'2vw'}} className="info address col-sm-5 col-md-4 col-xs-12">
            <h5 className="h5">Contact Now</h5>
            <div style={{display:'flex',marginBottom:'1.5vh'}}>
            <img className="my-img" src="./images/logos/location.png"/>
              <div>
              C/O Edkits Electronics, 110, Shiv-Shakti Industrial Estate,
              Opposite Damodar Park, LBS Road, Ghatkopar West, Mumbai,
              Maharashtra - 400086.
              </div>
            </div>
            <a>
              <img className="my-img" alt="..." src="./images/logos/phone-call.png"/>
              +919619616593 /
              +919137517358
            </a>
            <br/>
            <div style={{marginTop:'1.5vh'}}>
            <a>
              <img className="my-img" src="./images/logos/email.png" alt="..."/>
              contact@eduvance.com
            </a>
            </div>
          </div>
          <div style={{width:'17vw',marginRight:'1.5vw'}} className="info col-sm-2 col-md-3 col-xs-12">
            <h5 style={{marginLeft:'1vw',marginBottom:'2vh'}} className="h5">Products</h5>
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
          <p style={{textAlign:'center',fontSize:'0.9rem'}}>© 2021 Vanmat Technologies Pvt. Ltd. All rights reserved.</p>
        </div>
      </footer>
      <button id="scrollToTopBtn">^</button>
    </div>
  );
}
