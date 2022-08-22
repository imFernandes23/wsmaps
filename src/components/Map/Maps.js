import React, {useMemo, useRef, useEffect, useState, useCallback}  from "react";
import { GoogleMap, MarkerF, PolygonF } from "@react-google-maps/api";
import { MapStyle } from "./MapStyle";
import InitialRegions from './InitialRegions'
import RegionsGetFitBounds from "./RegionsGetFitBounds";

function Maps(props){
    const options = useMemo(() => ({
        disableDefaultUI: true,
        clickableIcons: false,
        styles: MapStyle,
    }), [])

    const [map, setMap] = useState(null);

    const regions = RegionsGetFitBounds()

    const test = regions.allRegionsBounds

    const onLoad = useCallback((map) => setMap(map),[])

    useEffect(() => {
        if(map){
            const bounds = new window.google.maps.LatLngBounds();
            props.view.map(marker => {
                bounds.extend(marker)
            })
            map.fitBounds(bounds)
        }
    }, [map, props.view])

    return(
        <GoogleMap 

            mapContainerClassName='map-container'
            options={options}
            defaultZoom={12.8}
            onLoad = {onLoad}
            defaultCenter={{lat: -1.394782568744898,lng: -48.41606140136719}}
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

        {regions.regionBounds.map((item) => {
            return(<>
                <MarkerF position={item[0]}/>
                <MarkerF position={item[1]}/>
            </>
                
            )
        })}
            
        </GoogleMap>
    )
}

export default Maps