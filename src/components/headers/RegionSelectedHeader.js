import React from "react";
import "./RegionSelectedHeader.css"

export default function RegionSelectedHeader(props){

    return(
        <div className={props.setRegion === null ? 'full-layout' : 'full-layout active'}>
            {props.setRegion !== null ? (
                <>
                <div className="region-header-title">{props.labels[props.setRegion]}</div>
                </>
            ):(<><p> </p></>)}
        </div>
    )
}