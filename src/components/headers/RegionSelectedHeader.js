
import React, { useState } from "react";
import "./RegionSelectedHeader.css"
import * as AiIcons from 'react-icons/ai'
import RegionsDraw from "../Map/RegionsDraw";
import ButtonTemas from "../buttons/ButtonTemas";
import ToglleSelect from "../selectors/ToglleSelect";
import Configurations from "./Configuracoes/Configurations";
import Themes from './Temas/Themes'
import Search from "./Buscas/Search";



export default function RegionSelectedHeader(props){
    const [configMenu,setConfigMenu] = useState(false)
    const [themesMenu, setThemesMenu] = useState(false)
    const [searchMenu, setSearchMenu] = useState(false)
    const [toglle, setToglle] = useState(false)

    function handleSetConfig(index){
        let newArray = [...props.controlArray]
        newArray[index] = !props.controlArray[index]
        props.onChange(newArray)
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
                    searchMenu={searchMenu}
                    setSearchMenu={setSearchMenu}
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
                    setSubClassesArray={props.setSubClassesArray}
                />

                <Search
                    searchMenu={searchMenu}
                    setSearchMenu={setSearchMenu}
                    regionId={props.regionId}
                />
            
                </>
            ):(<><p> </p></>)}
        </div>
    )
}