import React, {useMemo, onLoad} from "react";
import { GoogleMap, useLoadScript, MarkerF, PolygonF } from "@react-google-maps/api";
import {MapStyle} from "./MapStyle";

export default function Index() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyCGhU6kv2oz6AIW4LbG-eO3AraMqmIsAdw'
    });

    if (!isLoaded) return <div>Loading..</div>
    return <Map />;
}

console.log('renderizou')

function Map(){
    const center = useMemo(() => ({lat: -1.394782568744898,lng: -48.41606140136719}),  [])
    const options = useMemo(() => ({
        disableDefaultUI: true,
        clickableIcons: false,
        styles: MapStyle,
        
    }), []) 

    return (
        <GoogleMap 
            zoom={12.8} 
            center={center} 
            mapContainerClassName="map-container"
            options={options}
            onLoad={onLoad}
        >
            <MarkerF position={center}/>
        </GoogleMap>
    )
}