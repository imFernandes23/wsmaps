import React, {useState, useEffect} from "react";
import RegionChart from "../components/selectors/RegionChart";
import {StatisticData} from "../data/StatisticData";
import ChartsTable from "../components/tables/ChartsTable";

function Statistics(){
    const [controlChart , setControlChart] = useState([true, true, true, true, true, true, true])

    useEffect(() => {
        console.log('mofidy data')
    },[controlChart])

    return(
        <div className="Page">
            <RegionChart
                data={StatisticData}
                controlChart={controlChart}
                setControlChart={setControlChart}
            />

            <ChartsTable/>
        </div>
    )
}
export default Statistics