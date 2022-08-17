import React from "react";
import * as AiIcons from 'react-icons/ai'
import "./ButtonRedo.css"

export default function ButtonRedo(props){
    return(
        <button className="button-redo" onClick={() => props.onClick()}>
            <AiIcons.AiOutlineRedo/>
        </button>
    )
}