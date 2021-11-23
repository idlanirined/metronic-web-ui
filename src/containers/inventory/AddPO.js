import { TableCell, TextField, Typography } from '@mui/material'
import MUIDataTable from "mui-datatables";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

const ct = require("../../library/CustomTable");
const getMuiTheme = () => createTheme(ct.customTable());

export default function AddPO() {
    const [responsive, setResponsive] = useState("vertical");
    const [tableBodyHeight, setTableBodyHeight] = useState("20vh");
    const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");

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

    const data = [
        ["1", "JENIS BARANG A", "NAMA USER 1", "2021-11-01 12:00:00", "", "1"],
    ];

    return (
        <div>
            <div style={{ backgroundColor: '#FEFEFE', padding: '15px 20px' }}>
                <Typography style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>Buat Purchase Order</Typography>
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
                <div style={{ backgroundColor: '#FFFFFF', borderRadius: 20, padding: 20, marginTop: 20 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography style={{ color: 'black', fontSize: 14, fontWeight: 'bold', width: '15%', alignSelf: 'center' }}>SPC</Typography>
                        <TextField
                            style={{ width: '30%' }}
                            variant="outlined"
                            onChange={(e) => null}
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
                        <Typography style={{ color: 'black', fontSize: 14, fontWeight: 'bold', width: '15%', alignSelf: 'center' }}>Tgl PO</Typography>
                        <TextField
                            style={{ width: '30%' }}
                            variant="outlined"
                            onChange={(e) => null}
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
                        <Typography style={{ color: 'black', fontSize: 14, fontWeight: 'bold', width: '15%', alignSelf: 'center' }}>No PO</Typography>
                        <TextField
                            style={{ width: '30%', marginLeft: 37 }}
                            variant="outlined"
                            onChange={(e) => null}
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
                </div>
                <div style={{ backgroundColor: '#FFFFFF', borderRadius: 20, padding: 20, marginTop: 20, minHeight: '60vh', display: 'grid' }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <div
                            onClick={() => null}
                            style={{ height: 50, backgroundColor: '#FAC745', borderRadius: 10, display: 'flex', justifyContent: 'center', cursor: 'pointer', padding: '0 10px', marginRight: 20 }}>
                            <Typography style={{ color: 'white', fontSize: 16, fontWeight: '500', textAlign: 'center', alignSelf: 'center' }}>+ Tambah Produk</Typography>
                        </div>
                        <div
                            onClick={() => null}
                            style={{ height: 50, backgroundColor: '#3699FF', borderRadius: 10, display: 'flex', justifyContent: 'center', cursor: 'pointer', padding: '0 10px' }}>
                            <Typography style={{ color: 'white', fontSize: 16, fontWeight: '500', textAlign: 'center', alignSelf: 'center' }}>+ Tambah Pengajuan</Typography>
                        </div>
                    </div>
                    <div>
                        <ThemeProvider theme={getMuiTheme()}>
                            <MUIDataTable
                                // title={"ACME Employee list"}
                                data={data}
                                columns={columns}
                                options={options}
                            />
                        </ThemeProvider>
                    </div>
                    <div style={{ display: 'flex', width: '100%', alignSelf: 'flex-end' }}>
                        <div
                            onClick={() => null}
                            style={{ height: 50, backgroundColor: '#3699FF', borderRadius: 10, display: 'flex', justifyContent: 'center', cursor: 'pointer', padding: '0 10px', width: '100%' }}>
                            <Typography style={{ color: 'white', fontSize: 16, fontWeight: '500', textAlign: 'center', alignSelf: 'center' }}>Tambah</Typography>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
