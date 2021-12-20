import { Autocomplete, TableCell, TextField, Typography } from '@mui/material'
import MUIDataTable from "mui-datatables";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import CloseImage from '../../assets/ic_close.png';
import Constant from '../../library/Constants';
import moment from 'moment';
import { headOffice } from '../../library/Service';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const ct = require("../../library/CustomTable");
const getMuiTheme = () => createTheme(ct.customTable());

export default function AddPO() {
    let history = useHistory()
    const [responsive, setResponsive] = useState("vertical");
    const [tableBodyHeight, setTableBodyHeight] = useState("20vh");
    const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
    const [visibleProduk, setVisibleProduk] = useState(false)
    const [visiblePengajuan, setVisiblePengajuan] = useState(false)
    const [dataBarang, setDataBarang] = useState([])
    const [barang, setBarang] = useState(null)
    const [jumlah, setJumlah] = useState(0)
    const [qty, setQty] = useState(0)
    const [disc, setDisc] = useState(0)
    const [noPo, setNoPo] = useState("")
    const [namaMemo, setNamaMemo] = useState("")
    const [tglPo, setTglPo] = useState("")
    const [tglQuotation, setTglQuotation] = useState("")
    const [grandTotal, setGrandTotal] = useState(0)
    const [total, setTotal] = useState(0)
    const [dataTable, setDataTable] = useState([])
    const [dataHeadOffice, setDataHeadOffice] = useState(null)
    const forceUpdate = React.useReducer(bool => !bool)[1];
    const [dataQuotation, setDataQuotation] = useState([])
    const [quotation, setQuotation] = useState(null)

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
                    <TableCell key={columnMeta.index} style={{ backgroundColor: 'white', padding: '10px 20px', border: '3px solid #FFF', position: 'sticky', top: 0, zIndex: 110 }}>
                        <Typography style={{ color: '#2a9c6c', fontSize: 14, fontWeight: 'bold', textAlign: 'center' }}>{columnMeta.label}</Typography>
                    </TableCell>
                ),
                customBodyRender: (val, tableMeta) => {
                    return (
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div
                                onClick={() => {
                                    dataTable.splice(tableMeta.rowIndex, 1)
                                    let totalz = 0
                                    dataTable.map((item, index) => {
                                        totalz += Number(item[5])
                                    })
                                    if(dataTable.length == 0) {
                                        setQuotation(null)
                                    }
                                    setGrandTotal(Number(totalz))
                                    forceUpdate()
                                }}
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
        selectableRows: true,
        tableBodyMaxHeight,
        // onTableChange: (action, state) => {
        //     console.log(action);
        //     console.dir(state);
        // }
    };

    React.useEffect(() => {
        // localStorage.clear()
        // localStorage.setItem(Constant.DATA_HEAD_OFFICE, JSON.stringify(database))

        getData()
    }, [])

    const getData = () => {
        let dataHeadOffice = JSON.parse(localStorage.getItem(Constant.DATA_HEAD_OFFICE))
        if (dataHeadOffice != null) {
            let newDataQuotation = dataHeadOffice.quotation
            setDataHeadOffice(dataHeadOffice)
            setDataBarang(dataHeadOffice.barang)
            setDataQuotation(newDataQuotation)
            console.log(newDataQuotation)
            console.log(dataHeadOffice)
        }
    }

    const handleSubmit = () => {
        let payload = {
            id: noPo,
            tglPo: tglPo,
            preparedBy: 'Head Office',
            dataPo: dataTable,
            quotation: quotation,
            totalPo: grandTotal,
            status: 'draft',
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            createdBy: 'Head Office',
            active: true
        }
        headOffice('addPo', payload)
        history.goBack()
    }

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
                            // placeholder='Hendratno - Head Office'
                            value={'Hendratno - Head Office'}
                            disabled
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
                            value='SPC'
                            disabled
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
                            onChange={(e) => setTglPo(e.target.value)}
                            value={tglPo}
                            type={"date"}
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
                            onChange={(e) => setNoPo(e.target.value)}
                            value={noPo}
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
                            onClick={quotation != null? () => null : () => setVisibleProduk(true)}
                            style={{ height: 50, backgroundColor: quotation != null? '#D8D8D8' : '#FAC745', borderRadius: 10, display: 'flex', justifyContent: 'center', cursor: 'pointer', padding: '0 10px', marginRight: 20 }}>
                            <Typography style={{ color: 'white', fontSize: 16, fontWeight: '500', textAlign: 'center', alignSelf: 'center' }}>+ Add Stock</Typography>
                        </div>
                        <div
                            onClick={() => setVisiblePengajuan(true)}
                            style={{ height: 50, backgroundColor: '#3699FF', borderRadius: 10, display: 'flex', justifyContent: 'center', cursor: 'pointer', padding: '0 10px' }}>
                            <Typography style={{ color: 'white', fontSize: 16, fontWeight: '500', textAlign: 'center', alignSelf: 'center' }}>+ Region Requested</Typography>
                        </div>
                    </div>
                    <ThemeProvider theme={getMuiTheme()}>
                        <MUIDataTable
                            // title={"ACME Employee list"}
                            data={dataTable}
                            columns={columns}
                            options={options}
                        />
                    </ThemeProvider>
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'row', padding: '20px 20px 0px', }}>
                            <Typography style={{ alignSelf: 'center', marginRight: 30, fontSize: 18, color: 'black', fontWeight: 'bold' }}>Total (Rp)</Typography>
                            <div style={{ backgroundColor: '#D8D8D8', padding: 10, borderRadius: 5 }}>
                                <Typography>{grandTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Typography>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', width: '100%', alignSelf: 'flex-end' }}>
                        <div
                            onClick={() => handleSubmit()}
                            style={{ height: 50, backgroundColor: '#3699FF', borderRadius: 10, display: 'flex', justifyContent: 'center', cursor: 'pointer', padding: '0 10px', width: '100%' }}>
                            <Typography style={{ color: 'white', fontSize: 16, fontWeight: '500', textAlign: 'center', alignSelf: 'center' }}>SUBMIT</Typography>
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
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={dataBarang}
                                    getOptionLabel={(option) => option.name}
                                    onChange={(e, newInputValue) => {
                                        setBarang(newInputValue)
                                        console.log(newInputValue)
                                    }}
                                    // onChange={(event, newInputValue) => newInputValue == null ? setReferance(null) : setReferance(newInputValue)}
                                    sx={{ width: 'inherit' }}
                                    style={{
                                        width: '-webkit-fill-available',
                                        fontSize: 14,
                                        backgroundColor: 'white'
                                    }}
                                    renderInput={(params) =>
                                        <TextField {...params} />}
                                />
                            </div>
                            <div style={{ display: 'flex', marginTop: 20 }}>
                                <Typography style={{ textAlign: 'left', fontWeight: 'bold', alignSelf: 'center', width: 200 }}>Harga Satuan (Rp)</Typography>
                                <TextField
                                    style={{ width: '37%' }}
                                    variant="outlined"
                                    value={barang == null ? '' : barang.harga}
                                    // onChange={(e) => setNama(e.target.value)}
                                    inputProps={{
                                        style: {
                                            fontSize: 14,
                                            backgroundColor: 'white'
                                        }
                                    }}
                                    disabled
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
                                    value={qty}
                                    onChange={(e) => {
                                        let calc = barang.harga * e.target.value
                                        let calcTotal = calc - ((disc > 0 ? disc / 100 : 0) * calc)
                                        // console.log(calc)
                                        setQty(e.target.value)
                                        setJumlah(calc)
                                        setTotal(calcTotal)
                                    }}
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
                                    // value={nama}
                                    value={jumlah}
                                    // onChange={(e) => setNama(e.target.value)}
                                    inputProps={{
                                        style: {
                                            fontSize: 14,
                                            backgroundColor: 'white'
                                        }
                                    }}
                                    disabled
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
                                    value={disc}
                                    onChange={(e) => {
                                        setDisc(e.target.value)
                                        let calc = barang.harga * qty
                                        let calcTotal = calc - ((e.target.value > 0 ? e.target.value / 100 : 0) * calc)
                                        setJumlah(calc)
                                        setTotal(calcTotal)
                                    }}
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
                                    onChange={(e) => setTotal(e.target.value)}
                                    value={total}
                                    type={'number'}
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
                                <div onClick={() => {
                                    dataTable.push([
                                        dataTable.length + 1,
                                        barang.name,
                                        barang.merk,
                                        qty,
                                        barang.harga,
                                        total,
                                        "X",
                                        barang.id,
                                    ])
                                    let totalz = 0
                                    dataTable.map((item, index) => {
                                        totalz += Number(item[5])
                                    })
                                    setGrandTotal(Number(totalz))
                                    setVisibleProduk(false)
                                    setTotal(0)
                                    setDisc(0)
                                    setJumlah(0)
                                    setTotal(0)
                                    setBarang(null)
                                    setQty(0)
                                }} style={{ height: 60, width: 250, backgroundColor: '#3699ff', display: 'flex', justifyContent: 'center', borderRadius: 10 }}>
                                    <Typography style={{ color: 'white', fontSize: 18, fontWeight: 'bold', textAlign: 'center', alignSelf: 'center' }}>ADD</Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
            }

            {
                visiblePengajuan && (
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
                                    <Typography style={{ textAlign: 'left', fontWeight: 'bold', alignSelf: 'center', width: 200 }}>Nama Quotation</Typography>
                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        options={dataQuotation}
                                        getOptionLabel={(option) => option.id}
                                        onChange={(e, newInputValue) => {
                                            setQuotation(newInputValue)
                                            console.log(newInputValue)
                                        }}
                                        // onChange={(event, newInputValue) => newInputValue == null ? setReferance(null) : setReferance(newInputValue)}
                                        sx={{ width: 'inherit' }}
                                        style={{
                                            width: '-webkit-fill-available',
                                            fontSize: 14,
                                            backgroundColor: 'white'
                                        }}
                                        renderInput={(params) =>
                                            <TextField {...params} />}
                                    />
                                </div>
                                {/* <div style={{ display: 'flex', marginTop: 20 }}>
                                <Typography style={{ textAlign: 'left', fontWeight: 'bold', alignSelf: 'center', width: 200 }}>Harga Satuan (Rp)</Typography>
                                <TextField
                                    style={{ width: '55%' }}
                                    variant="outlined"
                                    value={barang == null ? '' : barang.harga}
                                    // onChange={(e) => setNama(e.target.value)}
                                    inputProps={{
                                        style: {
                                            fontSize: 14,
                                            backgroundColor: 'white'
                                        }
                                    }}
                                    disabled
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
                                    style={{ width: '55%' }}
                                    variant="outlined"
                                    value={qty}
                                    onChange={(e) => {
                                        let calc = barang.harga * e.target.value
                                        let calcTotal = calc - ((disc > 0 ? disc / 100 : 0) * calc)
                                        // console.log(calc)
                                        setQty(e.target.value)
                                        setJumlah(calc)
                                        // setTotal(calcTotal)
                                    }}
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
                            </div> */}
                                <div style={{ display: 'flex', marginTop: 20 }}>
                                    <Typography style={{ textAlign: 'left', fontWeight: 'bold', alignSelf: 'center', width: 200 }}>Total (Rp)</Typography>
                                    <TextField
                                        style={{ width: '100%' }}
                                        variant="outlined"
                                        // value={nama}
                                        value={quotation == null ? '' : quotation.totalQuotation.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                        // onChange={(e) => setNama(e.target.value)}
                                        inputProps={{
                                            style: {
                                                fontSize: 14,
                                                backgroundColor: 'white'
                                            }
                                        }}
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
                            <div className="grid grid-2x grid-mobile-none gap-15px" style={{ padding: 20, paddingRight: 50, paddingLeft: 50 }}>
                                <div>

                                </div>
                                <div style={{ marginTop: 50, justifySelf: 'flex-end' }}>
                                    <div onClick={() => {
                                        setDataTable(quotation.dataQuotation)
                                        let totalz = 0
                                        if (quotation == null) {
                                            dataTable.map((item, index) => {
                                                totalz += Number(item[5])
                                            })
                                        } else {
                                            quotation.dataQuotation.map((item, index) => {
                                                totalz += Number(item[5])
                                            })
                                        }
                                        setGrandTotal(Number(totalz))
                                        setVisiblePengajuan(false)
                                        // setTotal(0)
                                        // setDisc(0)
                                        // setJumlah(0)
                                        // setTotal(0)
                                        // setBarang(null)
                                        // setQty(0)
                                    }} style={{ height: 60, width: 250, backgroundColor: '#3699ff', display: 'flex', justifyContent: 'center', borderRadius: 10 }}>
                                        <Typography style={{ color: 'white', fontSize: 18, fontWeight: 'bold', textAlign: 'center', alignSelf: 'center' }}>ADD</Typography>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div >
    )
}
