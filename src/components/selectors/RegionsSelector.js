import React from 'react'
import './RegionsSelector.css'
import { useState } from 'react'

export default function RegionsSelector(props){
    const [selectedRegion, setSelectedRegion] = useState('')
    const handleSetRegion = event => {
        console.log(event.target.value)

        setSelectedRegion(event.target.value)
    }

    return(
        <select className='regions-selector' value={selectedRegion} onChange={handleSetRegion} >
            <option disabled={true} value=''> Selecione uma Região</option>
            {props.regioes.map((item) => {
                return(<option 
                    key={item.id} value={item.nome}
                    onClick={() => props.onClick()}
                >{item.nome}</option>)
            })}
        </select>
    )
}