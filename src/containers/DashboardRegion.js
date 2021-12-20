import React, { useEffect, useState } from 'react'
import Constant from '../library/Constants'
import { Typography } from '@mui/material'
import ReactECharts from 'echarts-for-react';
import { useHistory } from 'react-router-dom'

export default function DashboardRegion() {
    const history = useHistory()
    const [option, setOption] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        let dataHeadOffice = JSON.parse(localStorage.getItem(Constant.DATA_HEAD_OFFICE))
        console.log(dataHeadOffice);
        let options = []
        dataHeadOffice.alokasi_dana.map((item) => {
            options.push({
                title: {
                    text: 'Report Budget',
                    subtext: item.region.name,
                    left: 'left',
                    show: true
                },
                tooltip: {
                    trigger: `item`
                },
                legend: {
                    orient: 'horizontal',
                    bottom: '1',
                    left: '250'
                },
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: '50%',
                        data: [
                            { value: item.totalTerpakai, name: 'Anggaran Terpakai' },
                            { value: item.totalSisa, name: 'Sisa Anggaran' },
                        ],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            })
        })
        setOption(options)
        console.log(options);
    }

    return (
        <div>
            <div style={{ backgroundColor: '#FEFEFE', padding: '15px 20px' }}>
                <Typography style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>Dasshboard</Typography>
            </div>
            <div style={{ padding: 20, borderRadius: 20 }}>
                <div style={{ backgroundColor: '#FFFFFF', minHeight: '83vh', borderRadius: 20 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: 20 }}>
                        <div>
                            <Typography style={{ fontSize: 20, fontWeight: 'bold' }}>Data Penggunaan Anggaran</Typography>
                            <Typography style={{ fontSize: 70, fontWeight: 'bold' }}>Head Office</Typography>
                            <div
                                onClick={() => history.goBack()}
                                style={{ marginTop: 20, backgroundColor: '#3699FF', padding: '10px 20px', width: 150, borderRadius: 5, cursor: 'pointer' }}>
                                <Typography style={{ fontSize: 16, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Back</Typography>
                            </div>
                        </div>
                        <div style={{ width: '50%' }}>
                            {option.length > 0 && option.map((item, index) => {
                                return (
                                    <div style={{ width: '100%', padding: 10, border: 'solid 1px #B5B5C3', borderRadius: 20, display: 'flex', marginTop: index !== 0 && 20 }}>
                                        <div style={{}}>

                                        </div>
                                        <ReactECharts
                                            // showLoading={this.state.loading}
                                            style={{ height: 500, width: '100%', }}
                                            option={item}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
