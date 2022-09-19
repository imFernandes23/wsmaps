import React from "react";
import './Search.css'
import * as AiIcons from 'react-icons/ai'
import {useState, useEffect} from 'react'
import FakeData from "./FakeData";
import ItemSearch from "./ItemSearch"
import api from "../../../services/api";


function Search(props){
    const [textInput, setTextinput] = useState('')
    const [dataFound, setDataFound] = useState([])
    const [loader, setLoader] = useState(false)
    let currentPage = 1
    let maxNumPage = 1
    let textSearch 

    useEffect(() => {
        const intersectionObserver = new IntersectionObserver((entries) => {
            if(entries.some((entry) => entry.isIntersecting)){
                if(currentPage != maxNumPage) {
                    console.log("alo")
                }
            }
        });
        intersectionObserver.observe(document.querySelector('#search-loader'))
        return () => intersectionObserver.disconnect()
    })

    async function getSearchData(){
        if(currentPage <= maxNumPage){
            setLoader(true)
            await api.get(`regions/${props.regionId}/activities?name=${textSearch}&page=${currentPage}`).then((res) => {
                maxNumPage = res.data.last_page
                console.log(res)
                let newData = []
                res.data.data.forEach((element) => {
                    
                    let coords = JSON.parse(element.geometry)
                    newData.push({
                        id: element.id, 
                        subId: element.subclass_id,
                        coord: {lat: coords.coordinates[1], lng: coords.coordinates[0]}, 
                        name: element.name,
                        subName: element.subclass.name,
                        color: element.subclass.class.related_color,
                        icon: element.subclass.related_icon.path})
                })
                
                setDataFound((prevdata) => [...prevdata, ...newData])
            
            })
            currentPage = currentPage + 1
            setLoader(false)
        }

        console.log(currentPage, maxNumPage, dataFound)
    }

    function handleSetSearch(content){
        setDataFound([])
        currentPage = 1
        maxNumPage = 1
        if(content.length > 0){
            textSearch = content
            getSearchData()
        }
    }

    const attContent = event => {
        setTextinput(event.target.value)
    }

    function handleSetClear(){
        setTextinput('')
        setDataFound([])
        currentPage = 1
        maxNumPage = 1
    }

    return(
    <div className={props.searchMenu ? 'search active' : 'search'}>
    <h2 className="title-element"> Buscas </h2>
    <span className="btn-close" onClick={() => {props.setSearchMenu(!props.searchMenu)}}>
        <AiIcons.AiOutlineClose/>
    </span>

    <div className="search-bar">
        <button onClick={() => {handleSetSearch(textInput)}} className='button-search'>
            <AiIcons.AiOutlineSearch/>
        </button>
        <input type='text' placeholder=" O que você procura?" onChange={attContent} className='input-search' value={textInput}/>
        <button onClick={handleSetClear} className='btn-input-clear'>
            <AiIcons.AiOutlineClose/>
        </button>
    </div>
    
    <div className="search-res">
            {dataFound.map((element) => {
                return( <ItemSearch 
                    key={element.id}
                    element={element}
                />)
            })}

            <div id={`search-loader`} className={ loader ? 'loader active' : 'loader deactive'}></div>
    </div>


    </div>
    )
}

export default Search