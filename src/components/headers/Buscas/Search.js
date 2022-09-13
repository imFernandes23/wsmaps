import React from "react";
import './Search.css'
import * as AiIcons from 'react-icons/ai'
import {useState} from 'react'


function Search(props){
    const [textInput, setTextinput] = useState('')

    function handleSetSearch(content){
        console.log(content)
    }

    const attContent = event => {
        setTextinput(event.target.value)
    }

    function handleSetClear(){
        setTextinput('')
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
        <input type='text' placeholder="O que você procura?" onChange={attContent} className='input-search' value={textInput}/>
        <button onClick={handleSetClear} className='button-search'>
            <AiIcons.AiOutlineClose/>
        </button>
    </div>
    



    <button className="btn-confirm" onClick={() => {
            props.setSearchMenu(!props.searchMenu)
        }}>
        confirmar
    </button>
    </div>
    )
}

export default Search