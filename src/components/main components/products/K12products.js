import React from 'react'
import '../../../styles/products/k12productstyle.css'
import UniHeader from '../../small components/UniHeader';
import NewCard from '../../small components/NewCard';
export default function K12products() {
    return (
        <div id="products" className="k12div" >
       {/* <svg className="k12background" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,96L60,117.3C120,139,240,181,360,176C480,171,600,117,720,122.7C840,128,960,192,1080,218.7C1200,245,1320,235,1380,229.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg> */}
       <UniHeader>K-12 Edtech Products</UniHeader>
       <div className="k12product-container">
            <NewCard anime="fade-up" delay="10" className="k12products" src="./images/cards/EnablAR Code.png">EnablarAR
            </NewCard>
            <NewCard anime="fade-up" delay="100" className="k12products" src="./images/cards/Drone Labs.png">Drone Simulator
            </NewCard>
            <NewCard anime="fade-up" delay="200" className="k12products" src="./images/cards/AI tool.png" >EduvanceAI
            </NewCard>
            {/* <NewCard anime="fade-up" delay="300" className="k12products" src="./images/cards/AI tool.png">Entrepedia
            </NewCard> */}
        </div>
        <div className="see-more">
        <a href="#">See more..</a>
        </div>
        </div>
    )
}
