import React from "react";
import { MarkerF, PolygonF } from "@react-google-maps/api";
import Regions from "../../data/Regions";

export default function RegionsDraw(props){

    const region = Regions[props.region]



    function DrawAreaLimits(){
        const regionLimits = []
        region.limites.features[0].geometry.coordinates[0].map(path => regionLimits.push({lat: path[1], lng:path[0]}))

        const optionLimits = (
            {
                fillColor: "#fff",
                fillOpacity: 0.2,
                strokeColor: "#000",
                strokeOpacity: 1,
                strokeWeight: .8,
                clickable: false,
                draggable: false,
                editable: false,
                geodesic: false,
                zIndex: 1
            }
        )

        return(<> 
            <PolygonF path={regionLimits} options={optionLimits}/>
        </>)
        
    }

    function DrawAreaAsphalt(){
        
    }


    return [DrawAreaLimits()]
}