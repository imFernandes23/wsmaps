import React from "react";
import { PolygonF, PolylineF } from "@react-google-maps/api";

export default function AsphaltDraw(props){

    const fullArrayPathPolygons = []
    let cont = 0
    if(props.street === null){
        console.log('sem dados')
    }else{
        props.street.features.map((feature, index) => {
            // console.log(feature.geometry)

            if(feature.geometry.type === 'Polygon'){

                feature.geometry.coordinates.map(coords => {

                    const arrayPath = []

                    coords.map(path => arrayPath.push({lat: path[1], lng:path[0]}))

                    fullArrayPathPolygons.push(arrayPath)

                })
            }else{
                cont = cont + 1
                
            }
        })

    }
    
    console.log(cont)

    return fullArrayPathPolygons.map((path, index) => {return(<PolygonF path={path} key={index}/>)})
    
}