import React from "react";
import { PolylineF , PolygonF} from "@react-google-maps/api";
import Regions from "../../data/Regions";
import FindIndex from "../hooks/FindIndex";

export default function RegionDraw(props) {
    
    const region = FindIndex(props.id)

    const path = [
        {lat: 37.772, lng: -122.214},
        {lat: 21.291, lng: -157.821},
        {lat: -18.142, lng: 178.431},
        {lat: -27.467, lng: 153.027}
      ];

    const options = {
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        clickable: false,
        draggable: false,
        editable: false,
        visible: true,
        radius: 30000,

        zIndex: 1
    };


    function DrawLimits(region){
        const arrayPath = []
        const arrayLimits = region.limites.features[0].geometry.coordinates[0]

        arrayLimits.map(path => arrayPath.push({lat: path[1], lng: path[0]}))

        const options = ({
            fillColor:"#fff",
            fillOpacity: 0.3,
            strokeColor: "#000",
            strokeOpacity: 1,
            strokeWeight: 0.5,
            clickable: false,
            draggable: false,
            editable: false,
            geodesic: false,
            zIndex: 1
        })

        return <PolygonF path={arrayPath} options={options}/>
    }


    return (DrawLimits(region))
 
}

