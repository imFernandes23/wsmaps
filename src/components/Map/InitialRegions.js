import React from "react";
import { PolygonF } from "@react-google-maps/api";
import { useMemo } from "react";

export default function InitialRegions(props){
    const options = useMemo(() => ({
        fillColor: "lightblue",
        fillOpacity: 1,
        strokeColor: "red",
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
            path={props.path}
            onClick={props.onClick}
        />
    )
}
