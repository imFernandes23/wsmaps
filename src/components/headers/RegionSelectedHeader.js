
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
                    setFullData={props.setFullData}
                    setControlArray={props.onChange}
                    searchClear={searchClear}
                    themesClear={themesClear}
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
                    setFullData={props.setFullData}
                    clear={setThemesClear}
                    clearResidual={searchClear}
                />

                <Search
                    searchMenu={searchMenu}
                    setSearchMenu={setSearchMenu}
                    regionId={props.regionId}
                    setFullData={props.setFullData}
                    clear={setSearchClear}
                    clearResidual={themesClear}
                />
            
                </>
            ):(<><p> </p></>)}
        </div>
    )
}