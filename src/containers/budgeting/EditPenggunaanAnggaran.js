import { TextField, Typography, ThemeProvider, Autocomplete, TableCell, Switch } from '@mui/material'
import React, { useState } from 'react'
// import { ThemeProvider } from "@mui/styles";
// import { createTheme } from "@mui/material/styles";
import MUIDataTable from "mui-datatables";
import { createTheme } from "@mui/material/styles";
import Constant from '../../library/Constants';
import NumberFormat from 'react-number-format';
import { green, grey, lightBlue } from '@mui/material/colors';
import { headOffice } from '../../library/Service';
import moment from 'moment';
import { useHistory, useLocation } from 'react-router-dom';
import CloseImage from '../../assets/ic_close.png';

const theme = createTheme({
    components: {
        // Name of the component
        MuiPaper: {
            styleOverrides: {
                // Name of the slot
                root: {
                    // Some CSS
                    boxShadow: 'none !important',
                    // fontSize: '1rem',
                },
            },
        },
        MUIDataTableHeadCell: {
            styleOverrides: {
                fixedHeader: {
                    backgroundColor: '#3699ff',
                    border: '3px solid #FFF',
                    padding: '10px 20px'
                },
                data: {
                    color: 'white',
                    fontSize: 16,
                    fontWeight: 'bold'
                }
            }
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    backgroundColor: '#1BC5BD'

                }
                // root: {
                // }
            }
        }
    },
});

const style = {
    position: "sticky",
    zIndex: 110
};


export default function EditPenggunaanAnggaran() {
    let history = useHistory()
    let location = useLocation()
    const [responsive, setResponsive] = useState("vertical");
    const [tableBodyHeight, setTableBodyHeight] = useState("40vh");
    const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
    const [listTahun, setListTahun] = useState([])
    const [tahun, setTahun] = useState(null)
    const [listRegion, setListRegion] = useState([])
    const [region, setRegion] = useState(null)
    const [dataAccount, setDataAccount] = useState([])
    const [dataAnggaran, setDataAnggaran] = useState(null)
    const [dataHeadOffice, setDataHeadOffice] = useState(null)
    const [yearNow, setYearNow] = useState(new Date().getFullYear())
    const [dataShadow, setDataShadow] = useState([])
    const [grandTotal, setGrandTotal] = useState(0)
    const [penggunaanTotal, setPenggunaanTotal] = useState(0)
    const [sisaTotal, setSisaTotal] = useState(0)
    const [batasMax, setBatasMax] = useState(0)
    const [keterangan, setKeterangan] = useState("")
    const [hideTable, setHideTable] = useState(false)
    const [namaGL, setNamaGL] = useState(null)
    const [alokasi, setAlokasi] = useState(null)
    const [penggunaan, setPenggunaan] = useState(null)
    const [visibleAdd, setVisibleAdd] = useState(false)
    const [rowData, setRowData] = useState(null)

    const handleValue = (value, row, column, tableMeta, updateValue) => {
        dataShadow[row][column] = Number(value)
        dataAccount[row][column] = Number(value)
        updateValue(value)
    }

    const handleUpdate = (tableMeta) => {
        let gt = 0
        let penggunaan = 0
        let sisa = 0
        dataShadow.map((item, index) => {
            gt += item[4]
            penggunaan += Number(item[5])
            sisa += Number(item[6])
        })
        setGrandTotal(gt)
        setPenggunaanTotal(penggunaan)
        setSisaTotal(sisa)
    }

    const forceUpdate = React.useReducer(bool => !bool)[1];

    const columns = [
        { name: 'id', options: { display: false } },
        "NO",
        {
            label: "Nama GL/ Buku Besar",
            options: {
                sort: false,
                filter: false,
                customHeadRender: (columnMeta) => (
                    <TableCell key={columnMeta.index} style={{ ...style, backgroundColor: '#3699ff', padding: '10px 20px', border: '3px solid #FFF', top: 0 }}>
                        <Typography style={{ color: '#ffffff', fontSize: 14, fontWeight: 'bold', textAlign: 'center' }}>{columnMeta.label}</Typography>
                    </TableCell>
                ),
                customBodyRender: (val, tableMeta) => {
                    return (
                        <div style={{ display: 'flex' }}>
                            {tableMeta.rowData[7] === 1 || tableMeta.rowData[7] === 2 ?
                                <Typography style={{}}>{val}</Typography>
                                :
                                <Typography style={{ fontWeight: 'bold', textAlign: 'left' }}>{val}</Typography>
                            }
                        </div>
                    )
                }
            }
        },
        {
            label: "Nomor GL",
            options: {
                sort: false,
                filter: false,
                customHeadRender: (columnMeta) => (
                    <TableCell key={columnMeta.index} style={{ ...style, backgroundColor: '#3699ff', padding: '10px 20px', border: '3px solid #FFF', top: 0 }}>
                        <Typography style={{ color: '#ffffff', fontSize: 14, fontWeight: 'bold', textAlign: 'center' }}>{columnMeta.label}</Typography>
                    </TableCell>
                ),
                customBodyRender: (val, tableMeta) => {
                    return (
                        <div style={{ display: 'flex' }}>
                            {(tableMeta.rowData[7] === 1 && dataAccount[tableMeta.rowIndex+1][7] !== 2) || tableMeta.rowData[7] === 2 ? val : null}
                        </div>
                    )
                }
            }
        },
        {
            name: "Alokasi",
            label: "Alokasi",
            options: {
                sort: false,
                filter: false,
                customHeadRender: (columnMeta) => (
                    <TableCell key={columnMeta.index} style={{ ...style, backgroundColor: '#3699ff', padding: '10px 20px', border: '3px solid #FFF', top: 0 }}>
                        <Typography style={{ color: '#ffffff', fontSize: 14, fontWeight: 'bold', textAlign: 'center' }}>{columnMeta.label}</Typography>
                    </TableCell>
                ),
                customBodyRender: (val, tableMeta) => {
                    return (
                        <div style={{ display: 'flex' }}>
                            {(tableMeta.rowData[7] === 1 && dataAccount[tableMeta.rowIndex+1][7] !== 2) || tableMeta.rowData[7] === 2 ? val : null}
                        </div>
                    )
                }
            }
        },
        {
            name: "Penggunaan",
            label: "Penggunaan",
            options: {
                sort: false,
                filter: false,
                customHeadRender: (columnMeta) => (
                    <TableCell key={columnMeta.index} style={{ ...style, backgroundColor: '#3699ff', padding: '10px 20px', border: '3px solid #FFF', top: 0 }}>
                        <Typography style={{ color: '#ffffff', fontSize: 14, fontWeight: 'bold', textAlign: 'center' }}>{columnMeta.label}</Typography>
                    </TableCell>
                ),
                customBodyRender: (val, tableMeta) => {
                    return (
                        <div style={{ display: 'flex' }}>
                            {(tableMeta.rowData[7] === 1 && dataAccount[tableMeta.rowIndex+1][7] !== 2) || tableMeta.rowData[7] === 2 ? val : null}
                        </div>
                    )
                }
            }
        },
        {
            name: "Sisa",
            label: "Sisa",
            options: {
                sort: false,
                filter: false,
                customHeadRender: (columnMeta) => (
                    <TableCell key={columnMeta.index} style={{ ...style, backgroundColor: '#3699ff', padding: '10px 20px', border: '3px solid #FFF', top: 0 }}>
                        <Typography style={{ color: '#ffffff', fontSize: 14, fontWeight: 'bold', textAlign: 'center' }}>{columnMeta.label}</Typography>
                    </TableCell>
                ),
                customBodyRender: (val, tableMeta) => {
                    return (
                        <div style={{ display: 'flex' }}>
                            {(tableMeta.rowData[7] === 1 && dataAccount[tableMeta.rowIndex+1][7] !== 2) || tableMeta.rowData[7] === 2 ? val : null}
                        </div>
                    )
                }
            }
        },
        {
            name: "ACTION",
            label: "Action",
            options: {
                sort: false,
                filter: false,
                customHeadRender: (columnMeta) => (
                    <TableCell key={columnMeta.index} style={{ ...style, backgroundColor: '#3699ff', padding: '10px 20px', border: '3px solid #FFF', top: 0 }}>
                        <Typography style={{ color: '#ffffff', fontSize: 14, fontWeight: 'bold', textAlign: 'center' }}>{columnMeta.label}</Typography>
                    </TableCell>
                ),
                customBodyRender: (val, tableMeta) => {
                    return (
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            {(tableMeta.rowData[7] === 1 && dataAccount[tableMeta.rowIndex+1][7] !== 2) || tableMeta.rowData[7] === 2 ? (
                                <div
                                    onClick={() => {
                                        setVisibleAdd(true)
                                        setRowData(tableMeta.rowData)
                                        console.log(tableMeta.rowData);
                                    }}
                                    id="basic-button" aria-haspopup="true" aria-controls="basic-menu" style={{ height: 40, backgroundColor: '#C9F7F5', borderRadius: 10, display: 'flex', justifyContent: 'center', marginRight: 10, padding: '0 10px' }}>
                                    <Typography style={{ color: '#1bc5bd', fontSize: 12, fontWeight: '500', textAlign: 'center', alignSelf: 'center' }}>Penggunaan</Typography>
                                </div>

                            ) : null}
                            {(tableMeta.rowData[7] === 1 && dataAccount[tableMeta.rowIndex+1][7] !== 2) || tableMeta.rowData[7] === 2 ? (
                                <div

                                    id="basic-button" aria-haspopup="true" aria-controls="basic-menu" style={{ height: 40, backgroundColor: '#C9F7F5', borderRadius: 10, display: 'flex', justifyContent: 'center', padding: '0 10px' }}>
                                    <Typography style={{ color: '#1bc5bd', fontSize: 12, fontWeight: '500', textAlign: 'center', alignSelf: 'center' }}>Detail Upload</Typography>
                                </div>
                            ) : null}
                        </div>
                    )
                }
            }
        },
    ];

    const options = {
        search: true,
        download: false,
        print: false,
        viewColumns: false,
        filter: false,
        selectableRows: false,
        filterType: "dropdown",
        responsive,
        tableBodyHeight,
        tableBodyMaxHeight,
        rowsPerPage: 100,
        sortOrder: { name: 'id', direction: 'asc' },
        onTableChange: (action, state) => {
            // console.log(action);
            // console.dir(state);
        }
    };

    React.useEffect(() => {
        getTahun()
        getData()
    }, [])

    const getData = () => {
        let dataHeadOffice = JSON.parse(localStorage.getItem(Constant.DATA_HEAD_OFFICE))
        let idx = dataHeadOffice.alokasi_dana.findIndex((val) => val.id === location.state.selected[1])
        console.log(dataHeadOffice, location);
        if (idx > -1) {
            let dataTable = []
            let currentCode = 0
            let child = 0
            dataHeadOffice.alokasi_dana[idx].dataAlokasi.map((item, index) => {
                let char = ""
                if (item[9] === 1) {
                    currentCode++;
                    char = `${String.fromCharCode(64 + currentCode).toLowerCase()}. `;
                    child = 0
                } else if (item[9] === 2) {
                    currentCode = 0
                    char = ""
                    child++;
                } else {
                    char = ""
                    currentCode = 0
                }
                dataTable.push([
                    item[0],
                    String(char).toLowerCase(),
                    item[2],
                    item[3],
                    item[4],
                    0,
                    0,
                    item[9],
                    item[8]
                ])
            })
            setDataAccount(dataTable)
            setDataShadow(dataTable)
        }

    }

    const getBatasMax = (data, region) => {
        // console.log(dataHeadOffice)
        console.log('tot', region)
        let indexID = data.anggaran.findIndex((val) => val.id == yearNow)
        if (indexID != -1) {
            let newAnggaran = data.anggaran[indexID]
            setDataAnggaran(newAnggaran)
            let indexAnggaran = newAnggaran.dataAnggaran.findIndex((val) => val[1] == region.name)
            if (indexAnggaran != -1) {
                setBatasMax(newAnggaran.dataAnggaran[indexAnggaran][2])
            }
        }
    }

    const getTahun = () => {
        let arrayTahun = []
        for (var i = 2000; i <= 2021; i++) {
            arrayTahun.push({ value: i })
            if (i == new Date().getFullYear()) {
                setTahun({ value: i })
            }
        }
        setListTahun(arrayTahun.reverse())
    }

    const handleAlokasiDana = () => {
        let payload = {
            id: tahun.value,
            region: region,
            tahun: tahun.value,
            dataAlokasi: dataShadow,
            totalAlokasiDana: grandTotal,
            batasMax: batasMax,
            keterangan: keterangan,
            createdBy: "Head Office",
            createdDate: moment(new Date()).format('DD MMM YYYY HH:mm:ss'),
            active: true
        }
        headOffice('addAlokasiDana', payload)
        console.log(payload)
        history.goBack()
    }

    return (
        <div>
            <div style={{ backgroundColor: '#FEFEFE', padding: '15px 20px' }}>
                <Typography style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>Detail Penggunaan Anggaran</Typography>
            </div>
            <div style={{ padding: 20, borderRadius: 20 }}>
                <div style={{ backgroundColor: '#FFFFFF', borderRadius: 20, padding: 20 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography style={{ color: 'black', fontSize: 18, fontWeight: 'bold', width: '10%', alignSelf: 'center' }}>Head Office</Typography>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={listRegion}
                            getOptionLabel={(option) => option.name}
                            value={region}
                            onChange={(event, newInputValue) => {
                                setRegion(newInputValue)
                                getBatasMax(dataHeadOffice, newInputValue)
                            }}
                            sx={{ width: 'inherit' }}
                            style={{
                                width: 280,
                                fontSize: 14,
                                backgroundColor: '#e5e5e5'
                            }}
                            renderInput={(params) =>
                                <TextField
                                    {...params}
                                    InputProps={{
                                        ...params.InputProps,
                                        style: { padding: '0 39px 0 0' }
                                    }}
                                />}
                        />
                        <Typography style={{ color: 'black', fontSize: 18, fontWeight: 'bold', width: '10%', alignSelf: 'center' }}>Region</Typography>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={listRegion}
                            getOptionLabel={(option) => option.name}
                            value={region}
                            onChange={(event, newInputValue) => {
                                setRegion(newInputValue)
                                getBatasMax(dataHeadOffice, newInputValue)
                            }}
                            sx={{ width: 'inherit' }}
                            style={{
                                width: 280,
                                fontSize: 14,
                                backgroundColor: '#e5e5e5'
                            }}
                            renderInput={(params) =>
                                <TextField
                                    {...params}
                                    InputProps={{
                                        ...params.InputProps,
                                        style: { padding: '0 39px 0 0' }
                                    }}
                                />}
                        />
                        <Typography style={{ color: 'black', fontSize: 18, fontWeight: 'bold', width: '10%', alignSelf: 'center' }}>Tahun</Typography>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={listTahun}
                            getOptionLabel={(option) => option.value}
                            value={tahun}
                            onChange={(event, newInputValue) => {
                                setTahun(newInputValue)
                                getBatasMax()
                            }}
                            sx={{ width: 'inherit' }}
                            style={{
                                width: 280,
                                fontSize: 14,
                                backgroundColor: '#e5e5e5'
                            }}
                            renderInput={(params) =>
                                <TextField
                                    {...params}
                                    InputProps={{
                                        ...params.InputProps,
                                        style: { padding: '0 39px 0 0' }
                                    }}
                                />}
                        />
                    </div>
                </div>
            </div>
            <div style={{ margin: '0px 20px', padding: '20px', borderRadius: 20, backgroundColor: '#FEFEFE' }}>
                <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Typography style={{ color: hideTable ? green[500] : grey[500], marginRight: 5, backgroundColor: hideTable ? lightBlue[50] : 'white', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, borderRadius: 5 }}>Hide Table</Typography>
                    <Switch inputProps={{ 'aria-label': 'ant design' }} checked={hideTable} onChange={(e) => {
                        setHideTable(e.target.checked)
                    }} />
                </div>
                <ThemeProvider theme={theme}>
                    {!hideTable && <MUIDataTable
                        // title={"ACME Employee list"}
                        data={dataAccount}
                        columns={columns}
                        options={options}
                    />}
                </ThemeProvider>
                <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '20px 20px 0px' }}>
                    <div style={{ width: '63%', display: 'flex' }}>
                        <Typography style={{ alignSelf: 'center', marginRight: 30, fontSize: 18, color: 'black', fontWeight: 'bold' }}>Grand Total (Rp)</Typography>
                        <div style={{ backgroundColor: '#D8D8D8', padding: 10, borderRadius: 5, width: '17%', marginRight: 10 }}>
                            <Typography>{grandTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Typography>
                        </div>
                        <div style={{ backgroundColor: '#D8D8D8', padding: 10, borderRadius: 5, width: '21%', marginRight: 10 }}>
                            <Typography>{penggunaanTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Typography>
                        </div>
                        <div style={{ backgroundColor: '#D8D8D8', padding: 10, borderRadius: 5, width: '15%', marginRight: 5 }}>
                            <Typography>{sisaTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Typography>
                        </div>

                    </div>
                </div>
            </div>
            <div style={{ padding: 20, borderRadius: 20 }}>
                <div style={{ backgroundColor: '#FFFFFF', borderRadius: 20, padding: 20 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography style={{ alignSelf: 'center', marginRight: 30, fontSize: 18, color: 'black', fontWeight: 'bold' }}>Batas Maksimum</Typography>
                        <div style={{ width: '75%', backgroundColor: '#D8D8D8', padding: 10, borderRadius: 5 }}>
                            <Typography style={{ alignSelf: 'center', marginRight: 30, fontSize: 18, color: 'black', fontWeight: '500' }}>{'Rp. ' + batasMax.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Typography>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20 }}>
                        <Typography style={{ alignSelf: 'center', marginRight: 30, fontSize: 18, color: 'black', fontWeight: 'bold' }}>Keterangan</Typography>
                        <div style={{ width: '75%', backgroundColor: '#D8D8D8', padding: 10, borderRadius: 5 }}>
                            <TextField
                                style={{ width: '100%' }}
                                variant="outlined"
                                value={keterangan}
                                onChange={(e) => setKeterangan(e.target.value)}
                                inputProps={{
                                    style: {
                                        fontSize: 14,
                                        backgroundColor: '#e5e5e5'
                                    }
                                }}
                                size="medium"
                                InputLabelProps={{
                                    style: {
                                        fontSize: 14,
                                        color: '#7e8085',
                                    }
                                }}
                            />
                        </div>
                    </div>
                    <div onClick={() => handleAlokasiDana()} style={{ marginTop: 20, backgroundColor: '#3699ff', width: '100%', padding: 15, borderRadius: 10 }}>
                        <Typography style={{ alignSelf: 'center', marginRight: 30, fontSize: 18, color: 'white', fontWeight: 'bold', textAlign: 'center' }}>SUBMIT</Typography>
                    </div>
                </div>
            </div>

            {visibleAdd && (
                <div className="App app-popup-show">
                    <div className="popup-content-middle background-white" style={{ borderRadius: 8, backgroundColor: 'white' }}>
                        <div className="popup-panel grid grid-2x" style={{ height: 64 }}>
                            <div className="col-1" style={{ maxWidth: "inherit", display: 'flex', alignItems: 'center' }}>
                                <div className="popup-title">
                                    <span style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>Tambah Account</span>
                                </div>
                            </div>
                            <div className="col-2 content-right" style={{ maxWidth: "inherit", alignSelf: 'center' }}>
                                <button
                                    type="button"
                                    className="btn btn-circle btn-white"
                                    onClick={() => setVisibleAdd(false)}
                                >
                                    <img src={CloseImage} style={{ width: 20, height: 20 }} />
                                </button>
                            </div>
                        </div>
                        <div style={{ padding: 20, paddingRight: 50, paddingLeft: 50 }}>
                            <div style={{ display: 'flex' }}>
                                <Typography style={{ textAlign: 'left', fontWeight: 'bold', alignSelf: 'center', width: 200 }}>NAMA GL</Typography>
                                <TextField
                                    style={{ width: '100%' }}
                                    variant="outlined"
                                    value={rowData && `${rowData[2]} / ${rowData[3]}`}
                                    disabled
                                    inputProps={{
                                        style: {
                                            fontSize: 14,
                                            backgroundColor: '#e5e5e5'
                                        }
                                    }}
                                    size="medium"
                                    InputLabelProps={{
                                        style: {
                                            fontSize: 14,
                                            color: '#7e8085',
                                        }
                                    }}
                                />
                            </div>
                            <div style={{ display: 'flex', marginTop: 20 }}>
                                <Typography style={{ textAlign: 'left', fontWeight: 'bold', alignSelf: 'center', width: 200 }}>Alokasi (Rp)</Typography>
                                <TextField
                                    style={{ width: '100%' }}
                                    variant="outlined"
                                    value={rowData && `${rowData[4]}`}
                                    disabled
                                    inputProps={{
                                        style: {
                                            fontSize: 14,
                                            backgroundColor: '#e5e5e5'
                                        }
                                    }}
                                    size="medium"
                                    InputLabelProps={{
                                        style: {
                                            fontSize: 14,
                                            color: '#7e8085',
                                        }
                                    }}
                                />
                            </div>
                            <div style={{ display: 'flex', marginTop: 20 }}>
                                <Typography style={{ textAlign: 'left', fontWeight: 'bold', alignSelf: 'center', width: 200 }}>Penggunaan (Rp)</Typography>
                                <TextField
                                    style={{ width: '100%' }}
                                    variant="outlined"
                                    onChange={(e) => setPenggunaan(e.target.value)}
                                    value={penggunaan}
                                    inputProps={{
                                        style: {
                                            fontSize: 14,
                                            backgroundColor: '#e5e5e5'
                                        }
                                    }}
                                    size="medium"
                                    InputLabelProps={{
                                        style: {
                                            fontSize: 14,
                                            color: '#7e8085',
                                        }
                                    }}
                                />
                            </div>
                        </div>
                        <div className="grid grid-2x grid-mobile-none gap-15px" style={{ padding: 20, paddingRight: 50, paddingLeft: 50 }}>
                            <div>

                            </div>
                            <div style={{ marginTop: 50, justifySelf: 'flex-end' }}>
                                <div onClick={() => {
                                    let idx = dataAccount.findIndex((val) => val[3] === rowData[3])
                                    dataAccount[idx][5] = penggunaan
                                    dataShadow[idx][5] = penggunaan
                                    dataAccount[idx][6] = Number(dataShadow[idx][4]) - Number(penggunaan)
                                    dataShadow[idx][6] = Number(dataShadow[idx][4]) - Number(penggunaan)
                                    forceUpdate()
                                    setVisibleAdd(false)
                                    setPenggunaan(null)
                                    handleUpdate()
                                }} style={{ height: 60, width: 250, backgroundColor: '#3699ff', display: 'flex', justifyContent: 'center', borderRadius: 10 }}>
                                    <Typography style={{ color: 'white', fontSize: 18, fontWeight: 'bold', textAlign: 'center', alignSelf: 'center' }}>TAMBAH</Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div >
    )
}
