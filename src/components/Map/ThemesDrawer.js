import React from "react";
import api from "../../services/api";
import { MarkerF, OverlayView } from "@react-google-maps/api";
import { useState, useEffect} from  'react'
import './ThemesDrawer.css'

function ThemesDrawer(props){
    return(<>
        <MarkerF position={props.element.coord}/>
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