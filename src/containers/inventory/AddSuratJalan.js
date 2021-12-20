import { TableCell, TextField, Typography, ThemeProvider, Autocomplete } from '@mui/material'
import MUIDataTable from "mui-datatables";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { createTheme } from "@mui/material/styles";
import Constant from '../../library/Constants';
import moment from 'moment';
import { headOffice } from '../../library/Service';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

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

export default function AddSuratJalan() {
    let history = useHistory()
    let location = useLocation()
    const [visibleUpload, setVisibleUpload] = useState(false)
    const [responsive, setResponsive] = useState("vertical");
    const [tableBodyHeight, setTableBodyHeight] = useState("20vh");
    const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
    const [dataPo, setDataPo] = useState([])
    const [Po, setPo] = useState(null)
    const [dataHeadOffice, setDataHeadOffice] = useState(null)
    const [region, setRegion] = useState(null)
    const [dataTable, setDataTable] = useState([])
    const [tglSJ, setTglSJ] = useState("")
    const [noSJ, setNoSJ] = useState(`SJ-${location.state.dataSJ.length}`)

    const columns = [
        "NO",
        "BARANG",
        "MERK",
        "QTY"
    ];

    const options = {
        search: false,
        download: false,
        print: false,
        viewColumns: false,
        filter: false,
        pagination: false,
        filterType: "dropdown",
        responsive,
        tableBodyHeight,
        selectableRows: false,
        tableBodyMaxHeight,
        // onTableChange: (action, state) => {
        //     console.log(action);
        //     console.dir(state);
        // }
    };

    React.useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        let dataHeadOffice = JSON.parse(localStorage.getItem(Constant.DATA_HEAD_OFFICE))
        console.log(dataHeadOffice.pre_order)
        if (dataHeadOffice != null) {
            let newDataPO = dataHeadOffice.pre_order
            setDataHeadOffice(dataHeadOffice)
            setDataPo(newDataPO)
        }
    }

    const handleSubmit = () => {
        let payload = {
            id: noSJ,
            po: Po,
            files: null,
            tglSJ: tglSJ,
            status: 'on_progress',
            createdBy: 'Head Office',
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        }
        headOffice('addSJ', payload)
        history.goBack()
    }

    return (
        <div>
            <div style={{ backgroundColor: '#FEFEFE', padding: '15px 20px' }}>
                <Typography style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>Buat Surat Jalan</Typography>
            </div>
            <div style={{ padding: '10px 20px', borderRadius: 20 }}>

                <div style={{ backgroundColor: '#FFFFFF', borderRadius: 20, padding: 20, marginTop: 20 }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                        <Typography style={{ color: 'black', fontSize: 14, fontWeight: 'bold', width: '15%', alignSelf: 'center' }}>No PO</Typography>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={dataPo}
                            getOptionLabel={(option) => option.id}
                            onChange={(e, newInputValue) => {
                                setPo(newInputValue)
                                if (newInputValue != null) {
                                    if (newInputValue.quotation != null) {
                                        setRegion(newInputValue.quotation.region)
                                    } else {
                                        setRegion(null)
                                    }
                                    setDataTable(newInputValue.dataPo)
                                }
                                console.log(newInputValue)
                            }}
                            // onChange={(event, newInputValue) => newInputValue == null ? setReferance(null) : setReferance(newInputValue)}
                            sx={{ width: 'inherit' }}
                            style={{
                                width: '-webkit-fill-available',
                                fontSize: 14,
                                backgroundColor: 'white', width: '30%', marginLeft: 37
                            }}
                            renderInput={(params) =>
                                <TextField {...params} />}
                        />
                        <Typography style={{ color: 'black', fontSize: 14, fontWeight: 'bold', width: '15%', alignSelf: 'center', marginLeft: 20 }}>Tanggal</Typography>
                        <TextField
                            style={{ width: '30%', marginLeft: 37 }}
                            variant="outlined"
                            onChange={(e) => setTglSJ(e.target.value)}
                            value={tglSJ}
                            inputProps={{
                                style: {
                                    padding: 10,
                                    fontSize: 14,
                                    backgroundColor: '#e5e5e5'
                                }
                            }}
                            type={'date'}
                            size="medium"
                            InputLabelProps={{
                                style: {
                                    fontSize: 14,
                                    color: '#7e8085',
                                }
                            }}
                        />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: 20 }}>
                        <Typography style={{ color: 'black', fontSize: 14, fontWeight: 'bold', width: '15%', alignSelf: 'center' }}>No Surat Jalan</Typography>
                        <TextField
                            style={{ width: '30%', marginLeft: 37 }}
                            variant="outlined"
                            // onChange={(e) => null}
                            value={noSJ}
                            disabled
                            inputProps={{
                                style: {
                                    padding: 10,
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
                        <Typography style={{ color: 'black', fontSize: 14, fontWeight: 'bold', width: '15%', alignSelf: 'center', marginLeft: 20 }}>Nama Region</Typography>
                        <TextField
                            style={{ width: '30%', marginLeft: 37 }}
                            variant="outlined"
                            // onChange={(e) => null}
                            value={region == null ? '' : region.name}
                            disabled
                            inputProps={{
                                style: {
                                    padding: 10,
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
                    <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: 20 }}>
                        <Typography style={{ color: 'black', fontSize: 14, fontWeight: 'bold', width: '15%', alignSelf: 'center' }}>Upload File</Typography>
                        <div style={{ width: '30%', marginLeft: 37, display: 'flex', justifyContent: 'space-between', backgroundColor: '#e5e5e5' }}>
                            <TextField
                                style={{ width: '70%' }}
                                variant="outlined"
                                onChange={(e) => null}
                                inputProps={{
                                    style: {
                                        padding: 10,
                                        fontSize: 14,
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
                            <div
                                onClick={() => {
                                    setVisibleUpload(true)
                                }}
                                style={{ height: 40, width: '30%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#434349', borderRadius: 5 }}>
                                <Typography style={{ color: 'white', fontWeight: 16, textAlign: 'center' }}>Browse</Typography>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: 20 }}>
                        <ThemeProvider theme={theme}>
                            <MUIDataTable
                                // title={"ACME Employee list"}
                                data={dataTable}
                                columns={columns}
                                options={options}
                            />
                        </ThemeProvider>
                    </div>
                    <div style={{ display: 'flex', width: '100%', alignSelf: 'flex-end' }}>
                        <div
                            onClick={() => handleSubmit()}
                            style={{ height: 50, backgroundColor: '#3699FF', borderRadius: 10, display: 'flex', justifyContent: 'center', cursor: 'pointer', padding: '0 10px', width: '100%' }}>
                            <Typography style={{ color: 'white', fontSize: 16, fontWeight: '500', textAlign: 'center', alignSelf: 'center' }}>SAVE</Typography>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
