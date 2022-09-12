import React from "react";
import './SelectedItens.css'
import { useState } from 'react'
import * as AiIcons from 'react-icons/ai'
import Item from "./Item";

function SelectedItens(props){
    const [isOpen, setIsOpen] = useState(false)
    const [NumThemes, setNumthemes] = useState(22) 

    return(<>
        <div className={isOpen ? 'box-itens active' : 'box-itens'} >
            <div className="component" onClick={() => {setIsOpen(!isOpen)}}> 
                <p>{NumThemes} </p>
                <p> Selecionados </p>
            </div>
            <div className="button-clear">
                <p>Limpar</p><AiIcons.AiOutlineClear/>
            </div>
            <div className="itens">
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                
            </div>
            
        </div>
    </>)
} 
export default SelectedItens