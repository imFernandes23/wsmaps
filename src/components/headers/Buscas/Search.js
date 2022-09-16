import React from "react";
import './Search.css'
import * as AiIcons from 'react-icons/ai'
import {useState} from 'react'
import FakeData from "./FakeData";
import ItemSearch from "./ItemSearch"


function Search(props){
    const [textInput, setTextinput] = useState('')
    const [dataFound, setDataFound] = useState([])
    const [show, setShow] = useState(false)

    function handleSetSearch(content){
        console.log(content)
        if(content.length > 0){
            console.log(FakeData)
            setDataFound(FakeData)
            setShow(true)
        }
    }

    const attContent = event => {
        setTextinput(event.target.value)
    }

    function handleSetClear(){
        setTextinput('')
        setDataFound([])
        setShow(false)
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
        {show ? (<>
            {dataFound.map((element) => {
                return( <ItemSearch 
                    key={element.id}
                    element={element}
                />)
            })}
        </>):(<>
            <p>Você ainda não fez uma busca.</p>
        </>)}
    </div>

    </div>
    )
}

export default Search