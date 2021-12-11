import { createMuiTheme, Menu, TableCell, Typography } from '@mui/material'
import MUIDataTable from "mui-datatables";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CloseImage from '../../assets/ic_close.png';
import AddJenisBarang from './AddJenisBarang';
import EditJenisBarang from './EditJenisBarang';
import Constant from '../../library/Constants';
import { headOffice } from '../../library/Service';


const ct = require("../../library/CustomTable");
const getMuiTheme = () => createTheme(ct.customTable());

export default function JenisBarang() {
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
    const [dataJenis, setDataJenis] = useState([])
    const [dataSelected, setDataSelected] = useState(null)
    const [dataHeadOffice, setDataHeadOffice] = useState(null)

    const columns = [
        { name: "NO", options: { filterOptions: { fullWidth: true } } },
        "JENIS BARANG",
        "PEMBUAT",
        "TIMESTAMP",
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
                                    setDataSelected({
                                        id: tableMeta.rowData[0],
                                        name: tableMeta.rowData[1],
                                        createdBy: tableMeta.rowData[6],
                                        createdDate: tableMeta.rowData[7],
                                        active: tableMeta.rowData[8]
                                    })
                                    setVisibleEdit(true)
                                }}
                                id="basic-button" aria-haspopup="true" aria-controls="basic-menu" style={{ width: 90, height: 40, backgroundColor: '#C9F7F5', borderRadius: 10, display: 'flex', justifyContent: 'center', marginRight: 10 }}>
                                <Typography style={{ color: '#1bc5bd', fontSize: 14, fontWeight: '500', textAlign: 'center', alignSelf: 'center' }}>Edit</Typography>
                            </div>
                            <div
                                onClick={() => {
                                    setDataSelected({
                                        id: tableMeta.rowData[0],
                                        name: tableMeta.rowData[1],
                                        createdBy: tableMeta.rowData[6],
                                        createdDate: tableMeta.rowData[7],
                                        active: tableMeta.rowData[8]
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

    React.useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        let dataHeadOffice = JSON.parse(localStorage.getItem(Constant.DATA_HEAD_OFFICE))
        if (dataHeadOffice != null) {
            let newDataJenis = dataHeadOffice.jenis_barang.map((item, index) => {
                return [item.id, item.name, item.createdBy, item.createdDate, item.active]
            })
            setDataHeadOffice(dataHeadOffice)
            setDataJenis(newDataJenis)
        }
    }

    return (
        <div>
            <div style={{ backgroundColor: '#FEFEFE', padding: '15px 20px' }}>
                <Typography style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>Jenis Barang</Typography>
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
                            <div
                                onClick={() => setVisibleAdd(true)}
                                style={{ width: 150, height: 50, backgroundColor: '#3699FF', borderRadius: 10, display: 'flex', justifyContent: 'center', cursor: 'pointer' }}>
                                <Typography style={{ color: 'white', fontSize: 16, fontWeight: '500', textAlign: 'center', alignSelf: 'center' }}>Tambah Jenis Barang</Typography>
                            </div>
                        </div>
                    </div>
                    <ThemeProvider theme={getMuiTheme()}>
                        <MUIDataTable
                            // title={"ACME Employee list"}
                            data={dataJenis}
                            columns={columns}
                            options={options}
                        />
                    </ThemeProvider>
                </div>
            </div>

            {visibleAdd && (
                <AddJenisBarang
                    dataJenis={dataJenis}
                    dataHeadOffice={dataHeadOffice}
                    getData={getData}
                    onClose={() => setVisibleAdd(false)}
                />
            )}

            {visibleEdit && (
                <EditJenisBarang
                    dataSelected={dataSelected}
                    onClose={() => setVisibleEdit(false)}
                />
            )}

            {visibleDelete && (
                <div className="App app-popup-show">
                    <div className="popup-content background-white" style={{ borderRadius: 8, backgroundColor: 'white' }}>
                        <div className="popup-panel grid grid-2x" style={{ height: 64 }}>
                            <div className="col-1" style={{ maxWidth: "inherit", display: 'flex', alignItems: 'center' }}>
                                <div className="popup-title">
                                    <span style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>Hapus Barang</span>
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
                                <div onClick={() => {
                                    headOffice('deleteJenis', dataSelected)
                                    getData()
                                    setVisibleDelete(false)
                                }} style={{ height: 60, width: '100%', backgroundColor: '#f64e60', display: 'flex', justifyContent: 'center', borderRadius: 10 }}>
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
