import React from 'react'
import '../../styles/newcard.css';
export default function NewCard(props) {
    return (
        <div data-aos={props.anime} data-aos-once="true" data-aos-delay={props.delay}>
            <div class="new-card"><img src={props.src}/>
            <div class="info">
            <h1>{props.children}</h1>
            </div>
        </div>
            <p className="new-card-btn">Read More</p>
        </div>
    )
}
