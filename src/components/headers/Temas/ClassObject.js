import { useState } from "react";
import React from "react";
import * as AiIcons from 'react-icons/ai'
import SubClassObject from "./SubClassObject";
import './ClassObject.css'

export default function ClassObject(props){
    const[isOpen, setIsOpen] = useState(false)

    return(<>
    
        <div className={isOpen ? 'class-object active': 'class-object'} >
            <div className="object-content" onClick={() => {setIsOpen(!isOpen)
            if(isOpen === false){props.setRequestClass(props.id)}}}>
                <p className="name">{props.name}</p>
                <AiIcons.AiOutlineRight className={isOpen ? 'icon active' : 'icon'}/>
            </div>

            
                <div className="childrens-list">
                    {props.children ? 
                    (<>{
                        props.children.map((item, index) => {
                            return(<SubClassObject
                                key={`class_${props.id}_sub${index}`}
                                subname={item.name}
                                id={item.id}
                                setRequestSubClass={props.setRequestSubClass}
                            />)
                        })
                    }</>): ''}
                </div>

        </div>
        
        </>)
}