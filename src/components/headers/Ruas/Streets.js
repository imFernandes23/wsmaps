import React, {useEffect} from "react";
import StreetsData from './StreetsData'
import './Streets.css'
import * as AiIcons from 'react-icons/ai'


function Streets(props){



    return(<div className={props.streetsMenu ? 'streets active' : 'streets'} >
        <h2 className="title-element"> Ruas </h2>

            <span className="btn-close" onClick={() => props.setStreetsMenu(!props.streetsMenu)}>
                <AiIcons.AiOutlineClose/>
            </span>

            <div className="list-itens">
            {StreetsData.map((item, index) => {
                return(
                    <div className="element" key={index}>
                        <p className="ele-nome">{item.name}</p>
                        <div className="color-element" style={item.color}></div>
                        <input
                            type='checkbox'
                            checked={props.controlArray[index]}
                            onChange={() => props.handleSetStreets(index)}
                        />
                    </div>
                )
            })}
            </div>

    </div>)
}

export default Streets