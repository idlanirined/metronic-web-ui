import { createMuiTheme, Menu, TableCell, Typography } from '@mui/material'
import React, { useState, useEffect } from "react";
import { createTheme } from "@mui/material/styles";
import ReactECharts from 'echarts-for-react';
import Constant from '../library/Constants';
import { useHistory } from 'react-router-dom'

const ct = require("../library/CustomTable");
const getMuiTheme = () => createTheme(ct.customTable());
export default function Dashboard() {
    const [responsive, setResponsive] = useState("vertical");
    const [tableBodyHeight, setTableBodyHeight] = useState("60vh");
    const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    const optionss = {
        title: {
            text: 'Alokasi Dana',
            subtext: 'Total Keseluruhan',
            left: 'center'
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
                    { value: 10000000, name: 'Total Alokasi Dana' },
                    { value: 4000000, name: 'Anggaran Terpakai' },
                    { value: 6000000, name: 'Sisa Anggaran' },
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
    };

    const [optionStack, setOptionStack] = useState({
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            bottom: '0%'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: []
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: []
    })

    useEffect(() => {
        setLoading(true)
        getStacked()
    }, [])

    const getStacked = () => {
        let dataHeadOffice = JSON.parse(localStorage.getItem(Constant.DATA_HEAD_OFFICE))
        console.log(dataHeadOffice);
        let x = []
        let dataSisa = []
        let dataTerpakai = []
        let dataAlokasi = []
        dataHeadOffice.alokasi_dana.map((item) => {
            x.push(item.region.id)
            dataSisa.push(item.totalSisa)
            dataTerpakai.push(item.totalTerpakai)
            dataAlokasi.push(item.totalAlokasiDana)
        })
        let xAx = [
            {
                type: 'category',
                data: x
            }
        ]
        let series = [
            {
                name: 'Sisa',
                type: 'bar',
                stack: 'Ad',
                emphasis: {
                    focus: 'series'
                },
                data: dataSisa
            },
            {
                name: 'Penggunaan',
                type: 'bar',
                stack: 'Ad',
                emphasis: {
                    focus: 'series'
                },
                data: dataTerpakai
            },
            {
                name: 'Alokasi',
                type: 'bar',
                stack: 'Ad',
                emphasis: {
                    focus: 'series'
                },
                data: dataAlokasi
            },
        ]
        setOptionStack({
            ...optionStack,
            series: series,
            xAxis: xAx
        })
        console.log(optionStack);
        setLoading(false)
    }

    return (
        <div>
            <div style={{ backgroundColor: '#FEFEFE', padding: '15px 20px' }}>
                <Typography style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>Dasshboard</Typography>
            </div>
            <div style={{ padding: 20, borderRadius: 20 }}>
                <div style={{ backgroundColor: '#FFFFFF', minHeight: '83vh', borderRadius: 20 }}>
                    <div>
                        {!loading && (
                            <div
                                onClick={() => {
                                    history.push({
                                        pathname: '/dashboard-region'
                                    })
                                }}>
                                <ReactECharts
                                    // showLoading={this.state.loading}
                                    style={{ height: 500, width: '100%', marginTop: 50 }}
                                    option={optionStack}
                                />
                            </div>

                        )}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: 20 }}>
                        <div style={{ width: '50%' }}>
                            <ReactECharts
                                // showLoading={this.state.loading}
                                style={{ height: 500, width: '100%', marginTop: 50 }}
                                option={optionss}
                            />
                        </div>
                        <div style={{ width: '50%' }}>
                            <ReactECharts
                                // showLoading={this.state.loading}
                                style={{ height: 500, width: '100%', marginTop: 50 }}
                                option={optionss}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
