import React from "react";
import {useLoadScript} from '@react-google-maps/api'
import Map from '../components/Map/Map'

function Main(){
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: 'AIzaSyCGhU6kv2oz6AIW4LbG-eO3AraMqmIsAdw',
        libraries: ['places','visualization']
    })

    if(!isLoaded) return( <div className="Page" >Loading...</div>)
    return <div className="Page">
        <Map />
    </div>
}
export default Main