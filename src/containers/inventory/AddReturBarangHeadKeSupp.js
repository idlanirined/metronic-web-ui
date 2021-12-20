import { Autocomplete, TableCell, TextField, Typography } from '@mui/material'
import MUIDataTable from "mui-datatables";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import Constant from '../../library/Constants';
import moment from 'moment';
import { headOffice } from '../../library/Service';
import { useHistory } from 'react-router-dom';

const ct = require("../../library/CustomTable");
const getMuiTheme = () => createTheme(ct.customTable());

export default function AddReturBarangHeadKeSupp() {
    let history = useHistory()
    const [responsive, setResponsive] = useState("vertical");
    const [tableBodyHeight, setTableBodyHeight] = useState("20vh");
    const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
    const [dataPo, setDataPo] = useState([])
    const [Po, setPo] = useState(null)
    const [dataHeadOffice, setDataHeadOffice] = useState(null)
    const [region, setRegion] = useState(null)
    const [dataTable, setDataTable] = useState([])
    const [tglRetur, setTglRetur] = useState("")

    const columns = [
        "NO",
        "BARANG",
        "MERK",
        "QTY",
        "HARGA SATUAN",
        {
            name: "DEL",
            label: "DEL",
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
                                id="basic-button" aria-haspopup="true" aria-controls="basic-menu" style={{ width: 90, height: 40, backgroundColor: 'red', borderRadius: 10, display: 'flex', justifyContent: 'center' }}>
                                <Typography style={{ color: 'white', fontSize: 14, fontWeight: '500', textAlign: 'center', alignSelf: 'center' }}>X</Typography>
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
            id: 'Ret-1',
            po: Po,
            preparedBy: 'Head Office',
            tglRetur: tglRetur,
            dataRetur: dataTable,
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            createdBy: 'Head Office',
            active: true
        }
        headOffice('addRetur', payload)
        history.goBack()
    }

    return (
        <div>
            <div style={{ backgroundColor: '#FEFEFE', padding: '15px 20px' }}>
                <Typography style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>Buat Retur Barang - Head Office Ke SPC</Typography>
            </div>
            <div style={{ padding: 20, borderRadius: 20 }}>
                <div style={{ backgroundColor: '#FFFFFF', borderRadius: 20, padding: 20 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography style={{ color: 'black', fontSize: 14, fontWeight: 'bold', width: '15%', alignSelf: 'center' }}>Prepared By</Typography>
                        <TextField
                            style={{ width: '82%' }}
                            variant="outlined"
                            onChange={(e) => null}
                            inputProps={{
                                style: {
                                    padding: 10,
                                    fontSize: 14,
                                    backgroundColor: 'white'
                                }
                            }}
                            value={'Hendratno - Head Office'}
                            disabled
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
                <div style={{ backgroundColor: '#FFFFFF', borderRadius: 20, padding: 20, marginTop: 20 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography style={{ color: 'black', fontSize: 14, fontWeight: 'bold', width: '15%', alignSelf: 'center' }}>No PO</Typography>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={dataPo}
                            getOptionLabel={(option) => option.id}
                            onChange={(e, newInputValue) => {
                                setPo(newInputValue)
                                if (newInputValue != null) {
                                    setDataTable(newInputValue.dataPo)
                                }
                                console.log(newInputValue)
                            }}
                            // onChange={(event, newInputValue) => newInputValue == null ? setReferance(null) : setReferance(newInputValue)}
                            sx={{ width: 'inherit' }}
                            style={{
                                width: '-webkit-fill-available',
                                fontSize: 14,
                                backgroundColor: 'white', width: '30%'
                            }}
                            renderInput={(params) =>
                                <TextField {...params} />}
                        />
                        <Typography style={{ color: 'black', fontSize: 14, fontWeight: 'bold', width: '15%', alignSelf: 'center' }}>Tanggal</Typography>
                        <TextField
                            style={{ width: '30%' }}
                            variant="outlined"
                            value={tglRetur}
                            onChange={(e) => setTglRetur(e.target.value)}
                            type={'date'}
                            inputProps={{
                                style: {
                                    padding: 10,
                                    fontSize: 14,
                                    backgroundColor: 'white'
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
                <div style={{ backgroundColor: '#FFFFFF', borderRadius: 20, padding: 20, marginTop: 20, minHeight: '60vh', display: 'grid' }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        {/* <div
                            onClick={() => null}
                            style={{ height: 50, backgroundColor: '#3699FF', borderRadius: 10, display: 'flex', justifyContent: 'center', cursor: 'pointer', padding: '0 10px' }}>
                            <Typography style={{ color: 'white', fontSize: 16, fontWeight: '500', textAlign: 'center', alignSelf: 'center' }}>+ Tambah Barang</Typography>
                        </div> */}
                    </div>
                    <ThemeProvider theme={getMuiTheme()}>
                        <MUIDataTable
                            // title={"ACME Employee list"}
                            data={dataTable}
                            columns={columns}
                            options={options}
                        />
                    </ThemeProvider>
                    <div style={{ display: 'flex', width: '100%', alignSelf: 'flex-end' }}>
                        <div
                            onClick={() => handleSubmit()}
                            style={{ height: 50, backgroundColor: '#3699FF', borderRadius: 10, display: 'flex', justifyContent: 'center', cursor: 'pointer', padding: '0 10px', width: '100%' }}>
                            <Typography style={{ color: 'white', fontSize: 16, fontWeight: '500', textAlign: 'center', alignSelf: 'center' }}>SUBMIT</Typography>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
