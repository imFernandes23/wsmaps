import React from "react";
import { useState } from "react";
import './Undo.css'
import * as AiIcons from 'react-icons/ai'

function Undo(props){

    function undoAll(){
        props.setControlArray([true,true,true,true,true,true,false])
    }


    return(
    <div className={props.undoMenu ? 'undo-pop-up active' : 'undo-pop-up'}>
        <p className="info">Deseja defaszer tudo? E voltar as configuraçôes padrão?</p>

        <span>
            <button className="button confirm" 
            onClick={() => {props.setUndoMenu(false)
            undoAll()}}>
                <AiIcons.AiOutlineCheck/>
            </button>
            <button className="button refuse" onClick={() => props.setUndoMenu(false)}>
                <AiIcons.AiOutlineClose/>
            </button>
        </span>
    </div>)

}

export default Undo