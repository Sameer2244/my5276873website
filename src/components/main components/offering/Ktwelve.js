import React from 'react'
import '../../../styles/offeringstyles/ktwelve.css';
export default function Ktwelve() {

    
    return (
        <div className="kcontainer">
            <h2 className="kheader">K-12</h2>

            <div className="kcontent">
                <div className="kproduct">
                    <img className="kimg" alt="..." src="/images/logos/settings.svg"/>
                    <h5>Edtech Products</h5>
                    <h6>Innovative ways to enhance teaching and learning</h6>
                    <div className="kanime">
                        <div className="kover" ></div>
                        <a className="ksm" href="#t">See More</a>
                    </div>
                </div>
                <div className="kproduct">
                    <img className="kimg" alt="..." src="/images/logos/career.svg"/>
                    <h5>Technology Leadership Program</h5>
                    <h6>12/20 Hour workshops on various platforms</h6>
                    <div className="kanime">
                        <div className="kover" ></div>
                        <a className="ksm" href="#t">See More</a>
                    </div>
                </div>
                <div className="kproduct">
                    <img className="kimg" alt="..." src="/images/logos/lan.svg"/>
                    <h5>Lab Setups</h5>
                    <h6>Advance technology lab setups to make students future ready</h6>
                    <div className="kanime">
                        <div className="kover" ></div>
                        <a className="ksm" href="#t">See More</a>
                    </div>
                </div>
            </div>
            
        </div>
    )
}