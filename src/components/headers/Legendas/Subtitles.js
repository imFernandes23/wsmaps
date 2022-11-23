import React, {useRef, useState, useEffect} from "react";
import "./Subtitles.css"
import OutSideClick from "../../hooks/OutsideClick";
import * as AiIcons from 'react-icons/ai'
import SubStreet from "./SubStreets";

function Subtitles(props){
    const Ref = useRef(null)
    const close = () => {props.setSubtitlesBox(false)}
    const [subThemes, setSubThemes] = useState([])
    const [showMore, setShowMore] = useState(false)

    OutSideClick(Ref, props.subtitlesBox, close)

    useEffect(() => {

        if(props.fullData.length > 0){
            SubThemes(props.fullData, props.subClassesArray)
            setShowMore(true)
        }else{
            setShowMore(false)
        }
            
    }, [props.fullData, props.subClassesArray])

    function SubThemes(Data, SubClasses) {
        const arraySubClass = new Array(SubClasses.length).fill(null)
        let search = true
        

        Data.forEach((item, index) => {
            if(search === true){

                SubClasses.forEach((element, index) => {
                    if(item.subId === element && arraySubClass[index] === null){
                                            
                        arraySubClass[index] = ({
                            name: item.subName,
                            quant: 0,
                            icon: item.icon,
                            id: item.subId,
                            color: item.color,
                        })

                    }else if(item.subId === element && arraySubClass[index] !== null){
                        arraySubClass[index].quant++
                    }
                })
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
                     if(props.controlArray[index] === true){   
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