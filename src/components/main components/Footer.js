import React,{useEffect} from 'react'
import '../../styles/footer.css'
export default function Footer() {
useEffect(() => {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
var rootElement = document.documentElement;
    function scrollToTop() {
        // Scroll to top logic
        rootElement.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
      scrollToTopBtn.addEventListener("click", scrollToTop);
}, [])
    return (
        <div style={{position:'relative',padding:'3vw',background:'lightblue'}}>
        <footer className="container">
        <div className="row">
        <img style={{width:'20vw'}} src="./images/alogo.png" alt="..."/>

        <div class="col-4">
        <div className="info">
                    <a>
                    C/O Edkits Electronics, 110, Shiv-Shakti Industrial Estate, Opposite Damodar Park, LBS Road, Ghatkopar West, Mumbai, Maharashtra - 400086.
                    </a>
                </div>
            </div>
            <div class="col">
            <div className="info">
                    <h5>Contact Now</h5>
                    <a>
                    +919619616593<br/>
                    +919137517358
                    </a>
                </div>
            </div>
            <div class="col">
            <div className="info">
                    <h5>Products</h5>
                    <a>
                    Edtecg products<br/> 
                    Higher Education products
                    </a>
                </div>
            </div>
            <div class="col">
            <div className="info">
                    <h5>Menu</h5>
                    <a>
                    Why Us<br/> 
                    Verify
                    </a>
                </div>
            </div>
        </div>
        <div className="row" >
            <h5 style={{marginLeft:'5vw',marginBottom:'2vh'}}>Connect with Us</h5>
        <div className=" col-sm-1" style={{display:'flex',width:'7vw',marginLeft:'6.5vw'}}>
            <img style={{width:'30px',height:'30px'}} src="./images/logos/facebook.png"/>
            <img  style={{width:'30px',height:'30px'}} src="./images/logos/linkedin.png"/>
                
        </div>
        </div>
        </footer>
  <button id="scrollToTopBtn">^</button>
  </div>
    )
}
