import React from "react";
import * as AiIcons from 'react-icons/ai'
import './Item.css'

function Item(props){

    return(
        <div className="item-component">
            <p className="item-name">Nome</p>
            <AiIcons.AiOutlineClose/>
        </div>
    )
}

export default Item