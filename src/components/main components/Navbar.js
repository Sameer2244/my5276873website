import React,{useEffect} from 'react'
import {Link} from 'react-router-dom';
import "../../styles/navbar/navbar.css";
export default function Navbar() {
    useEffect(() => {
        window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        console.log('scrolling');
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById("flexiblenav").style.height = "4vh";
            document.getElementById("my-navbar").style.height = "9vh";
            document.getElementById("my-logo").style.width = "150px";
            document.getElementById("my-logo").style.height = "auto";
        } else {
            document.getElementById("my-navbar").style.height = "11vh";
            document.getElementById("flexiblenav").style.height = "10vh";
            document.getElementById("my-logo").style.width = "250px";
            document.getElementById("my-logo").style.height = "auto";
            
        }
    }
      }, []);
    return (
        <>
        <nav id="my-navbar" className="navbar navbar-custom fixed-top navbar-expand-lg navbar-light ">
            <div id="flexiblenav" className="container-fluid">
                {/* <a href="#logo" className="navbar-brand" id="title-logo-style">Eduvance</a> */}
                <Link to="/">
                <img id="my-logo" src="./images/alogo.png"/>
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
                <div className="collapse navbar-collapse navbar-internal" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link style={{textDecoration:'none'}} to="/"><a  id="navhome" className="nav-link">Home</a></Link>
                        </li>
                        <li className="nav-item">
                            <a href="#products" id="navproduct" className="nav-link">Products</a>
                        </li>
                        <li className="nav-item">
                            <a href="#careers" id="navcareer" className="nav-link">Careers</a>
                        </li>
                        <li className="nav-item">
                            <a href="#whyus" id="navwhyus" className="nav-link">Why Us</a>
                        </li>
                        <li className="nav-item">
                            <Link style={{textDecoration:'none'}} to="contact"><p id="navcontact" className="nav-link">Contact</p></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
    
}
