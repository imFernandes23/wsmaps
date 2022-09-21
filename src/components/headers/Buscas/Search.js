import React from "react";
import './Search.css'
import * as AiIcons from 'react-icons/ai'
import {useState, useEffect} from 'react'
import ItemSearch from "./ItemSearch"
import api from "../../../services/api";

let page = 1
let maxNumPage = 1

function Search(props){
    const [textInput, setTextinput] = useState('')
    const [dataFound, setDataFound] = useState([])
    const [loader, setLoader] = useState(false)
    const [showMore, setShowMore] = useState(false)
    const [currentWord, setCurrentWord] = useState('')


//    useEffect(() => {
//        const intersectionObserver = new IntersectionObserver((entries) => {
//            if(entries.some((entry) => entry.isIntersecting)){
//            }
//        });
//        intersectionObserver.observe(document.querySelector('#search-loader'))
//        return () => intersectionObserver.disconnect()
//    })

//http://mapasdigitais.bitsebytes.net/api/v3/regions/1/activities?name=farmacia&page=2

    async function getSearchData(){

        if(page <= maxNumPage){
            setLoader(true)

            await api.get(`regions/${props.regionId}/activities?name=${textInput}&page=${page}`).then((res) => {
                
                
                let newData = []

                res.data.data.forEach((element) => {
                    let coord = JSON.parse(element.geometry)
                    newData.push({
                        id: element.id,
                        subId: element.subclass_id,
                        coord: {lat: coord.coordinates[1], lng: coord.coordinates[0]},
                        name: element.name,
                        subName:element.subclass.name,
                        color: element.subclass.class.related_color,
                        icon: element.subclass.related_icon.path,
                    })
                })
                setDataFound((prevData) => [...prevData, ...newData])
                page++
                maxNumPage = res.data.last_page
            })
            setLoader(false) 
            if(page > maxNumPage){
                setShowMore(false)
            }else{
                setShowMore(true)
            }
        }

    }

    function handleSetSearch(){
        if(textInput.length > 0 && textInput !== currentWord){
            page = 1
            setDataFound([])
            setCurrentWord(textInput)
            getSearchData()
        }
    }

    const attContent = event => {
        setTextinput(event.target.value)
    }


    function handleSetClear(){
        setTextinput('')
        setCurrentWord('')
        setDataFound([])
    }

    return(
    <div className={props.searchMenu ? 'search active' : 'search'}>
    <h2 className="title-element"> Buscas </h2>
    <span className="btn-close" onClick={() => {props.setSearchMenu(!props.searchMenu)}}>
        <AiIcons.AiOutlineClose/>
    </span>

    <div className="search-bar">
        <button onClick={() => {handleSetSearch()}} className='button-search'>
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
            {showMore ? (<button className="btn-plus" onClick={() => {getSearchData()}}><AiIcons.AiOutlinePlus/></button>): (<></>)}
            

    </div>


    </div>
    )
}

export default Search