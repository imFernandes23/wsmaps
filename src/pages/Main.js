import React,{useState} from "react";
import {useLoadScript} from '@react-google-maps/api'
import Maps from '../components/Map/Maps'
import RegionsInitVectors from "../components/Map/RegionsInitVectors";
import ButtonRedo from "../components/buttons/ButtonRedo";
import RegionSelector from "../components/selectors/RegionSelector"
import RegionSelectedHeader from "../components/headers/RegionSelectedHeader"
import RegionsGetFitBounds from "../components/Map/RegionsGetFitBounds";

const regionsInitVectors = RegionsInitVectors()

const regionsGetFitBounds = RegionsGetFitBounds()

console.log(regionsGetFitBounds)

function Main(){
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyCGhU6kv2oz6AIW4LbG-eO3AraMqmIsAdw'
    });
    const [zoom, setZoom] = useState(12)
    const [center, setCenter] = useState({lat: -1.394782568744898,lng: -48.41606140136719})
    const [regionSelected, setRegionSelected] = useState(null);

    
    function handleSetRegion(index){
        setRegionSelected(index)
    }


    if(!isLoaded){
        return <div>Loading...</div>
    }else{// a página Main começa aqui
        //Items da tela inicial
        return(<>
        <ButtonRedo onClick={() => setRegionSelected(null)} setRegion={regionSelected}/>

        <RegionSelector
            labels={regionsInitVectors.regionsLabel}
            onChange={handleSetRegion}
            setRegion={regionSelected}
        />

        <RegionSelectedHeader
            labels={regionsInitVectors.regionsLabel}
            setRegion={regionSelected}
        />
        
        {regionSelected !== null ?
         (
            <>  
                <Maps 
                    center={center}
                    zoom={zoom}
                />
            </>
         ):
         (
            <>                 
                <Maps 
                    center={center} 
                    zoom={zoom} 
                    polygonsInit={regionsInitVectors}
                    polyInitOnClick={handleSetRegion}
                />
            </>
         )}
            
        </>)
    }
}
export default Main