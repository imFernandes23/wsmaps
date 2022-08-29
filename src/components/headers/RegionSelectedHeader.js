
import React, { useState } from "react";
import "./RegionSelectedHeader.css"
import * as AiIcons from 'react-icons/ai'
import RegionsDraw from "../Map/RegionsDraw";
import ButtonTemas from "../buttons/ButtonTemas";
import ToglleSelect from "../selectors/ToglleSelect";
import Configurations from "./Configuracoes/Configurations";



export default function RegionSelectedHeader(props){
    const [configMenu,setConfigMenu] = useState(false)
    const [configTemas, setConfigTemas] = useState(false)
    const [toglle, setToglle] = useState(false)

    function handleSetConfig(index){
        let newArray = [...props.controlArray]

        newArray[index] = !props.controlArray[index]

        props.onChange(newArray)

        setConfigTemas(false) 
    }
//remove this in future
    function handleSetConfigTheme(index){
        let newArray = [...props.controlArrayTheme]

        newArray[index] = !props.controlArrayTheme[index]

        props.onChange2(newArray)
        setConfigMenu(false) 
    }
//

    function handleSetConfigTemas(){
        setConfigTemas(!configTemas)
        setConfigMenu(false)
    }


    return(
        <div className={props.setRegion === null ? 'full-layout' : 'full-layout active'}>
            {props.setRegion !== null ? (
                <>
                <div className="region-header-title" >{props.labels[props.setRegion]}</div>

                <ToglleSelect 
                    configMenu={configMenu}
                    setConfigMenu={setConfigMenu}
                />

                <Configurations
                    configMenu={configMenu}
                    setConfigMenu={setConfigMenu}
                    controlArray={props.controlArray}
                    handleSetConfig={handleSetConfig}
                />
            
                </>
            ):(<><p> </p></>)}
        </div>
    )
}