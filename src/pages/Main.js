import React,{useState} from "react";
import {useLoadScript, MarkerF} from '@react-google-maps/api'
// import Map from '../components/Map/Map'
// import Index from "../components/Map/Index"
import Maps from '../components/Map/Maps'
import RegionsInitVectors from "../components/Map/RegionsInitVectors";
import ButtonRedo from "../components/buttons/ButtonRedo";
import RegionsSelector from "../components/selectors/RegionsSelector"

const regionsInitVectors = RegionsInitVectors()



function Main(){
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyCGhU6kv2oz6AIW4LbG-eO3AraMqmIsAdw'
    });
    const [zoom, setZoom] = useState(12)
    const [center, setCenter] = useState({lat: -1.394782568744898,lng: -48.41606140136719})
    const [regionSelected, setRegionSelected] = useState(null);


    const markers = [{lat: -1.394782868744898,lng: -48.41606170136719},
    {lat: -1.394282568744898,lng: -48.41604140136719},
{lat: -1.393782568744898,lng: -48.41605140136719}]
    
    function handleSetRegion(index){
        setRegionSelected(index)
    }

    console.log(regionSelected)

    if(!isLoaded){
        return <div>Loading...</div>
    }else{// a página Main começa aqui
        return(<>
        <ButtonRedo onClick={() => setRegionSelected(null)} setRegion={regionSelected}/>
        
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