import React from 'react'
import Card from '../../small components/Card';
import '../../../styles/products/k12productstyle.css'
import UniHeader from '../../small components/UniHeader';
import NewCard from '../../small components/NewCard';
export default function HEEproducts() {
    return (
        <div>
        <UniHeader>Higher Education Edtech Products</UniHeader>
        <div className="k12product-container">
            <NewCard anime="fade-up" delay="400"  className="k12products" src="./images/cards/AI lab.png" >AI Fundamental Lab
            </NewCard>
            <NewCard anime="fade-up" delay="300"  className="k12products" src="./images/cards/ARVR lab.png" >AR VR Lab
            </NewCard>
            <NewCard  anime="fade-up" delay="200"  className="k12products" src="./images/cards/ARVR lab.png" >IoT Lab
            </NewCard>
            <NewCard  anime="fade-up" delay="100"  className="k12products" src="./images/cards/Drone Labs.png">Drone Lab
            </NewCard>
            {/* <Card  anime="fade-up" delay="10"  className="k12products" src="./images/cards/Drone Labs.png" title="Entrepreneur Development Center">Development center and ecosystem for students to learn the foundations of entrepreneurship. Labs contain software licenses, mentoring sessions and case studies for students to simulate their own startups.
            </Card> */}
        </div>
        </div>
    )
}