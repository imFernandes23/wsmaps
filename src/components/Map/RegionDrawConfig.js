import React from "react";
import { MarkerF, OverlayView } from "@react-google-maps/api";
import Regions from "../../data/Regions";

function RegionDrawConfig(props){

    function DrawAreaDisposal(){
        const disposalArray = []

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
            return(
            
            <OverlayView position={path} key={index} mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
                
                   <div 
                        style={{'--MainColor': '#8CDC04'}} 
                        className='marker'
                   >
                    
                   </div> 

            </OverlayView>
            
            )
        })
    }

    return(<>
        <div>
        {props.controlArrayConfig[1] ? (<>
            <div key={'areaDisposal'}>{DrawAreaDisposal()}</div>
        </>): ('')}
        </div>
    </>)


}

export default RegionDrawConfig