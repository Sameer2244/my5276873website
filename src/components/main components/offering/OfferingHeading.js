import React from 'react'
import '../../../styles/offeringstyles/offeringcontainer.css';
import UniHeader from '../../small components/UniHeader';
import Ktwelve from "./Ktwelve";
import TechnicalHE from './TechnicalHE';
export default function OfferingHeading() {
    const demo={
        display:'flex',
        flexWrap:'wrap',
        position:'relative',
        zIndex:'1',
        justifyContent:'space-around'
      }
    return (
        <div style={{background:'#F7F7F7',padding:'15vh 0'}}>
            <UniHeader>Our Offerings</UniHeader>
            <div style={demo}>
                <Ktwelve/>
                <TechnicalHE/>
                 </div>
        </div>
    )
}
