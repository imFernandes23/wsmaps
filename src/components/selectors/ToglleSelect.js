import React from "react";
import * as AiIcons from 'react-icons/ai'
import './ToglleSelect.css'
import { useState, CSSProperties } from 'react';

function ToglleSelect(props){
    const [toglle, setToglle] = useState(false)

    return(
        <>
            <div className={toglle ? 'toglle-menu active' : 'toglle-menu'}>
                <button className={ toglle ? 'btn-toglle active' : 'btn-toglle'} onClick={() => {setToglle(!toglle)
                props.setConfigMenu(false)}}>
                    <AiIcons.AiOutlinePlus/>
                </button>

                <button className={toglle ?  'btn-opt active' : 'btn-opt'} style={{"--value": 0}}>
                    <AiIcons.AiOutlineRedo />
        
                </button>

                <button className={toglle ?  'btn-opt active' : 'btn-opt'} style={{"--value": 1}} onClick={() => {props.setConfigMenu(!props.configMenu)
                setToglle(false)}}>
                    <AiIcons.AiOutlineSetting />
           
                </button>

                <button className={toglle ?  'btn-opt active' : 'btn-opt'} style={{"--value": 2}}>
                    <AiIcons.AiOutlineBulb />
  
                </button>

                <button className={toglle ?  'btn-opt active' : 'btn-opt'} style={{"--value": 3}}>
                    <AiIcons.AiOutlineSearch />
    
                </button>
                
                <button className={toglle ?  'btn-opt active' : 'btn-opt'} style={{"--value": 4}}>
                    <AiIcons.AiOutlineEnvironment />
     
                </button>

                

                


            </div>
        </>
    )
}

export default ToglleSelect
