import React, {useState, useEffect} from "react";
import './ChartsTable.css'
import ApexChart from 'react-apexcharts'
import { StatisticData } from "../../data/StatisticData";

function ChartsTable(props){
    const [labels, setLabels] = useState([])
    const [seriesArea, setSeriesArea] = useState([])
    const [seriesHab, setSeriesHab] = useState([])
    const [seriesTDomi, setSeriesTDomi] = useState([])
    const [seriesTMorad, setSeriesTMorad] = useState([])

    useEffect(() => {
          
        // setLabels(props.data.labels)
        // setSeriesArea(props.data.seriesArea)

        GenerateData(props.controlChart, props.data)

    }, [props.controlChart])   

    function GenerateData(array, data){
        let labels = []
        let seriesArea = []
        let seriesHab = []
        let seriesTDomi = []
        let seriesTMorad = []

        array.forEach((item, index) => {
            if(item === true){
                labels.push(data[index].label)
                seriesArea.push(data[index].area)
                seriesHab.push(data[index].concentracaoPopulacional)
                seriesTDomi.push(data[index].totalDeDomicilios)
                seriesTMorad.push(data[index].totalDeMoradores)

            }
        })

        setLabels(labels)
        setSeriesArea(seriesArea)
        setSeriesHab(seriesHab)
        setSeriesTDomi(seriesTDomi)
        setSeriesTMorad(seriesTMorad)

    }


    console.log(props.data)

    return <div className="charts-table">
        <div className="grafh">
            <ApexChart
                type="pie"
                width={400}
                height={250}
                series={seriesArea}
                options={{
                    title:{text:'Área em km2'},
                    noData:{text:'Carregando...'},
                    labels:labels,
                    dataLabels:{
                        formatter: function(val, opts){
                            return opts.w.config.series[opts.seriesIndex]
                        }
                    }
                }}

            >
            </ApexChart>
            
 
        </div>
        <div className="grafh">
        <ApexChart
                type="pie"
                width={400}
                height={250}
                series={seriesHab}
                options={{
                    title:{text:'Concentração Populacional (Habitantes/km2)'},
                    noData:{text:'Carregando...'},
                    labels:labels,
                    dataLabels:{
                        formatter: function(val, opts){
                            return opts.w.config.series[opts.seriesIndex]
                        }
                    }
                }}

            >
            </ApexChart>
        </div>
        <div className="grafh">
        <ApexChart
                width={400}
                height={250}
                series={[{
                    name: 'Total de Domicílios',
                    type: 'column',
                    data: seriesTDomi
                },{
                    name: 'Total de Moradores',
                    type: 'line',
                    data: seriesTMorad
                }]}
                options={{
                    chart:{
                        height:250,
                        type:'line',
                        toolbar:{
                            show:false,
                        }
                    },
                    stroke:{
                        width:[0, 4]
                    },
                    title: { 
                        text:'Total de domicilios e seus respectivos moradores'
                    },
                    labels: labels,
                    xaxis: {
                        labels:{
                            style:{
                                fontSize: '10px',

                            }
                        },
                        type: 'category',
                    },
                    yaxis:[
                        {
                            title:{
                                text: 'Total de domicilios'
                            },
                        },{
                            opposite: true,
                            title:{
                                text:'Total de moradores'
                            }
                        }
                    ]
                    

                }}

            >
            </ApexChart>
        </div>
        <div className="grafh">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat</div>
        <div className="grafh">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat</div>
        <div className="grafh">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat</div>
        <div className="grafh">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat</div>
        <div className="grafh">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat</div>
    </div>
}

export default ChartsTable