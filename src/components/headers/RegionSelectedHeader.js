
import React, { useState, useEffect, useSyncExternalStore } from "react";
import "./RegionSelectedHeader.css"
import "./Header.css"
import "./DownButtons.css"
import ToglleSelect from "../selectors/ToglleSelect";
import Undo from "./Desfazer/Undo";
import Streets from "./Ruas/Streets";
import Themes from './Temas/Themes'
import Search from "./Buscas/Search";

import Subtitles from "./Legendas/Subtitles";
import * as AiIcons from 'react-icons/ai'
import * as MdIcons from 'react-icons/md'

export default function RegionSelectedHeader(props){

    //ferramentas 

    const [undoMenu, setUndoMenu] = useState(false)
    const [streetsMenu,setStreetsMenu] = useState(false)

    const [themesMenu, setThemesMenu] = useState(false)
    const [themesClear, setThemesClear] = useState(false)

    const [searchMenu, setSearchMenu] = useState(false)
    const [searchClear, setSearchClear] = useState(false)

    //outros elementos

    const [subtitlesBox, setSubtitlesBox] = useState(true)

    function handleSetStreets(index){
        let newArray = [...props.controlArray]
        newArray[index] = !props.controlArray[index]
        props.onChange(newArray)
    }



    return(
        <div className={props.setRegion !== null ? 'full-layout active' : 'full-layout'}>
            {props.setRegion !== null ? (
                <>


                
                <div className="header">

                    <ToglleSelect 
                        undoMenu={undoMenu}
                        setUndoMenu={setUndoMenu}
                        streetsMenu={streetsMenu}
                        setStreetsMenu={setStreetsMenu}
                        themesMens={themesMenu}
                        setThemesMenu={setThemesMenu}
                        searchMenu={searchMenu}
                        setSearchMenu={setSearchMenu}
                    />
                    <p className="region-name">{props.labels[props.setRegion]}</p>


                    <div className="back-btn" onClick={() => props.backButton()}>
                        <AiIcons.AiOutlineArrowLeft/>
                        <p>Voltar</p>
                    </div>
                </div>


                
                
                <ul className="down-buttons">
                    <li onClick={() => setSubtitlesBox(!subtitlesBox)}>
                        <MdIcons.MdOutlineSubtitles/>
                        <p>Legendas</p>
                    </li>
                    <li>
                        <AiIcons.AiOutlineSetting/>
                        <p>Configurações</p>
                    </li>
                    
                </ul>  



                <Undo
                    undoMenu={undoMenu}
                    setUndoMenu={setUndoMenu}
                    setFullData={props.setFullData}
                    setControlArray={props.onChange}
                    searchClear={searchClear}
                    themesClear={themesClear}
                />

                <Streets
                    streetsMenu={streetsMenu}
                    setStreetsMenu={setStreetsMenu}
                    controlArray={props.controlArray}
                    handleSetStreets={handleSetStreets}
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
            
                <Subtitles
                    subtitlesBox={subtitlesBox}
                    setSubtitlesBox={setSubtitlesBox}
                    controlArray={props.controlArray}
                />    

                </>
            ):(<><p> </p></>)}
        </div>
    )
}