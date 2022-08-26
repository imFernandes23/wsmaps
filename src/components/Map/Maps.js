import React, {useMemo, useEffect, useState, useCallback}  from "react";
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import { MapStyle } from "./MapStyle";
import InitialRegions from './InitialRegions'
import RegionsDraw from './RegionsDraw'


function Maps(props){
    const options = useMemo(() => ({
        disableDefaultUI: true,
        clickableIcons: false,
        styles: MapStyle,
    
    }), [])

    const [map, setMap] = useState(null);

    const onLoad = useCallback((map) => setMap(map),[])

    useEffect(() => {
        if(map){
            const bounds = new window.google.maps.LatLngBounds();
            props.view.forEach(marker => {
                bounds.extend(marker)
            })
            
            map.fitBounds(bounds)


        }
    }, [map, props.view, props.polygonsInit])

    return(
        <GoogleMap 

            mapContainerClassName='map-container'
            options={options}
            defaultZoom={14}
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

            {props.regionDetails !== undefined ? (<>

            </>):(<></>)} 
        
            {props.region !== undefined ? (<>
            <RegionsDraw 
                region={props.region}
                controlArray={props.controlArray}
            />
            </>):(<></>)}
            
        </GoogleMap>
    )
}

export default Maps