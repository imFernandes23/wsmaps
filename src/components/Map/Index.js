import React, {useMemo, useState} from "react";
import { GoogleMap, useLoadScript} from "@react-google-maps/api";
import {MapStyle} from "./MapStyle";
import InitialRegions from "./InitialRegions";
import Regions from "../../data/Regions"
import ButtonRedo from "../buttons/ButtonRedo";
import RegionsSelector from "../selectors/RegionsSelector";
import RegionsHeader from "../headers/RegionSelected";


export default function Index() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyCGhU6kv2oz6AIW4LbG-eO3AraMqmIsAdw'
    });

    if (!isLoaded) return <div>Loading..</div>
    return <Map />;
}

function Map(){
    const [regionSelected, setRegionSelected] = useState(null); // id da região selecionada no momento
    const [center, setCenter] = useState({lat: -1.394782568744898,lng: -48.41606140136719})
    const [zoom, setZoom] = useState(12.8)
    const options = useMemo(() => ({
        disableDefaultUI: true,
        clickableIcons: false,
        styles: MapStyle,
        
    }), [])


    function handleSetRegion(id) {
        console.log("selecionei a região com o id " + id)
        setRegionSelected(id)
    }

    return (
        <>  
            
            <GoogleMap 
                zoom={zoom}
                center={center}
                mapContainerClassName="map-container"
                options={options}
                
            >
            
            {regionSelected !== null ? 
                (<>
                    <ButtonRedo onClick={() => setRegionSelected(null)}/>
                    <RegionsHeader id={regionSelected}/>

                </>)
                    : (<>
                {Regions.map((item) => {
                return(<InitialRegions 
                    key={item.id}
                    paths={item}
                    label={item.nome}
                    onClick={() => handleSetRegion(item.id)}
                />)})}
                    <RegionsSelector 
                        regioes={Regions}
                        onChange={setRegionSelected}/>

                </>)}
            </GoogleMap>
        </>
    )
}