import React from 'react'
import '../../styles/card.css';
export default function Card(props) {
    return (
        <div data-aos={props.anime} data-aos-delay={props.delay} data-aos-once="true" data-aos-duration="1500" >
        <div className="mcard-body">
            <img src={props.src} style={{width:'300px',margin:'auto',objectFit:'cover'}} alt="..."/>
            <h4 className="ctitle">{props.title}</h4>
            <div className="mcard-content">
            <p className="mcinfo">{props.children}</p>
            </div>
        </div>
        
        <div className="lmbtncover">
        {/* <div className="btnoverlay"></div> */}
        <a href="#b" className="lmbtn">Learn more</a>
        </div>
    </div>
    )
}
