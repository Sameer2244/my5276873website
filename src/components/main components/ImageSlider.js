import React from 'react'
import '../../styles/imageslider.css';
export default function ImageSlider() {
  
  const indicatorStyle={
        backgroundColor:"white",
        width:'15px',height:'15px',
        borderRadius:'50%',margin:'0 1vw'
  }
    return (
      <div  id="home">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" style={indicatorStyle}
        data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active circlebtn" aria-current="true" aria-label="Slide 1"></button>
        <button 
         style={indicatorStyle}
         type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="circlebtn" aria-label="Slide 2"></button>
        <button 
         style={indicatorStyle}
         type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className="circlebtn" aria-label="Slide 3"></button>
         <button 
         style={indicatorStyle}
         type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" className="circlebtn" aria-label="Slide 4"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div>
              <h1>Eduvance</h1>
          <p>India's Premier Edtech and Skill Development Company in the K-12 and Higher Education Sector</p>
          
          </div>
          <img src="./images/slider/Start Screen1.png" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
            <div>
              <h1>EnablAR</h1>
              <p>State of the art AR VR coding and development platform for students</p>
            </div>
          <img src="./images/slider/EnablAR Code Landing.png" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
            <div>
              <h1>Drone Simulator </h1>
              <p>India's first drone simulator to teach physics behind drone using a gamified platform</p>  
            </div>
          <img src="./images/slider/Drone Sim Landing.png" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <div>
              <h1>Entrepedia</h1>
          <p>Platform for students to learn fundamentals of entrepreneurship by simulating their ideas</p>
        
          </div>
        <img src="./images/slider/Entrepedia Landing.png" className="d-block w-100" alt="..."/>
      </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
      </div>
      
    )
}
