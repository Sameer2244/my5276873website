import React from 'react'
import '../../../styles/offeringstyles/ktwelve.css';

export default function TechnicalHE() {
    return (
        <div className="kcontainer">
            <h2 className="kheader">Technical Higher Education</h2>

            <div className="kcontent">
                <div className="kproduct">
                    <img className="kimg" alt="..." src="/images/logos/academic.svg"/>
                    <h5>Edtech Products</h5>
                    <h6>Innovative ways to enhance teaching and learning</h6>
                    <div className="kanime">
                        <div className="kover" ></div>
                        <a className="ksm" href="#t">See More</a>
                    </div>
                </div>
                <div className="kproduct">
                    <img className="kimg" alt="..." src="/images/logos/course.svg"/>
                    <h5>Skill Development Program</h5>
                    <h6>Extensive hands-on courses with Industry aligned projects</h6>
                    <div className="kanime">
                        <div className="kover" ></div>
                        <a className="ksm" href="#t">See More</a>
                    </div>
                </div>
                <div className="kproduct">
                    <img className="kimg" alt="..." src="/images/logos/workshops.svg"/>
                    <h5>Short-term Workshops</h5>
                    <h6>30/60 Hour workshops on various platforms</h6>
                    <div className="kanime">
                        <div className="kover" ></div>
                        <a className="ksm" href="#t">See More</a>
                    </div>
                </div>
                <div className="kproduct">
                    <img className="kimg" alt="..." src="/images/logos/lab setup.svg"/>
                    <h5>Lab Setups</h5>
                    <h6>Industry sponsored hardware labs by Microchip and Cypress</h6>
                    <div className="kanime">
                        <div className="kover" ></div>
                        <a className="ksm" href="#t">See More</a>
                    </div>
                </div>
            </div>
            
        </div>
    )
}