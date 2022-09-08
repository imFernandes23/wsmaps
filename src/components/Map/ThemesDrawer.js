import React from "react";
import api from "../../services/api";
import { MarkerF, OverlayView } from "@react-google-maps/api";
import { useState, useEffect} from  'react'
import './ThemesDrawer.css'

function ThemesDrawer(props){
    const icon = {
        path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z',
        scale: 1.3,
        fillColor: props.element.color,
        fillOpacity: 1,
        strokeColor: '#000',
        strokeWeight: 1,
        className: 'icons-theme'
    }
    
    return(<>
        <MarkerF 
            position={props.element.coord}
            icon={icon}

                
            />
        <OverlayView position={props.element.coord} mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
            <div 
            style={{'--MainColor':props.element.color}} 
            className='marker deactive'
            >
                teste
            </div>
            
        </OverlayView>

    </>)

}




export default ThemesDrawer