import React from 'react'
import "../../styles/workshop.css";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
export default function Workshop() {
    return (
        <div className="workshop-container">
            <h2>Higher Education Short-term Workshops</h2>
            <OwlCarousel className='owl-theme' responsive={false} items={6} loop margin={0}>
                <div className="card">
                    <img src="./images/workshop/ard.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Internet of Things using Arduino Platform</h5>
                    </div>
                    <a href="#go" className="btn btn-primary">
                        Learn more
                    </a>
                </div>
                <div className="card">
                    <img src="./images/workshop/iot.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Internet of things using ARM</h5>
                    </div>
                    <a href="#go" className="btn btn-primary">
                        Learn more
                    </a>
                </div>
                <div className="card">
                    <img src="./images/workshop/pcb.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Electronics System Design and Manufacturing</h5>
                    </div>
                    <a href="#go" className="btn btn-primary">
                        Learn more
                    </a>
                </div>
                <div className="card">
                    <img src="./images/workshop/python.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Python Programming</h5>
                    </div>
                    <a href="#go" className="btn btn-primary">
                        Learn more
                    </a>
                </div>
                <div className="card">
                    <img src="./images/workshop/psoc.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Cypress University Alliance Certificate Course on IoT</h5>
                    </div>
                    <a href="#go" className="btn btn-primary">
                        Learn more
                    </a>
                </div>
                <div className="card">
                    <img src="./images/workshop/NEW_FRDM.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Certificate course on ARM mbed Platform</h5>
                    </div>
                    <a href="#go" className="btn btn-primary">
                        Learn more
                    </a>
                </div>
            </OwlCarousel>

        </div>
    )
}
