import { useState } from "react";
import React from "react";
import * as AiIcons from 'react-icons/ai'
import './ClassObject.css'

export default function ClassObject(props){
    const[isOpen, setIsOpen] = useState(false)

    return(<>
    
        <div className={isOpen ? 'class-object active': 'class-object'} onClick={() => {setIsOpen(!isOpen)
        props.setRequest(props.id)}}>
        <p className="name">{props.name}</p>
        <AiIcons.AiOutlineRight className={isOpen ? 'icon active' : 'icon'}/>

        

        </div>
        {isOpen ? (<div className="childrens">
            <p>Item Filho</p>
            </div>):(<></>)}
        </>)
}