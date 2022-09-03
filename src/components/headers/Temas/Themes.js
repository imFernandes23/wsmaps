import React from "react";
import * as AiIcons from 'react-icons/ai'
import './Themes.css'
import ClassObject from "./ClassObject";
import FakeData from "./FakeData";
import api from "../../../services/api";
import {useState, useEffect} from 'react'


function Themes(props){
    const [dataLoaded, setDataLoaded] = useState(props.dataLoaded)
    const [currentPage, setCurrentPage] = useState(1)
    let maxThemePages = 1

    

    useEffect(() => {
        const intersectionObserver = new IntersectionObserver((entries) => {
            if(entries.some((entry) => entry.isIntersecting)){
                console.log('elemento visto')
            }
        });
        intersectionObserver.observe(document.querySelector('#class-loader'))
        return () => intersectionObserver.disconnect();
    })


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
        
        {dataLoaded.map((item, index) => {
            return(<ClassObject key={index} name={item.name} id={item.id} setRequestClass={setRequestClass} setRequestSubClass={setRequestSubClass} children={item.children}/>)
        })}
        <div id="class-loader"/>
        </div>
        
        <button className="btn-confirm">
            Confirmar
        </button>

    </div>)
}

export default Themes