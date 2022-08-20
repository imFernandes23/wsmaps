import React, {useMemo}  from "react";
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import { MapStyle } from "./MapStyle";

function Maps(props){
    const options = useMemo(() => ({
        disableDefaultUI: true,
        clickableIcons: false,
        styles: MapStyle,
        minZoom: 7,
        maxZoom:18
    }), [])

    const markers = props.markers


    return(
        <GoogleMap 
            mapContainerClassName='map-container'
            options={options}
            zoom={props.zoom}
            center={props.center}
        >
            {markers !== undefined ? (<>{
                markers.map((item, index) => {
                    return(<MarkerF position={item} key={index}/>)
                })
            }</>) : (<></>)}

            
        </GoogleMap>
    )
}

export default Maps