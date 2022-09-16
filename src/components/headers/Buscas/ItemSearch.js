import React from "react";
import "./ItemSearch.css"

function ItemSearch(props){
     
    return(
        <div className="item-search">
            <img className="item-icon-found" style={{'--MainColor':props.element.color}} src={props.element.icon}/>
            <p className="item-name-found">{props.element.name}</p>
            <div className="item-sclass-found" style={{'--MainColor':props.element.color}}  >{props.element.subName}</div>
        </div>
    )
}

export default ItemSearch