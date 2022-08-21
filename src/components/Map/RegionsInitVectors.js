import React from 'react'
import Regions from '../../data/Regions'

function  RegionsInitVectors(){
    const regionsInitPath = []
    Regions.map(item => {
        const arrayPath = []
        item.limites.features[0].geometry.coordinates[0].map(path => arrayPath.push({lat: path[1], lng:path[0]}))
        regionsInitPath.push(arrayPath) 
    })

    const regionsInitOptions = ({
        fillColor: "#0468BF",
        fillOpacity: 0.4,
        strokeColor: "#0455BF",
        strokeOpacity: 1,
        strokeWeight: 2,
        clickable: true,
        draggable: false,
        editable: false,
        geodesic: false,
        zIndex: 1
    })

    const regionsInitMarkerPosi = []
    Regions.map(item => regionsInitMarkerPosi.push({lat: item.centro[1], lng:item.centro[0]}))

    const regionsInitMarkerLabel = []
    Regions.map(item => {
        regionsInitMarkerLabel.push(item.nome)
    })


    




    return {
        polygonPath: regionsInitPath,
        regionsMarkers: regionsInitMarkerPosi,
        regionsLabel: regionsInitMarkerLabel,  
    }
}

export default RegionsInitVectors