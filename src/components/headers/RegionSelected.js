import React from 'react'
import './RegionSelected.css'
import Regions from '../../data/Regions';

function RegionsHeader(props){
    const found = Regions.findIndex(region => region.id === props.id)
    const region = Regions[found]
    return(
        <>
            <div className='region-header-title'>{region.nome}</div>
        </>
    );
}

export default RegionsHeader