import React from "react";
import { MarkerF, PolygonF, PolylineF } from "@react-google-maps/api";
import Regions from "../../data/Regions";

export default function RegionsDraw(props){

    const region = Regions[props.region]



    function DrawAreaLimits(){
        const regionLimits = []
        region.limites.features[0].geometry.coordinates[0].map(path => regionLimits.push({lat: path[1], lng:path[0]}))

        const optionLimits = (
            {
                fillColor: "#fff",
                fillOpacity: 0.6,
                strokeColor: "#000",
                strokeOpacity: 1,
                strokeWeight: .8,
                clickable: false,
                draggable: false,
                editable: false,
                geodesic: false,
                zIndex: 1
            }
        )

        return(<> 
            <PolygonF  key={region.nome} path={regionLimits} options={optionLimits}/>
        </>)
        
    }

    function DrawAreaAsphalt(){

        const asphaltArray = []

        const asphaltOptions = {
            fillColor: "#ffad29",
            fillOpacity: .8,
            strokeColor: "#ffad29",
            strokeOpacity: .8,
            strokeWeight: 1.5,
            clickable: false,
            draggable: false,
            editable: false,
            geodesic: false,
            zIndex: 2
        }

        if(Regions[props.region].Asphalt === null){
            
        }else{
            const Asphalt = Regions[props.region].Asphalt
 

            Asphalt.features.forEach((feature, index) => {

                if(feature.geometry.type === 'Polygon'){
                    feature.geometry.coordinates.forEach( coords => {
                        const arrayPath = []

                        coords.map(path => arrayPath.push({lat:path[1], lng:path[0]}))

                        asphaltArray.push(arrayPath)
                    })
                }
            })

        }

        return asphaltArray.map((path, index) => {
            return(<PolygonF path={path} options={asphaltOptions} key={`Asphalt_${index}`}/>)
        })

    }

    function DrawAreaBlock(){

        const blockArray = []

        const blockOptions = {
            fillColor: "#7C7C7C",
            fillOpacity: .8,
            strokeColor: "#7C7C7C",
            strokeOpacity: .8,
            strokeWeight: 1.5,
            clickable: false,
            draggable: false,
            editable: false,
            geodesic: false,
            zIndex: 3
        }

        if(Regions[props.region].Block === null){

        }else{
            const Block = Regions[props.region].Block
   

            Block.features.forEach((feature, index) => {
   
                if(feature.geometry.type === 'Polygon'){
                    feature.geometry.coordinates.forEach( coords => {
                        const arrayPath = []

                        coords.map(path => arrayPath.push({lat:path[1], lng:path[0]}))

                        blockArray.push(arrayPath)
                    })
                }
            })

        }

        return blockArray.map((path, index) => {
            return(<PolygonF path={path} options={blockOptions} key={`Block_${index}`}/>)
        })

    }

    function DrawAreaUnpaved(){

        const unpavedArray = []

        const unpavedOptions = {
            fillColor: "#EFE944",
            fillOpacity: .8,
            strokeColor: "#EFE944",
            strokeOpacity: .8,
            strokeWeight: 1.5,
            clickable: false,
            draggable: false,
            editable: false,
            geodesic: false,
            zIndex: 4
        }

        if(Regions[props.region].Unpaved === null){

        }else{
            const Unpaved = Regions[props.region].Unpaved

            Unpaved.features.forEach((feature, index) => {
 
                if(feature.geometry.type === 'Polygon'){
                    feature.geometry.coordinates.forEach( coords => {
                        const arrayPath = []

                        coords.map(path => arrayPath.push({lat:path[1], lng:path[0]}))

                        unpavedArray.push(arrayPath)
                    })
                }
            })

        }

        return unpavedArray.map((path, index) => {
            return(<PolygonF path={path} options={unpavedOptions} key={`Unpaved_${index}`}/>)
        })

    }

    function DrawAreaFlooding(){

        const floodingArray = []

        const floodingOptions = {
            fillColor: "#005FFF",
            fillOpacity: 1,
            strokeColor: "#005FFF",
            strokeOpacity: 1,
            strokeWeight: 2,
            clickable: false,
            draggable: false,
            editable: false,
            geodesic: false,
            zIndex: 5
        }

        if(Regions[props.region].Flooding === null){

        }else{
            const Flooding = Regions[props.region].Flooding
            
            Flooding.features.forEach((feature, index) => {
                if(feature.geometry.type === 'LineString'){
                    const arrayPath = []
                    feature.geometry.coordinates.forEach( coords => {
                        arrayPath.push({lat: coords[1], lng:coords[0]})

                        
                    })
                    floodingArray.push(arrayPath)
                }
                
            })

        }

        return floodingArray.map((path, index) => {
        return(<PolylineF path={path} options={floodingOptions} key={`Flooding_${index}`}/>)
        })

    }

    function DrawAreaRepairs(){

        const repairsArray = []

        const dashSymbol = {
            path: "M 0,-1 0,1 ",
            strokeOpacity: 1,
            scale: 1.5,
        };

        const repairsOptions = {
            fillColor: "#FFF",
            fillOpacity: 1,
            strokeColor: "#F54516",
            strokeOpacity: 0,
            strokeWeight: 1.5,
            clickable: false,
            draggable: false,
            editable: false,
            geodesic: false,
            zIndex: 6,
            icons: [{
                icon: dashSymbol,
                offset: '2',
                repeat:"10px"
            },],
        }

        if(Regions[props.region].Repairs === null){
            console.log('sem dados')
        }else{
            const Repairs = Regions[props.region].Repairs
            
            Repairs.features.forEach((feature, index) => {
                if(feature.geometry.type === 'LineString'){
                    const arrayPath = []
                    feature.geometry.coordinates.forEach( coords => {
                        arrayPath.push({lat: coords[1], lng:coords[0]})

                        
                    })
                    repairsArray.push(arrayPath)
                }
                
            })

        }


        return repairsArray.map((path, index) => {
        return(<PolylineF path={path} options={repairsOptions} key={`Repairs_${index}`}/>)
        })

    }

    function DrawAreaObstructed(){

        const obstructedArray = []

        const circleSymbol = {
            path: "m -2 0 L 2 0",
            strokeOpacity: 1,
            scale: 1.5,
            transform: [{rotate: '50deg'}],
        };

        const obstructedOptions = {
            fillColor: "#FFF",
            fillOpacity: 1,
            strokeColor: "#000",
            strokeOpacity: 0,
            strokeWeight: 1.5,
            clickable: false,
            draggable: false,
            editable: false,
            geodesic: false,
            zIndex: 6,
            icons: [{
                icon: circleSymbol,
                offset: '2',
                repeat:"20px"
            },],
        }

        if(Regions[props.region].Obstructed === null){
            console.log('sem dados')
        }else{
            const Obstructed = Regions[props.region].Obstructed
            
            Obstructed.features.forEach((feature, index) => {
                if(feature.geometry.type === 'LineString'){
                    const arrayPath = []
                    feature.geometry.coordinates.map( coords => (
                        arrayPath.push({lat: coords[1], lng:coords[0]})

                        
                    ))
                    obstructedArray.push(arrayPath)
                }
                
            })

        }

        return obstructedArray.map((path, index) => {
        return(<PolylineF path={path} options={obstructedOptions} key={`Obstructed_${index}`}/>)
        })

    }

    function DrawAreaDisposal(){
        const disposalArray = []

        const icon={
            path: "M17.114,3.923h-4.589V2.427c0-0.252-0.207-0.459-0.46-0.459H7.935c-0.252,0-0.459,0.207-0.459,0.459v1.496h-4.59c-0.252,0-0.459,0.205-0.459,0.459c0,0.252,0.207,0.459,0.459,0.459h1.51v12.732c0,0.252,0.207,0.459,0.459,0.459h10.29c0.254,0,0.459-0.207,0.459-0.459V4.841h1.511c0.252,0,0.459-0.207,0.459-0.459C17.573,4.127,17.366,3.923,17.114,3.923M8.394,2.886h3.214v0.918H8.394V2.886z M14.686,17.114H5.314V4.841h9.372V17.114z M12.525,7.306v7.344c0,0.252-0.207,0.459-0.46,0.459s-0.458-0.207-0.458-0.459V7.306c0-0.254,0.205-0.459,0.458-0.459S12.525,7.051,12.525,7.306M8.394,7.306v7.344c0,0.252-0.207,0.459-0.459,0.459s-0.459-0.207-0.459-0.459V7.306c0-0.254,0.207-0.459,0.459-0.459S8.394,7.051,8.394,7.306",
            scale: 1,
            strokeColor: "#A3ABA2",
            fillOpacity: 1,
            anchor: new window.google.maps.Point(10,10),
            
        }

        if(Regions[props.region].Disposal === null){
            console.log('não há dados')
        }else{
            const Disposal = Regions[props.region].Disposal

            Disposal.features.forEach(item => {
                const point = item.geometry.coordinates

                disposalArray.push({lat:point[1], lng:point[0]})
            })
        }

        return disposalArray.map((path, index) => {
            return(<MarkerF key={index} position={path} icon={icon} clickable={false}/>)
        })
    }


    return(<>
        <div key={'areaLimits'}>
            {DrawAreaLimits()}
        </div>
        {props.controlArray[0] ? (<>
            <div key={'areaAsphalt'}>{DrawAreaAsphalt()}</div>
        </>): ('')}
        {props.controlArray[1] ? (<>
            <div key={'areaBlock'}>{DrawAreaBlock()}</div>
        </>): ('')}
        {props.controlArray[2] ? (<>
            <div key={'areaUnpaved'}>{DrawAreaUnpaved()}</div>
        </>): ('')}
        {props.controlArray[3] ? (<>
            <div key={'areaFlooding'}>{DrawAreaFlooding()}</div>
        </>): ('')}
        {props.controlArray[4] ? (<>
            <div key={'areaRepairs'}>{DrawAreaRepairs()}</div>
        </>): ('')}
        {props.controlArray[5] ? (<>
            <div key={'areaObstructed'}>{DrawAreaObstructed()}</div>
        </>): ('')}
        {props.controlArray[6] ? (<>
            <div key={'areaDisposal'}>{DrawAreaDisposal()}</div>
        </>): ('')}
    </>)
}