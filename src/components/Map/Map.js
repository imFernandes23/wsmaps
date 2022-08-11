import React from "react";
import { useState, useMemo, useCallback, useRef } from "react";
import {
    GoogleMap,
    Marker,
    DirectionsRenderer,
    Circle,
    MarkerClusterer
} from '@react-google-maps/api'
import {MapStyle} from "./MapStyle";

console.log(MapStyle)

function Map(){
    const mapRef = useRef();
    const center = useMemo(() => ({lat: -1.394782568744898,lng: -48.41606140136719}),  [])
    const options = useMemo(() => ({
        disableDefaultUI: true,
        clickableIcons: false,
        styles: MapStyle,
        
    }), []) 
    
    const onLoad = useCallback((map) => (mapRef.current = map),  [])


    return(
    <div className="container">
        <GoogleMap 
        zoom={12.8} 
        center={center} 
        mapContainerClassName="map-container"
        options={options}
        onLoad={onLoad}
        ></GoogleMap>
    </div>)
}

export default Map