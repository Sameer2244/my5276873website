import React,{useEffect} from 'react'
import "../../styles/navbar/navbar.css";
export default function Navbar() {
    useEffect(() => {
        window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        console.log('scrolling');
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById("flexiblenav").style.height = "4vh";
            document.getElementById("my-navbar").style.height = "9vh";
            document.getElementById("my-logo").style.width = "12vw";
            document.getElementById("my-logo").style.height = "auto";
        } else {
            document.getElementById("my-navbar").style.height = "13vh";
            document.getElementById("flexiblenav").style.height = "10vh";
            document.getElementById("my-logo").style.width = "15vw";
            document.getElementById("my-logo").style.height = "auto";
            
        }
    }
      }, []);
    return (
        <>
        <nav id="my-navbar" className="navbar navbar-custom fixed-top navbar-expand-lg navbar-light ">
            <div id="flexiblenav" className="container-fluid">
                {/* <a href="#logo" className="navbar-brand" id="title-logo-style">Eduvance</a> */}
                <img id="my-logo" src="./images/alogo.png"/>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
                <div className="collapse navbar-collapse navbar-internal" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a href="#home" id="navhome" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#products" id="navproduct" className="nav-link">Products</a>
                        </li>
                        <li className="nav-item">
                            <a href="#careers" id="navcareer" className="nav-link">Careers</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" id="navcontact" className="nav-link">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a href="#whyus" id="navwhyus" className="nav-link">Why Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
    
}
