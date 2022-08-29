import React,{useEffect, useState, useRef} from "react";
import {useLoadScript} from '@react-google-maps/api'
import Maps from '../components/Map/Maps'
import RegionsInitVectors from "../components/Map/RegionsInitVectors";
import ButtonRedo from "../components/buttons/ButtonRedo";
import RegionSelector from "../components/selectors/RegionSelector"
import RegionSelectedHeader from "../components/headers/RegionSelectedHeader"
import RegionsGetFitBounds from "../components/Map/RegionsGetFitBounds";
import LoadingOverlay from "../components/LoadingOverlay"
import api from "../services/api";
import Regions from "../data/Regions";

const regionsInitVectors = RegionsInitVectors()

const regionsGetFitBounds = RegionsGetFitBounds()

function Main(){
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyCGhU6kv2oz6AIW4LbG-eO3AraMqmIsAdw'
    });
    const [zoom, setZoom] = useState(12)
    const [center, setCenter] = useState({lat: -1.394782568744898,lng: -48.41606140136719})
    const [regionSelected, setRegionSelected] = useState(null);

    //headers

    const [controlArray, setControlArray] = useState([true,true,true,true,true,true,false])
    const [controlArrayTheme, setControlArrayTheme] = useState([false,false,false,false,false])
    const arraySupport = [28,33,60,15]
    const [dataApi, setApiData] = useState([])
    const [inLoadScreen, setInLoadScreen] = useState(false)
    const [numPages, setNumPages] = useState()






    function handleSetRegion(index){
        setRegionSelected(index)
        const id = Regions[index].id
        fetchApiData(id)
    }

    async function fetchApiData(id){
        const page = 1
        setInLoadScreen(true)
        // await api.get('regions/'+id+'/activities?page='+page+'&subclasses[]=28&subclasses[]=33&subclasses[]=60&subclasses[]=15&subclasses[]=74&subclasses[]=71&subclasses[]=3',).then((res) => {

        //     setNumPages(res.last_page)
        // })
        // .catch((err) =>{console.log(err)})



        setInLoadScreen(false)
        console.log(numPages)
    }



    if(!isLoaded){
        return <div>Loading...</div>
    }else{// a página Main começa aqui
        //Items da tela inicial
        return(<>
        <LoadingOverlay Loading={inLoadScreen}/>


        <ButtonRedo onClick={() => setRegionSelected(null)} setRegion={regionSelected}/>

        <RegionSelector
            labels={regionsInitVectors.regionsLabel}
            onChange={handleSetRegion}
            setRegion={regionSelected}
        />

        <RegionSelectedHeader
            labels={regionsInitVectors.regionsLabel}
            setRegion={regionSelected}
            controlArray={controlArray}
            onChange={setControlArray}
            controlArrayTheme={controlArrayTheme}
            onChange2={setControlArrayTheme}
        />
        
        {regionSelected !== null ?
         (
            <>  
                <Maps 
                    center={center}
                    zoom={zoom}
                    view={regionsGetFitBounds.regionBounds[regionSelected]}
                    region={regionSelected}
                    controlArray={controlArray}

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
                    view={regionsGetFitBounds.allRegionsBounds}
                />
            </>
         )}
            
        </>)
    }
}
export default Main