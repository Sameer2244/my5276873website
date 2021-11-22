import React from 'react'
import '../../styles/offeringstyles/offeringcontainer.css';
export default function UniHeader(props) {
    return (
        <>
        <h2 className="offeringheader">{props.children}</h2>
        <hr className="hrline"/>
        </>
    )
}
