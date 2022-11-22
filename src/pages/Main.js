import React,{useEffect, useState} from "react";
import {useLoadScript} from '@react-google-maps/api'
import Maps from '../components/Map/Maps'
import RegionsInitVectors from "../components/Map/RegionsInitVectors";
import RegionSelect from "../components/selectors/RegionSelect";
import RegionSelectedHeader from "../components/headers/RegionSelectedHeader"
import RegionsGetFitBounds from "../components/Map/RegionsGetFitBounds";
import LoadingOverlay from "../components/LoadingOverlay"
import api from "../services/api";
import Regions from "../data/Regions";

const regionsInitVectors = RegionsInitVectors()

let regionsGetFitBounds = RegionsGetFitBounds()

function Main(){
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`,
    });
    const [regionSelected, setRegionSelected] = useState(7);
    const [fitBounds, setFitBounds] = useState()

    //headersSelectedRegion



    const [controlArray, setControlArray] = useState([true,false,true,false,false,false,false])
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
        },1000)
    }

    useEffect(() => {
        getFullData(regionId, subClassesArray)
        if(regionSelected === null){
            setFitBounds(regionsGetFitBounds.allRegionsBounds)
        }else{
            setFitBounds(regionsGetFitBounds.regionBounds[regionSelected])
        }

    }, [subClassesArray, regionId, regionSelected, setFitBounds])


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

        <RegionSelect
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
            regionId={regionId}
            setFullData={setFullData}
            backButton={() => {
                setRegionSelected(null)
                setSubClassesArray([])
            }}
        />
        
        {regionSelected !== null ?
         (
            <>  
                <Maps 
                    view={fitBounds}
                    region={regionSelected}
                    controlArray={controlArray}
                    fullData={fullData}

                />
            </>
         ):
         (
            <>                 
                <Maps 
                    polygonsInit={regionsInitVectors}
                    polyInitOnClick={handleSetRegion}
                    view={fitBounds}
                />
            </>
         )}
            
        </>)
    }
}
export default Main