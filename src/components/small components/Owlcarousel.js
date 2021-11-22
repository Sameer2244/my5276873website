import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../../styles/owl1.css';
import UniHeader from './UniHeader';
export default function Owlcarousel() {
    return (
        <div>
            <UniHeader>Our Industry Partners</UniHeader>
            <OwlCarousel className='owl-theme' responsive={false} items={5} center={true} loop margin={0}>
    <div className='item'>
        <img id="partner1" src="./images/partners/cyin2.jpg" alt="..."/>
    </div>
    <div className='item'>
        <img id="partner2" src="./images/partners/enablAR.png" alt="..."/>
    </div>
    <div className='item'>
        <img id="partner3" src="./images/partners/entrepedia.png" alt="..."/>
    </div>
    <div className='item'>
        <img id="partner4" src="./images/partners/IP5.png" alt="..."/>
    </div>
    <div className='item'>
        <img id="partner5" src="/images/partners/Microchip1.png" alt="..."/>
    </div>
</OwlCarousel>
        </div>
    )
}
