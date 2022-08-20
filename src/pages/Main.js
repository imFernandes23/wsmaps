import React,{useState} from "react";
import {useLoadScript, MarkerF} from '@react-google-maps/api'
// import Map from '../components/Map/Map'
// import Index from "../components/Map/Index"
import Maps from '../components/Map/Maps'

function Main(){
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyCGhU6kv2oz6AIW4LbG-eO3AraMqmIsAdw'
    });
    const [zoom, setZoom] = useState(12.8)
    const [center, setCenter] = useState({lat: -1.394782568744898,lng: -48.41606140136719})
    const [regionSelected, setRegionSelected] = useState(null);


    const markers = [{lat: -1.394782868744898,lng: -48.41606170136719},
    {lat: -1.394282568744898,lng: -48.41604140136719},
{lat: -1.393782568744898,lng: -48.41605140136719}]


    if(!isLoaded){
        return <div>Loading...</div>
    }else{// a página Main começa aqui
        return(<>{regionSelected !== null ?
         (
            <></>
         ):
         (
            <>
                <Maps center={center} zoom={zoom} markers={markers}/>
            </>
         )}
            
        </>)
    }
}
export default Main