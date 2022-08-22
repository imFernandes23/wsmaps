import React, {useMemo}  from "react";
import { GoogleMap, MarkerF, PolygonF } from "@react-google-maps/api";
import { MapStyle } from "./MapStyle";
import InitialRegions from './InitialRegions'

function Maps(props){
    const options = useMemo(() => ({
        disableDefaultUI: true,
        clickableIcons: false,
        styles: MapStyle,
    }), [])



    return(
        <GoogleMap 

            mapContainerClassName='map-container'
            options={options}
            zoom={props.zoom}
            center={props.center}
        >

            {props.polygonsInit !== undefined ? (<>{
                props.polygonsInit.polygonPath.map((item, index) => {return(
                    <InitialRegions
                        key={index.toString()}
                        arrayPath={item}
                        onClick={() => props.polyInitOnClick(index)}
                        center={props.polygonsInit.regionsMarkers[index]}
                        label={props.polygonsInit.regionsLabel[index]}  
                    />)
                })
            }</>) : (<></>)}
        
        <MarkerF position={{lat:-1.30555243134685, lng:-48.5052163084356}}/>
        <MarkerF position={{lat:-1.47874333861475, lng:-48.3280682022797}}/>
            
        </GoogleMap>
    )
}

export default Maps