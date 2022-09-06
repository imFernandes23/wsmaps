import React from "react";
import api from "../../services/api";
import { MarkerF } from "@react-google-maps/api";
import { useState, useEffect} from  'react'

function ThemesDrawer(props){
    const [subClassesArray, setSubClassesArray] = useState(props.subClassesArray)
    const [regionId, setRegionId ] = useState(props.regionId)
    const [fullData, setFullData ] = useState([])

    useEffect(() => {
        console.log(props.subClassesArray)
        
    },[props.subClassesArray])



}

export default ThemesDrawer