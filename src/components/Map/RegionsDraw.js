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
                fillOpacity: 0.6,
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
            <PolygonF  key={region.nome} path={regionLimits} options={optionLimits}/>
        </>)
        
    }

    function DrawAreaAsphalt(){

        const asphaltArray = []

        const asphaltOptions = {
            fillColor: "#ffad29",
            fillOpacity: .8,
            strokeColor: "#ffad29",
            strokeOpacity: .8,
            strokeWeight: 1.5,
            clickable: false,
            draggable: false,
            editable: false,
            geodesic: false,
            zIndex: 2
        }

        if(Regions[props.region] === null){
            console.log('sem dados')
        }else{
            const Asphalt = Regions[props.region].Asphalt
            // console.log(Asphalt)

            Asphalt.features.map((feature, index) => {
                // console.log(feature)
                if(feature.geometry.type === 'Polygon'){
                    feature.geometry.coordinates.map( coords => {
                        const arrayPath = []

                        coords.map(path => arrayPath.push({lat:path[1], lng:path[0]}))

                        asphaltArray.push(arrayPath)
                    })
                }
            })

        }

        return asphaltArray.map((path, index) => {
            return(<PolygonF path={path} options={asphaltOptions} key={`Asphalt_${index}`}/>)
        })

    }


    return(<>
        <div key={'areaLimits'}>
            {DrawAreaLimits()}
        </div>
        <div key={'areaAsphalt'}>
            {DrawAreaAsphalt()}
        </div>
    </>)
}