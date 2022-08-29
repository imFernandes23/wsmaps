import React from "react";
import ConfigurationsData from './ConfigurationsData'
import './Configurations.css'
import * as AiIcons from 'react-icons/ai'

function Configurations(props){


    return(<div className={props.configMenu ? 'configuratios active' : 'configurations'}>
        <h2 className="title-element"> Configurações </h2>

        <form>
            <span className="btn-close" onClick={() => props.setConfigMenu(!props.configMenu)}>
                <AiIcons.AiOutlineClose/>
            </span>

            {ConfigurationsData.map((item, index) => {
                return(
                    <div className="element" key={index}>
                        <p className="ele-nome">{item.name}</p>
                        <div className="color-element" style={item.color}></div>
                        <input
                            type='checkbox'
                            checked={props.controlArray[index]}
                            onChange={() => props.handleSetConfig(index)}
                        />
                    </div>
                )
            })}


        </form>
    </div>)
}

export default Configurations