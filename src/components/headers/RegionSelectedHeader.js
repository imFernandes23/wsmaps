
import React, { useState, useEffect, useSyncExternalStore } from "react";
import "./RegionSelectedHeader.css"
import ToglleSelect from "../selectors/ToglleSelect";
import Undo from "./Desfazer/Undo";
import Configurations from "./Configuracoes/Configurations";
import Themes from './Temas/Themes'
import Search from "./Buscas/Search";



export default function RegionSelectedHeader(props){
    const [undoMenu, setUndoMenu] = useState(false)

    const [configMenu,setConfigMenu] = useState(false)


    const [themesMenu, setThemesMenu] = useState(false)
    const [themesClear, setThemesClear] = useState(false)

    const [searchMenu, setSearchMenu] = useState(false)
    const [searchClear, setSearchClear] = useState(false)


    useEffect(() => {
        if(themesMenu === true){
            setSearchClear(true)
        }
        if(searchMenu === true){
            setThemesClear(true)
        }
    }, [ themesMenu, searchMenu])


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
                    undoMenu={undoMenu}
                    setUndoMenu={setUndoMenu}
                    configMenu={configMenu}
                    setConfigMenu={setConfigMenu}
                    themesMens={themesMenu}
                    setThemesMenu={setThemesMenu}
                    searchMenu={searchMenu}
                    setSearchMenu={setSearchMenu}
                />

                <Undo
                    undoMenu={undoMenu}
                    setUndoMenu={setUndoMenu}
                    setControlArray={props.onChange}
                    setSearchClear={setSearchClear}
                    setThemesClear={setThemesClear}
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
                    clear={themesClear}
                />

                <Search
                    searchMenu={searchMenu}
                    setSearchMenu={setSearchMenu}
                    regionId={props.regionId}
                    setFullData={props.setFullData}
                    clear={searchClear}
                />
            
                </>
            ):(<><p> </p></>)}
        </div>
    )
}