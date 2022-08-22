import React from "react";
import Regions from "../../data/Regions"

 export default function RegionsGetFitBounds(){
    const allRegionsBounds = []
    let markerTopLeft = [0,-90]
    let markerBotRight = [-179, 90]

    const regionBounds = []

    Regions.map( item => {
        let element = item.limites.features[0].geometry.coordinates
        element.map(coords => {
            coords.map(path => {
                if(path[0] < markerTopLeft [0] ){ markerTopLeft[0] = path[0]};
                if(path[1] > markerTopLeft [1] ){ markerTopLeft[1] = path[1]};

                if(path[0] > markerBotRight[0]){ markerBotRight[0] = path[0]};
                if(path[1] < markerBotRight[1]){ markerBotRight[1] = path[1]};
            })
        })
        

    })

    allRegionsBounds.push({lat: markerTopLeft[1], lng:markerTopLeft[0]},{lat:markerBotRight[1], lng:markerBotRight[0]})
    

    console.log(allRegionsBounds)
 }