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

    //headersSelectedRegion

    const [controlArray, setControlArray] = useState([true,true,true,true,true,true,false])
    const [subClassesArray, setSubClassesArray] = useState([])
    const [inLoadScreen, setInLoadScreen] = useState(false)
    const [regionId, setRegionId] = useState()
    const [fullData, setFullData] = useState([])

    //headersSelectedRegion

    function handleSetRegion(index){
        setRegionSelected(index)
        setRegionId(Regions[index].id)
        setInLoadScreen(true)
        setTimeout(function(){
            setInLoadScreen(false)
        },1800)
    }

    useEffect(() => {
        getFullData(regionId, subClassesArray)
    }, [subClassesArray])

    useEffect(() => {
        console.log(fullData)
    },[fullData])

    async function getFullData(regionId, subClassesArray){
        let currentPage = 1
        let maxNumPage = 1

        if(subClassesArray.length > 0){
            setInLoadScreen(true)
            let RegionActivities = `regions/${regionId}/activities`
            let RegionsSubclasses = ''
            subClassesArray.forEach((element) => {
                RegionsSubclasses = RegionsSubclasses + `&subclasses[]=${element}` 
            })

            let currentData = []

            for ( currentPage; currentPage <= maxNumPage ; currentPage++){
                let newData = []
                let page = `?page=${currentPage}`
                await api.get(RegionActivities + page + RegionsSubclasses).then((res) => {
                    maxNumPage = res.data.last_page;
                    res.data.data.forEach((element) => {
                        let coords = JSON.parse(element.geometry)
                        newData.push({
                            id: element.id, 
                            subId: element.subclass_id,
                            coord: {lat: coords.coordinates[1], lng: coords.coordinates[0]}, 
                            name: element.name,
                            subName: element.subclass.name,
                            color: element.subclass.class.related_color,
                            icon: element.subclass.related_icon.path})
                    })
                currentData = [...currentData, ...newData]
                })
            }
            
            setFullData(currentData)
            
        setInLoadScreen(false)
        }else{
            setFullData([])
        }
    }




    if(!isLoaded){
        return <div>Loading...</div>
    }else{// a página Main começa aqui
        //Items da tela inicial
        return(<>
        <LoadingOverlay Loading={inLoadScreen}/>


        <ButtonRedo 
            onClick={() => {
                setRegionSelected(null)
                setSubClassesArray([])
            }} setRegion={regionSelected}/>

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
            setSubClassesArray={setSubClassesArray}
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
                    fullData={fullData}

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