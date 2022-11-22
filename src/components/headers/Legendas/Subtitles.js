import React, {useRef, useState} from "react";
import "./Subtitles.css"
import OutSideClick from "../../hooks/OutsideClick";
import * as AiIcons from 'react-icons/ai'
import SubStreet from "./SubStreets";

function Subtitles(props){
    const Ref = useRef(null)
    const close = () => {props.setSubtitlesBox(false)}

    OutSideClick(Ref, props.subtitlesBox, close)

    return(
        <div ref={Ref} className={props.subtitlesBox ? 'subtitles active' : 'subtitles'}>
            <h2 className='title-element'>Legendas</h2>

            <span className="btn-close" onClick={() => props.setSubtitlesBox(!props.subtitlesBox)}>
                <AiIcons.AiOutlineClose/>
            </span>

            <div className="subtitles-content">
                {SubStreet.map((item , index) => {
                     if(props.controlArray[index] === true){   
                    return( 
                        <div className="sub-element">
                            <span className="sub-icon street" style={{'--mainColor': item.color}}></span>
                            <p>{item.name}</p>

                        </div>)
                     }
                })}



            </div>

        </div>
    )


}

export default Subtitles