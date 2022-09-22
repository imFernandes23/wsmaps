import React from "react";
import * as AiIcons from 'react-icons/ai'
import './Themes.css'
import ClassObject from "./ClassObject";
import api from "../../../services/api";
import {useState, useEffect} from 'react'
import SelectedItens from "./SelectedItens";


function Themes(props){
    const [dataLoaded, setDataLoaded] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [maxNumPage, setMaxNumPage] = useState(1)
    const [loader, setLoader] = useState(true)
    const [arrayOfSubClasses, setArrayOfSubClasses] = useState([])
    const [arrayOfSCNames, setArrayOfSCNames] = useState([])
    const [arrayOfSCStates, setArrayOfSCStates] = useState([])

    useEffect(() => {
        if(props.clear === false){
            clearAll()
            props.setSubClassesArray([])
        }

    }, [props.clear])

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


    function addSubClass(id, subname, state){
        let leftArray = arrayOfSubClasses
        leftArray.push(id)
        setArrayOfSubClasses([...leftArray])

        let leftArraySN = arrayOfSCNames
        leftArraySN.push(subname)
        setArrayOfSCNames([...leftArraySN])

        let leftArrayStates = arrayOfSCStates
        leftArrayStates.push(state)
        setArrayOfSCStates([...leftArrayStates])
    }

    function removeSubClass(id){

        let index = arrayOfSubClasses.findIndex((element) => element === id)

        let leftArray =  arrayOfSubClasses.slice(0, index)
        let rightArray = arrayOfSubClasses.slice(index+1)
        setArrayOfSubClasses([...leftArray,...rightArray])

        let leftArraySN =  arrayOfSCNames.slice(0, index)
        let rightArraySN = arrayOfSCNames.slice(index+1)
        setArrayOfSCNames([...leftArraySN,...rightArraySN])

        arrayOfSCStates[index](false)

        let leftArrayStates =  arrayOfSCStates.slice(0, index)
        let rightArrayStates = arrayOfSCStates.slice(index+1)
        setArrayOfSCStates([...leftArrayStates,...rightArrayStates])
    }
    

    function clearAll(){
        setArrayOfSubClasses([])
        setArrayOfSCNames([])
        arrayOfSCStates.forEach((item) => {item(false)})
        setArrayOfSCStates([])
    }

    return(
    <div className={props.themesMenu ? 'themes active' : 'themes'}>
        <SelectedItens
            arrayOfSubClasses={arrayOfSubClasses}
            arrayOfSCNames={arrayOfSCNames}
            removeSubClass={removeSubClass}
            clearAll={clearAll}
        />
        <h2 className="title-element"> Temas </h2>
        <span className="btn-close" onClick={() => {props.setThemesMenu(!props.themesMenu)
        props.setSubClassesArray(arrayOfSubClasses)}
        }><AiIcons.AiOutlineClose/></span>

        <div className="full-list">
        
        
        {loader === true ? (<>
            
        </>):(<>{dataLoaded.map((item, index) => {
            return(<ClassObject 
                key={index} 
                name={item.name} 
                id={item.id}
                addSubClass={addSubClass}
                removeSubClass={removeSubClass}
                />)
        })}</>)}
        
        
        <div id="class-loader" className={ loader ? 'loader active' : 'loader deactive'}/>
        </div>
        
        <button className="btn-confirm" onClick={() => {
            props.setThemesMenu(!props.themesMenu)
            props.setSubClassesArray(arrayOfSubClasses)
        }}>
            Confirmar
        </button>

    </div>)
}

export default Themes