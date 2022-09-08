import React from "react";
import api from "../../services/api";
import { MarkerF, OverlayView } from "@react-google-maps/api";
import { useState, useEffect} from  'react'
import './ThemesDrawer.css'

function ThemesDrawer(props){
    
    return(<>
        <OverlayView position={props.element.coord} mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
        <>
            <div 
            style={{'--MainColor':props.element.color}} 
            className='marker deactive'
            >
                <img className="img-icon" src={props.element.icon}/>
            </div>
            <div style={{'--MainColor':props.element.color}} className="pointer" ></div>
        </>    
        </OverlayView>

    </>)

}




export default ThemesDrawer