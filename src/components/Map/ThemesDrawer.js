import React from "react";
import api from "../../services/api";
import { MarkerF, OverlayView } from "@react-google-maps/api";
import { useState, useEffect} from  'react'
import './ThemesDrawer.css'

function ThemesDrawer(props){
    const [isOpen, setIsOpen] = useState(false)
    let name = props.element.name
    let subName = props.element.subName

    if(name === ''){
        name = 'Sem Nome'
    }

    function handleClick(){
        setIsOpen(!isOpen)

        console.log('cliquei ' + name + subName)
    }

    return(<>
        <OverlayView position={props.element.coord} mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
        <>
            <div 
            style={{'--MainColor':props.element.color}} 
            className={isOpen ? 'marker active' : 'marker'}
            onClick={() => handleClick()}
            >
                <img className="img-icon" src={props.element.icon}/>

                {isOpen ? (<>

                        <p className="eleName">{name}</p>
                        <br/>
                        <p className="subName">{subName}</p>
                </>) : (<></>)}

            </div>
        </>    
        </OverlayView>

    </>)

}




export default ThemesDrawer