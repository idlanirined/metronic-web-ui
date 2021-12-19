import { TableCell, TextField, Typography } from '@mui/material'
import MUIDataTable from "mui-datatables";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import CloseImage from '../../assets/ic_close.png';

const ct = require("../../library/CustomTable");
const getMuiTheme = () => createTheme(ct.customTable());

export default function AddPO() {
    const [responsive, setResponsive] = useState("vertical");
    const [tableBodyHeight, setTableBodyHeight] = useState("20vh");
    const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
    const [visibleProduk, setVisibleProduk] = useState(false)
    const [visiblePengajuan, setVisiblePengajuan] = useState(false)

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
                        <Typography style={{ color: 'black', fontSize: 14, fontWeight: 'bold', width: '15%', alignSelf: 'center' }}>Tgl PO</Typography>
                        <TextField
                            style={{ width: '30%' }}
                            variant="outlined"
                            onChange={(e) => null}
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
                        <div
                            onClick={() => setVisibleProduk(true)}
                            style={{ height: 50, backgroundColor: '#FAC745', borderRadius: 10, display: 'flex', justifyContent: 'center', cursor: 'pointer', padding: '0 10px', marginRight: 20 }}>
                            <Typography style={{ color: 'white', fontSize: 16, fontWeight: '500', textAlign: 'center', alignSelf: 'center' }}>+ Add Stock</Typography>
                        </div>
                        <div
                            onClick={() => setVisiblePengajuan(true)}
                            style={{ height: 50, backgroundColor: '#3699FF', borderRadius: 10, display: 'flex', justifyContent: 'center', cursor: 'pointer', padding: '0 10px' }}>
                            <Typography style={{ color: 'white', fontSize: 16, fontWeight: '500', textAlign: 'center', alignSelf: 'center' }}>+ Region Requested</Typography>
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
            {visibleProduk && (
                <div className="App app-popup-show">
                    <div className="popup-content-full background-white" style={{ borderRadius: 8, backgroundColor: 'white', width: 1000 }}>
                        <div className="popup-panel grid grid-2x" style={{ height: 64 }}>
                            <div className="col-1" style={{ maxWidth: "inherit", display: 'flex', alignItems: 'center' }}>
                                <div className="popup-title">
                                    <span style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>Tambah Produk</span>
                                </div>
                            </div>
                            <div className="col-2 content-right" style={{ maxWidth: "inherit", alignSelf: 'center' }}>
                                <button
                                    type="button"
                                    className="btn btn-circle btn-white"
                                    onClick={() => setVisibleProduk(false)}
                                >
                                    <img src={CloseImage} style={{ width: 20, height: 20 }} />
                                </button>
                            </div>
                        </div>
                        <div style={{ padding: 20, paddingRight: 50, paddingLeft: 50 }}>
                            <div style={{ display: 'flex' }}>
                                <Typography style={{ textAlign: 'left', fontWeight: 'bold', alignSelf: 'center', width: 200 }}>Nama Barang</Typography>
                                <TextField
                                    style={{ width: '100%' }}
                                    variant="outlined"
                                    // onChange={(e) => setNama(e.target.value)}
                                    // value={nama}
                                    inputProps={{
                                        style: {
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
                            <div style={{ display: 'flex', marginTop: 20 }}>
                                <Typography style={{ textAlign: 'left', fontWeight: 'bold', alignSelf: 'center', width: 200 }}>Harga Satuan (Rp)</Typography>
                                <TextField
                                    style={{ width: '37%' }}
                                    variant="outlined"
                                    // onChange={(e) => setNama(e.target.value)}
                                    // value={nama}
                                    inputProps={{
                                        style: {
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
                                <Typography style={{ textAlign: 'left', fontWeight: 'bold', alignSelf: 'center', width: 200, marginLeft: 20 }}>Qty (Pcs)</Typography>
                                <TextField
                                    style={{ width: '37%' }}
                                    variant="outlined"
                                    // onChange={(e) => setNama(e.target.value)}
                                    // value={nama}
                                    inputProps={{
                                        style: {
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
                            <div style={{ display: 'flex', marginTop: 20 }}>
                                <Typography style={{ textAlign: 'left', fontWeight: 'bold', alignSelf: 'center', width: 200 }}>Jumlah (Rp)</Typography>
                                <TextField
                                    style={{ width: '37%' }}
                                    variant="outlined"
                                    // onChange={(e) => setNama(e.target.value)}
                                    // value={nama}
                                    inputProps={{
                                        style: {
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
                                <Typography style={{ textAlign: 'left', fontWeight: 'bold', alignSelf: 'center', width: 200, marginLeft: 20 }}>Disc (%)</Typography>
                                <TextField
                                    style={{ width: '37%' }}
                                    variant="outlined"
                                    // onChange={(e) => setNama(e.target.value)}
                                    // value={nama}
                                    inputProps={{
                                        style: {
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
                            <div style={{ display: 'flex', marginTop: 20 }}>
                                <Typography style={{ textAlign: 'left', fontWeight: 'bold', alignSelf: 'center', width: 200 }}>Total (Rp)</Typography>
                                <TextField
                                    style={{ width: '100%' }}
                                    variant="outlined"
                                    // onChange={(e) => setNama(e.target.value)}
                                    // value={nama}
                                    inputProps={{
                                        style: {
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
                        <div className="grid grid-2x grid-mobile-none gap-15px" style={{ padding: 20, paddingRight: 50, paddingLeft: 50 }}>
                            <div>

                            </div>
                            <div style={{ marginTop: 50, justifySelf: 'flex-end' }}>
                                <div onClick={() => setVisibleProduk(false)} style={{ height: 60, width: 250, backgroundColor: '#3699ff', display: 'flex', justifyContent: 'center', borderRadius: 10 }}>
                                    <Typography style={{ color: 'white', fontSize: 18, fontWeight: 'bold', textAlign: 'center', alignSelf: 'center' }}>ADD</Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

{visiblePengajuan && (
                <div className="App app-popup-show">
                    <div className="popup-content-full background-white" style={{ borderRadius: 8, backgroundColor: 'white', width: 1000 }}>
                        <div className="popup-panel grid grid-2x" style={{ height: 64 }}>
                            <div className="col-1" style={{ maxWidth: "inherit", display: 'flex', alignItems: 'center' }}>
                                <div className="popup-title">
                                    <span style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>Tambah Produk</span>
                                </div>
                            </div>
                            <div className="col-2 content-right" style={{ maxWidth: "inherit", alignSelf: 'center' }}>
                                <button
                                    type="button"
                                    className="btn btn-circle btn-white"
                                    onClick={() => setVisiblePengajuan(false)}
                                >
                                    <img src={CloseImage} style={{ width: 20, height: 20 }} />
                                </button>
                            </div>
                        </div>
                        <div style={{ padding: 20, paddingRight: 50, paddingLeft: 50 }}>
                            <div style={{ display: 'flex' }}>
                                <Typography style={{ textAlign: 'left', fontWeight: 'bold', alignSelf: 'center', width: 200 }}>Nama Barang</Typography>
                                <TextField
                                    style={{ width: '100%' }}
                                    variant="outlined"
                                    // onChange={(e) => setNama(e.target.value)}
                                    // value={nama}
                                    inputProps={{
                                        style: {
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
                            <div style={{ display: 'flex', marginTop: 20 }}>
                                <Typography style={{ textAlign: 'left', fontWeight: 'bold', alignSelf: 'center', width: 200 }}>Harga Satuan (Rp)</Typography>
                                <TextField
                                    style={{ width: '37%' }}
                                    variant="outlined"
                                    // onChange={(e) => setNama(e.target.value)}
                                    // value={nama}
                                    inputProps={{
                                        style: {
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
                                <Typography style={{ textAlign: 'left', fontWeight: 'bold', alignSelf: 'center', width: 200, marginLeft: 20 }}>Qty (Pcs)</Typography>
                                <TextField
                                    style={{ width: '37%' }}
                                    variant="outlined"
                                    // onChange={(e) => setNama(e.target.value)}
                                    // value={nama}
                                    inputProps={{
                                        style: {
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
                            <div style={{ display: 'flex', marginTop: 20 }}>
                                <Typography style={{ textAlign: 'left', fontWeight: 'bold', alignSelf: 'center', width: 200 }}>Total (Rp)</Typography>
                                <TextField
                                    style={{ width: '100%' }}
                                    variant="outlined"
                                    // onChange={(e) => setNama(e.target.value)}
                                    // value={nama}
                                    inputProps={{
                                        style: {
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
                        <div className="grid grid-2x grid-mobile-none gap-15px" style={{ padding: 20, paddingRight: 50, paddingLeft: 50 }}>
                            <div>

                            </div>
                            <div style={{ marginTop: 50, justifySelf: 'flex-end' }}>
                                <div onClick={() => setVisiblePengajuan(false)} style={{ height: 60, width: 250, backgroundColor: '#3699ff', display: 'flex', justifyContent: 'center', borderRadius: 10 }}>
                                    <Typography style={{ color: 'white', fontSize: 18, fontWeight: 'bold', textAlign: 'center', alignSelf: 'center' }}>ADD</Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
