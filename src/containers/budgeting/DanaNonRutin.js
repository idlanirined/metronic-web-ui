import { createMuiTheme, Menu, TableCell, Typography } from '@mui/material'
import MUIDataTable from "mui-datatables";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CloseImage from '../../assets/ic_close.png';
import { useHistory } from 'react-router-dom';
import Constant from '../../library/Constants';
import { headOffice } from '../../library/Service';


const ct = require("../../library/CustomTable");
const getMuiTheme = () => createTheme(ct.customTable());

export default function DanaNonRutin() {
    const history = useHistory()
    const [responsive, setResponsive] = useState("vertical");
    const [tableBodyHeight, setTableBodyHeight] = useState("60vh");
    const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
    const [searchBtn, setSearchBtn] = useState(true);
    const [downloadBtn, setDownloadBtn] = useState(true);
    const [printBtn, setPrintBtn] = useState(true);
    const [viewColumnBtn, setViewColumnBtn] = useState(true);
    const [filterBtn, setFilterBtn] = useState(true);
    const [visibleAdd, setVisibleAdd] = useState(false)
    const [visibleEdit, setVisibleEdit] = useState(false)
    const [visibleDelete, setVisibleDelete] = useState(false)
    const [dataHeadOffice, setDataHeadOffice] = useState(null)
    const [dataNonRutin, setDataNonRutin] = useState([])
    const [access, setAccess] = useState("")
    const [dataSelected, setDataSelected] = useState(null)

    const columns = [
        "NO",
        "DANA PENGAJUAN (Rp)",
        "TAHUN",
        "REGION PENGAJU",
        "TANGGAL PENGAJUAN",
        {
            name: "STATUS",
            label: "STATUS",
            options: {
                sort: false,
                filter: false,
                customHeadRender: (columnMeta) => (
                    <TableCell key={columnMeta.index} style={{}}>
                        <Typography style={{ color: '#2a9c6c', fontSize: 14, fontWeight: 'bold', textAlign: 'center' }}>{columnMeta.label}</Typography>
                    </TableCell>
                ),
                customBodyRender: (val, tableMeta) => {
                    return (
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div
                                onClick={() => null}
                                id="basic-button" aria-haspopup="true" aria-controls="basic-menu" style={{ width: 90, height: 40, backgroundColor: val == 'draft' ? '#ff8c51' : '#05B721', borderRadius: 10, display: 'flex', justifyContent: 'center' }}>
                                <Typography style={{ color: '#ffffff', fontSize: 14, fontWeight: '500', textAlign: 'center', alignSelf: 'center' }}>{val}</Typography>
                            </div>
                        </div>
                    )
                }
            }
        },
        {
            name: "ACTION",
            label: "ACTION",
            options: {
                sort: false,
                filter: false,
                customHeadRender: (columnMeta) => (
                    <TableCell key={columnMeta.index} style={{}}>
                        <Typography style={{ color: '#2a9c6c', fontSize: 14, fontWeight: 'bold', textAlign: 'center' }}>{columnMeta.label}</Typography>
                    </TableCell>
                ),
                customBodyRender: (val, tableMeta) => {
                    return (
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div
                                onClick={() => {
                                    history.push({
                                        pathname: '/edit-non-rutin',
                                        state: {
                                            selected: tableMeta.rowData,
                                            dataHeadOffice,
                                            access
                                        }
                                    })
                                }}
                                id="basic-button" aria-haspopup="true" aria-controls="basic-menu" style={{ width: 90, height: 40, backgroundColor: '#C9F7F5', borderRadius: 10, display: 'flex', justifyContent: 'center', marginRight: 10 }}>
                                <Typography style={{ color: '#1bc5bd', fontSize: 14, fontWeight: '500', textAlign: 'center', alignSelf: 'center' }}>{access == 'HO-1'? 'Approval' : 'Edit'}</Typography>
                            </div>
                            <div
                                 onClick={() => {
                                    setDataSelected({
                                        id: tableMeta.rowData[7],
                                        regionID: tableMeta.rowData[8]
                                    })
                                    setVisibleDelete(true)
                                }}
                                id="basic-button" aria-haspopup="true" aria-controls="basic-menu" style={{ width: 90, height: 40, backgroundColor: '#C9F7F5', borderRadius: 10, display: 'flex', justifyContent: 'center' }}>
                                <Typography style={{ color: '#1bc5bd', fontSize: 14, fontWeight: '500', textAlign: 'center', alignSelf: 'center' }}>Delete</Typography>
                            </div>
                        </div>
                    )
                }
            }
        },
        { name: 'id', options: { display: false } },
        { name: 'region_id', options: { display: false } },
    ];

    const options = {
        search: false,
        download: false,
        print: false,
        viewColumns: false,
        filter: false,
        filterType: "dropdown",
        responsive,
        tableBodyHeight,
        tableBodyMaxHeight,
        onTableChange: (action, state) => {
            console.log(action);
            console.dir(state);
        }
    };

    const data = [
        ["1", "JENIS BARANG A", "NAMA USER 1", "2021-11-01 12:00:00", "", "1"],
    ];

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        let dataHeadOffice = JSON.parse(localStorage.getItem(Constant.DATA_HEAD_OFFICE))
        if (dataHeadOffice != null) {
            setDataHeadOffice(dataHeadOffice)
            let dataNonRutins = dataHeadOffice.dana_non_rutin.map((item, index) => {
                return [index + 1, String(item.totalNonRutin).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), item.tahun, item.region.name, item.createdDate, item.status, item.active, item.id, item.region.id]
            })
            setDataNonRutin(dataNonRutins)
            console.log(dataHeadOffice.dana_non_rutin)

        }
        let access = localStorage.getItem(Constant.ACCESS_TOKEN)
        let strAccess = ''
        if (access == 'region1') {
            strAccess = 'RG-1'
        } else if (access == 'region2') {
            strAccess = 'RG-2'
        } else if (access == 'region3') {
            strAccess = 'RG-3'
        } else {
            strAccess = 'HO-1'
        }
        setAccess(strAccess)
    }

    return (
        <div>
            <div style={{ backgroundColor: '#FEFEFE', padding: '15px 20px' }}>
                <Typography style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>Dana Non Rutin</Typography>
            </div>
            <div style={{ padding: 20, borderRadius: 20 }}>
                <div style={{ backgroundColor: '#FFFFFF', height: '83vh', borderRadius: 20 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: 20 }}>
                        <div style={{ width: 300, height: 50, backgroundColor: '#F5F5F5', borderRadius: 10 }}>

                        </div>
                        <div style={{ display: 'flex' }}>
                            <div style={{ width: 120, height: 50, backgroundColor: '#D7EBFF', borderRadius: 10, marginRight: 20, display: 'flex', justifyContent: 'center' }}>
                                <Typography style={{ color: '#009EF7', fontSize: 16, fontWeight: '500', textAlign: 'center', alignSelf: 'center' }}>Filter</Typography>
                            </div>
                            <div style={{ width: 120, height: 50, backgroundColor: '#D7EBFF', borderRadius: 10, marginRight: 20, display: 'flex', justifyContent: 'center' }}>
                                <Typography style={{ color: '#009EF7', fontSize: 16, fontWeight: '500', textAlign: 'center', alignSelf: 'center' }}>Export</Typography>
                            </div>
                            {access.includes('RG') && <div
                                onClick={() => history.push({
                                    pathname: '/tambah-non-rutin',
                                    state: {
                                        dataHeadOffice: dataHeadOffice
                                    }
                                })}
                                style={{ width: 150, height: 50, backgroundColor: '#3699FF', borderRadius: 10, display: 'flex', justifyContent: 'center', cursor: 'pointer' }}>
                                <Typography style={{ color: 'white', fontSize: 16, fontWeight: '500', textAlign: 'center', alignSelf: 'center' }}>Add Non Rutin</Typography>
                            </div>}
                        </div>
                    </div>
                    <ThemeProvider theme={getMuiTheme()}>
                        <MUIDataTable
                            // title={"ACME Employee list"}
                            data={dataNonRutin}
                            columns={columns}
                            options={options}
                        />
                    </ThemeProvider>
                </div>
            </div>

            {/* {visibleAdd && (
                <AddAccount
                    onClose={() => setVisibleAdd(false)}
                />
            )}

            {visibleEdit && (
                <EditAccount
                    onClose={() => setVisibleEdit(false)}
                />
            )} */}

            {visibleDelete && (
                <div className="App app-popup-show">
                    <div className="popup-content background-white" style={{ borderRadius: 8, backgroundColor: 'white' }}>
                        <div className="popup-panel grid grid-2x" style={{ height: 64 }}>
                            <div className="col-1" style={{ maxWidth: "inherit", display: 'flex', alignItems: 'center' }}>
                                <div className="popup-title">
                                    <span style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>Hapus Dana Non Rutin</span>
                                </div>
                            </div>
                            <div className="col-2 content-right" style={{ maxWidth: "inherit", alignSelf: 'center' }}>
                                <button
                                    type="button"
                                    className="btn btn-circle btn-white"
                                    onClick={() => setVisibleDelete(false)}
                                >
                                    <img src={CloseImage} style={{ width: 20, height: 20 }} />
                                </button>
                            </div>
                        </div>
                        <div style={{ height: 200, display: 'flex', justifyContent: 'center', padding: '0 25%' }}>
                            <Typography style={{ fontSize: 20, fontWeight: 'bold', alignSelf: 'center' }}>Anda yakin untuk menghapus data ini?</Typography>
                        </div>
                        <div className="grid grid-2x grid-mobile-none gap-15px" style={{ padding: 20, paddingRight: 50, paddingLeft: 50 }}>
                            <div style={{ justifySelf: 'flex-end', width: 'inherit' }}>
                                <div style={{ height: 60, width: '100%', backgroundColor: '#c4c4c4', display: 'flex', justifyContent: 'center', borderRadius: 10 }}>
                                    <Typography style={{ color: '#464e5f', fontSize: 18, fontWeight: 'bold', textAlign: 'center', alignSelf: 'center' }}>BATAL</Typography>
                                </div>
                            </div>
                            <div style={{ justifySelf: 'flex-end', width: 'inherit' }}>
                                <div
                                    onClick={() => {
                                        headOffice('deleteDanaNonRutin', dataSelected)
                                        getData()
                                        setVisibleDelete(false)
                                    }}
                                    style={{ height: 60, width: '100%', backgroundColor: '#f64e60', display: 'flex', justifyContent: 'center', borderRadius: 10 }}>
                                    <Typography style={{ color: 'white', fontSize: 18, fontWeight: 'bold', textAlign: 'center', alignSelf: 'center' }}>HAPUS</Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
