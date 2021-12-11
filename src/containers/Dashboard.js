import { createMuiTheme, Menu, TableCell, Typography } from '@mui/material'
import React, { useState } from "react";
import { createTheme } from "@mui/material/styles";
import ReactECharts from 'echarts-for-react';

const ct = require("../library/CustomTable");
const getMuiTheme = () => createTheme(ct.customTable());
export default function Dashboard() {
    const [responsive, setResponsive] = useState("vertical");
    const [tableBodyHeight, setTableBodyHeight] = useState("60vh");
    const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");

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

    return (
        <div>
            <div style={{ backgroundColor: '#FEFEFE', padding: '15px 20px' }}>
                <Typography style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>Dasshboard</Typography>
            </div>
            <div style={{ padding: 20, borderRadius: 20 }}>
                <div style={{ backgroundColor: '#FFFFFF', height: '83vh', borderRadius: 20 }}>
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
