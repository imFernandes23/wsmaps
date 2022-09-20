import React from "react";
import './Search.css'
import * as AiIcons from 'react-icons/ai'
import {useState, useEffect} from 'react'
import ItemSearch from "./ItemSearch"
import api from "../../../services/api";


function Search(props){
    const [textInput, setTextinput] = useState('')
    const [dataFound, setDataFound] = useState([])
    const [loader, setLoader] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [maxNumPage, setMaxNumPage] = useState(1)
    


    useEffect(() => {
        const intersectionObserver = new IntersectionObserver((entries) => {
            if(entries.some((entry) => entry.isIntersecting)){
            }
        });
        intersectionObserver.observe(document.querySelector('#search-loader'))
        return () => intersectionObserver.disconnect()
    })

    useEffect(() => {
        if(textInput.length > 0){
            console.log('resultado de buscas')
        }
    }, [textInput])

    async function getSearchData(){
    }

    function handleSetSearch(content){
        if(content.length > 0){
        }
    }

    const attContent = event => {
        setTextinput(event.target.value)
    }

    function handleSetClear(){
        setTextinput('')
        setDataFound([])
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