import React, {useMemo, onLoad, useState} from "react";
import { GoogleMap, useLoadScript, MarkerF, PolygonF } from "@react-google-maps/api";
import {MapStyle} from "./MapStyle";
import InitialRegions from "./InitialRegions";
import Regions from "../../data/Regions"
import ButtonRedo from "../buttons/ButtonRedo";
import RegionsSelector from "../selectors/RegionsSelector";


export default function Index() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyCGhU6kv2oz6AIW4LbG-eO3AraMqmIsAdw'
    });

    if (!isLoaded) return <div>Loading..</div>
    return <Map />;
}

function Map(){
    const [regionSelected, setRegionSelected] = useState(null);
    const center = useMemo(() => ({lat: -1.394782568744898,lng: -48.41606140136719}),  [])
    const options = useMemo(() => ({
        disableDefaultUI: true,
        clickableIcons: false,
        styles: MapStyle,
        
    }), [])

    console.log(regionSelected)

    function handleSetRegion(id) {
        console.log("selecionei a região" + id)
        setRegionSelected(id)
        
    }

    return (
        <>  
            
            <GoogleMap 
                zoom={12.8} //useState
                center={center} //useState
                mapContainerClassName="map-container"
                options={options}
                
            >
            <RegionsSelector 
            regioes={Regions}
            onChange={setRegionSelected}
            />
            {regionSelected !== null ? 
                (<ButtonRedo onClick={() => setRegionSelected(null)}/>)
                    : 
                Regions.map((item) => {
                return(<InitialRegions 
                    key={item.id}
                    paths={item}
                    label={item.nome}
                    onClick={() => handleSetRegion(item.id)}
                />)
            })}
            </GoogleMap>
        </>
    )
}