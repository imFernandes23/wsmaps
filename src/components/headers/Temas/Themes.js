import React from "react";
import * as AiIcons from 'react-icons/ai'
import './Themes.css'
import ClassObject from "./ClassObject";
import FakeData from "./FakeData";
import api from "../../../services/api";
import {useState, useEffect} from 'react'


function Themes(props){
    const [dataLoaded, setDataLoaded] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [maxNumPage, setMaxNumPage] = useState(1)
    const [loader, setLoader] = useState(true)

    

    useEffect(() => {
        const intersectionObserver = new IntersectionObserver((entries) => {
            if(entries.some((entry) => entry.isIntersecting)){
                getClasses()
            }
        });
        intersectionObserver.observe(document.querySelector('#class-loader'))
        return () => intersectionObserver.disconnect();
    })

    async function getClasses(){
        if(currentPage <= maxNumPage){
            await api.get(`classes?page=${currentPage}`).then((res)=>{
                setMaxNumPage(res.data.last_page)
                let newData = []
                res.data.data.forEach((item) => {
                    newData.push({id: item.id, name: item.name, children: null})
                })
                setDataLoaded((prevData) => [...prevData,...newData])
            })
            setCurrentPage(currentPage+1)
            setLoader(false)
           

        }
    }


    function setRequestClass(id){

    }

    function setRequestSubClass(id){
        console.log('carregar subclasse' + id)
    }

    

    return(
    <div className={props.themesMenu ? 'themes active' : 'themes'}>
        <h2 className="title-element"> Temas </h2>
        <span className="btn-close" onClick={() => props.setThemesMenu(!props.themesMenu)}><AiIcons.AiOutlineClose/></span>

        <div className="full-list">
        
        
        {loader === true ? (<>
            
        </>):(<>{dataLoaded.map((item, index) => {
            return(<ClassObject key={index} name={item.name} id={item.id} setRequestClass={setRequestClass} setRequestSubClass={setRequestSubClass} children={item.children}/>)
        })}</>)}
        
        
        <div id="class-loader" className={ loader ? 'loader active' : 'loader deactive'}/>
        </div>
        
        <button className="btn-confirm">
            Confirmar
        </button>

    </div>)
}

export default Themes