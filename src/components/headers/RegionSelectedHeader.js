
import React, { useState } from "react";
import "./RegionSelectedHeader.css"
import * as AiIcons from 'react-icons/ai'
import RegionsDraw from "../Map/RegionsDraw";
import ButtonTemas from "../buttons/ButtonTemas";
import ToglleSelect from "../selectors/ToglleSelect";
import Configurations from "./Configuracoes/Configurations";
import Themes from './Temas/Themes'



export default function RegionSelectedHeader(props){
    const [configMenu,setConfigMenu] = useState(false)
    const [themesMenu, setThemesMenu] = useState(false)
    const [toglle, setToglle] = useState(false)

    function handleSetConfig(index){
        let newArray = [...props.controlArray]

        newArray[index] = !props.controlArray[index]

        props.onChange(newArray)


    }

    function handleSetConfigTemas(){
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
                    themesMens={themesMenu}
                    setThemesMenu={setThemesMenu}
                />

                <Configurations
                    configMenu={configMenu}
                    setConfigMenu={setConfigMenu}
                    controlArray={props.controlArray}
                    handleSetConfig={handleSetConfig}
                />

                <Themes
                    themesMenu={themesMenu}
                    setThemesMenu={setThemesMenu}
                />
            
                </>
            ):(<><p> </p></>)}
        </div>
    )
}