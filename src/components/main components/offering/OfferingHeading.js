import React from 'react'
import UniHeader from '../../small components/UniHeader';
import K12new from './K12new';
import Ktwelve from "./Ktwelve";
import TechnicalHE from './TechnicalHE';
import TechnicalHEnew from './TechnicalHEnew';
export default function OfferingHeading() {
    const demo={
        // display:'flex',
        // flexWrap:'wrap',
        // position:'relative',
        // zIndex:'1',
        // justifyContent:'space-around'
      }
    return (
        <div style={{background:'#F7F7F7',padding:'15vh 0'}}>
            <UniHeader>Our Offerings</UniHeader>
            <div style={demo}>
                <K12new/>
                <TechnicalHEnew/>
                 </div>
        </div>
    )
}
