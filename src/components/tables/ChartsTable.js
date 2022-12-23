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
    const [seriesRenTotal, setSeriesRenTotal] = useState([])
    const [seriesRenPerC, setSeriesRenPerC] = useState([])
    const [seriesMedMorad, setSeriesMedMorad] = useState([])
    const [seriesRendaMedChefFM, setSeriesRendaMedChefFM] = useState([])
    const [seriesRendaMedPO, setSeriesRendaMedPO] = useState([])

    useEffect(() => {

        GenerateData(props.controlChart, props.data)

    }, [props.controlChart])   

    function GenerateData(array, data){
        let labels = []
        let seriesArea = []
        let seriesHab = []
        let seriesTDomi = []
        let seriesTMorad = []
        let seriesRenTotal = []
        let seriesRenPerC = []
        let seriesMedMorad = []
        let seriesRendaMedChefFM = []
        let seriesRendaMedPO = []


        array.forEach((item, index) => {
            if(item === true){
                labels.push(data[index].label)
                seriesArea.push(data[index].area)
                seriesHab.push(data[index].concentracaoPopulacional)
                seriesTDomi.push(data[index].totalDeDomicilios)
                seriesTMorad.push(data[index].totalDeMoradores)
                seriesRenTotal.push(data[index].rendimentoTotal)
                seriesRenPerC.push(data[index].rendimentoPerCapita)
                seriesMedMorad.push(data[index].mediaDeMoradoresEmDomicilios)
                seriesRendaMedChefFM.push(data[index].rendaMediaDosChefesDeFamilia)
                seriesRendaMedPO.push(data[index].rendaMediaDasPessoasOcupadas)
                

            }
        })

        setLabels(labels)
        setSeriesArea(seriesArea)
        setSeriesHab(seriesHab)
        setSeriesTDomi(seriesTDomi)
        setSeriesTMorad(seriesTMorad)
        setSeriesRenTotal(seriesRenTotal)
        setSeriesRenPerC(seriesRenPerC)
        setSeriesMedMorad(seriesMedMorad)
        setSeriesRendaMedChefFM(seriesRendaMedChefFM)
        setSeriesRendaMedPO(seriesRendaMedPO)

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
                    noData:{text:'Insira regiões.'},
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
                    noData:{text:'Insira regiões.'},
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
                        width:[0, 2]
                    },
                    title: { 
                        text:'Total de domicílios e seus respectivos moradores'
                    },
                    noData:{text:'Insira regiões.'},
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
        <div className="grafh">
        <ApexChart
                width={400}
                height={250}
                series={[{
                    name: 'Rendimento Total',
                    type: 'column',
                    data: seriesRenTotal
                },{
                    name: 'Rendimento per capita',
                    type: 'line',
                    data: seriesRenPerC
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
                        width:[0, 2]
                    },
                    title: { 
                        text:'Rendimento total e per capita dos domicílios (R$)'
                    },
                    noData:{text:'Insira regiões.'},
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
                                text: 'Rendimento Total'
                            },
                            labels:{
                                formatter: function (value) {
                                    return (value / 1000000).toFixed(1) + ' M'
                                }
                            }
                        },{
                            opposite: true,
                            title:{
                                text:'Rendimnento Per capita'
                            }
                        }
                    ]
                    

                }}
            >
            </ApexChart>
        </div>
        <div className="grafh">
        <ApexChart
                width={400}
                height={250}
                series={[
                {
                    name: 'Média de moradores em domicílios',
                    type: 'column',
                    data: seriesMedMorad
                },    
                {
                    name: 'Renda média dos chefes de familia',
                    type: 'line',
                    data: seriesRendaMedChefFM
                },{
                    name: 'Renda média das pessoas ocupadas',
                    type: 'line',
                    data: seriesRendaMedPO
                },
                ]}
                options={{
                    chart:{
                        height:250,
                        type:'line',
                        toolbar:{
                            show:false,
                        }
                    },
                    stroke:{
                        width:[0 , 2, 2 ]
                    },
                    title: { 
                        text:'Total de domicílios e seus respectivos moradores'
                    },
                    noData:{text:'Insira regiões.'},
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
                                text: 'Média de moradores'
                            },
                        },{ 
                            opposite:true,
                            title:{
                                text:'Renda média em (R$)'
                            },
                        },{
                            opposite: true,
                            min: 0,
                            max: 1200,
                            show:false
                        }
                    ]
                    

                }}
            >
            </ApexChart>
        </div>
        <div className="grafh">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat</div>
        <div className="grafh">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat</div>
        <div className="grafh">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat</div>
    </div>
}

export default ChartsTable