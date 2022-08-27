
import React, { useState } from "react";
import "./RegionSelectedHeader.css"
import * as AiIcons from 'react-icons/ai'
import RegionsDraw from "../Map/RegionsDraw";
import ButtonTemas from "../buttons/ButtonTemas";



export default function RegionSelectedHeader(props){
    const [configMenu,setConfigMenu] = useState(false)
    const [configTemas, setConfigTemas] = useState(false)

    function handleSetConfig(index){
        let newArray = [...props.controlArray]

        newArray[index] = !props.controlArray[index]

        props.onChange(newArray)

        setConfigTemas(false) 
    }
//remove this in future
    function handleSetConfigTheme(index){
        let newArray = [...props.controlArrayTheme]

        newArray[index] = !props.controlArrayTheme[index]

        props.onChange2(newArray)
        setConfigMenu(false) 
    }
//

    function handleSetConfigTemas(){
        setConfigTemas(!configTemas)
        setConfigMenu(false)
    }


    return(
        <div className={props.setRegion === null ? 'full-layout' : 'full-layout active'}>
            {props.setRegion !== null ? (
                <>
                <div className="region-header-title" >{props.labels[props.setRegion]}</div>

                <button className={configMenu ? 'buttom-menu' : 'buttom-menu active'} onClick={() => {setConfigMenu(!configMenu)
                setConfigTemas(false)
                }}>
                    <AiIcons.AiFillSetting/>
                </button>

                <form className={configMenu ? 'configurations active':'configurations'} >
                    <span className="btn-close" onClick={() => setConfigMenu(!configMenu)}><AiIcons.AiOutlineClose/></span>

                    <div className="element">
                        <p className="ele-nome">Ruas Pavimentadas</p>
                        <div style={{backgroundColor:'#ffad29'}} className='color-element'></div>
                        <input 
                            type='checkbox'
                            checked={props.controlArray[0]}
                            onChange={() => handleSetConfig(0)}
                        />
                    </div>
                    <div className="element">
                        <p className="ele-nome">Ruas com bloquetes</p>
                        <div style={{backgroundColor:'#7C7C7C'}} className='color-element'></div>
                        <input 
                            type='checkbox'
                            checked={props.controlArray[1]}
                            onChange={() => handleSetConfig(1)}
                        />
                    </div>
                    <div className="element">
                        <p className="ele-nome">Ruas sem asfalto</p>
                        <div style={{backgroundColor:'#EFE944'}} className='color-element'></div>
                        <input 
                            type='checkbox'
                            checked={props.controlArray[2]}
                            onChange={() => handleSetConfig(2)}
                        />
                    </div>
                    <div className="element">
                        <p className="ele-nome">Ruas com alagamentos</p>
                        <div style={{backgroundColor:'#005FFF'}} className='color-element'></div>
                        <input 
                            type='checkbox'
                            checked={props.controlArray[3]}
                            onChange={() => handleSetConfig(3)}
                        />
                    </div>
                    <div className="element">
                        <p className="ele-nome">Ruas que precisam de reparos</p>
                        <div style={{backgroundColor:'#F54516'}} className='color-element'></div>
                        <input 
                            type='checkbox'
                            checked={props.controlArray[4]}
                            onChange={() => handleSetConfig(4)}
                        />
                    </div>
                    <div className="element">
                        <p className="ele-nome">Ruas obstruidas</p>
                        <div style={{backgroundColor:'#000'}} className='color-element'></div>
                        <input 
                            type='checkbox'
                            checked={props.controlArray[5]}
                            onChange={() => handleSetConfig(5)}
                        />
                    </div>
                    <div className="element">
                        <p className="ele-nome">Mostrar pontos de coleta de lixo</p>
                        <div style={{backgroundColor:'#A3ABA2'}} className='color-element'></div>
                        <input 
                            type='checkbox'
                            checked={props.controlArray[6]}
                            onChange={() => handleSetConfig(6)}
                        />
                    </div>

                    
                </form>
            

            

            <ButtonTemas setTemas={configTemas} onClick={handleSetConfigTemas}/>
            
            <form className={configTemas ? 'configurations active':'configurations'} >
                    <span className="btn-close" onClick={() => setConfigTemas(!configTemas)}><AiIcons.AiOutlineClose/></span>

                    <div className="element">
                        <p className="ele-nome">Pontos de Venda de Açái</p>
                        <div style={{backgroundColor:'#5C32C7'}} className='color-element'></div>
                        <input 
                            type='checkbox'
                            checked={props.controlArrayTheme[0]}
                            onChange={() => handleSetConfigTheme(0)}
                        />
                    </div>
                    <div className="element">
                        <p className="ele-nome">Restaurantes</p>
                        <div style={{backgroundColor:'#E6FA09'}} className='color-element'></div>
                        <input 
                            type='checkbox'
                            checked={props.controlArrayTheme[1]}
                            onChange={() => handleSetConfigTheme(1)}
                        />
                    </div>
                    <div className="element">
                        <p className="ele-nome">Lanchonetes</p>
                        <div style={{backgroundColor:'#FA5009'}} className='color-element'></div>
                        <input 
                            type='checkbox'
                            checked={props.controlArrayTheme[2]}
                            onChange={() => handleSetConfigTheme(2)}
                        />
                    </div>
                    <div className="element">
                        <p className="ele-nome">Arena Esportiva</p>
                        <div style={{backgroundColor:'#2EFA09'}} className='color-element'></div>
                        <input 
                            type='checkbox'
                            checked={props.controlArrayTheme[3]}
                            onChange={() => handleSetConfigTheme(3)}
                        />
                    </div>
                    <div className="element">
                        <p className="ele-nome">Posto de Saúde</p>
                        <div style={{backgroundColor:'#FF0000'}} className='color-element'></div>
                        <input 
                            type='checkbox'
                            checked={props.controlArrayTheme[4]}
                            onChange={() => handleSetConfigTheme(4)}
                        />
                    </div>
                    
                </form>




                </>
            ):(<><p> </p></>)}
        </div>
    )
}