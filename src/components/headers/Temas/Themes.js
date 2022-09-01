import React from "react";
import * as AiIcons from 'react-icons/ai'
import './Themes.css'
import ClassObject from "./ClassObject";
import FakeData from "./FakeData";

function Themes(props){

    function setRequestClass(id){
        console.log('carregar classe' + id)
    }

    function setRequestSubClass(id){
        console.log('carregar subclasse' + id)
    }


    return(
    <div className={props.themesMenu ? 'themes active' : 'themes'}>
        <h2 className="title-element"> Temas </h2>
        <span className="btn-close" onClick={() => props.setThemesMenu(!props.themesMenu)}><AiIcons.AiOutlineClose/></span>

        <div className="full-list">
        
        {FakeData.map((item, index) => {
            return(<ClassObject key={index} name={item.name} id={item.id} setRequestClass={setRequestClass} setRequestSubClass={setRequestSubClass} children={item.children}/>)
        })}

        </div>
        
        <button className="btn-confirm">
            Confirmar
        </button>

    </div>)
}

export default Themes