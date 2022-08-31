import React from "react";
import * as AiIcons from 'react-icons/ai'
import './Themes.css'
import ClassObject from "./ClassObject";
import FakeData from "./FakeData";

function Themes(props){
    console.log(FakeData)


    return(
    <div className={props.themesMenu ? 'themes active' : 'themes'}>
        <h2 className="title-element"> Temas </h2>
        <span className="btn-close" onClick={() => props.setThemesMenu(!props.themesMenu)}><AiIcons.AiOutlineClose/></span>

        <div className="full-list">
        
        {FakeData.map((item, index) => {
            return(<ClassObject name={item.name} id={item.id}/>)
        })}

        </div>
        
        <button className="btn-confirm">
            Confirmar
        </button>

    </div>)
}

export default Themes