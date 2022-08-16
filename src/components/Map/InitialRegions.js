import React from "react";
import { PolygonF, Marker } from "@react-google-maps/api";
import { useMemo } from "react";

export default function InitialRegions(props){

    const arryaPath = []
    const propsArray = props.paths.limites.features[0].geometry.coordinates[0]

    propsArray.map(propsArray => arryaPath.push({lat: propsArray[1] , lng: propsArray[0]}))

    const options = useMemo(() => ({
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
    }))

    return(
        <PolygonF
            options={options}
            path={arryaPath}
            onClick={props.onClick}
        />
    )
}
