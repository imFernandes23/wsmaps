import React, {useRef, useState, useEffect} from "react";
import "./Subtitles.css"
import OutSideClick from "../../hooks/OutsideClick";
import * as AiIcons from 'react-icons/ai'
import SubStreet from "./SubStreets";

function Subtitles(props){
    const Ref = useRef(null)
    const close = () => {props.setSubtitlesBox(false)}
    const [subThemes, setSubThemes] = useState([])
    const [showMore, setShowMore] = useState(true)

    OutSideClick(Ref, props.subtitlesBox, close)

    useEffect(() => {

        SubThemes(props.fullData)
            
    }, [props.fullData])


    function SubThemes(Data) {
        const arraySubClass = []
        const arraySubId = []

        Data.forEach((item) => {
            let pointer = arraySubId.findIndex((value) => value === item.subId)

            if(pointer === -1){
                arraySubClass.push({
                    name: item.subName,
                    subId: item.subId,
                    icon: item.icon,
                    color: item.color,
                    quant: 1,
                })

                arraySubId.push(item.subId)
            }else{
                arraySubClass[pointer].quant++
            }
            
        })

        
        setSubThemes(arraySubClass)
    }


    return(
        <div ref={Ref} className={props.subtitlesBox ? 'subtitles active' : 'subtitles'}>
            <h2 className='title-element'>Legendas</h2>

            <span className="btn-close" onClick={() => props.setSubtitlesBox(!props.subtitlesBox)}>
                <AiIcons.AiOutlineClose/>
            </span>

            <div className="subtitles-content">
                {SubStreet.map((item , index) => 
                    {
                     if(props.controlArrayStreets[index] === true){   
                        return( 
                        <div className="sub-element" key={index}>
                            <span className="sub-icon street" style={{'--mainColor': item.color}}></span>
                            <p>{item.name}</p>

                        </div>)
                     }
                } )}

                {showMore ? subThemes.map((item, index) => {
                    return(
                        <div className="sub-element" key={index + 7}>
                            <span style={{'--mainColor' : item.color}}>
                            <img  src={item.icon} alt='Marker Icon'/>
                            </span>
                            
                            <p className="sub-theme">{item.name}</p>
                            <p className="quant" style={{'--mainColor' : item.color}}>{item.quant}</p>
                        </div>)
                }) : (<></>)}

            </div>

        </div>
    )


}

export default Subtitles