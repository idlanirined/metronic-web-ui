import { TextField, Typography, ThemeProvider, Autocomplete, TableCell } from '@mui/material'
import React, { useEffect, useState } from 'react'
// import { ThemeProvider } from "@mui/styles";
// import { createTheme } from "@mui/material/styles";
import MUIDataTable from "mui-datatables";
import { createTheme } from "@mui/material/styles";
import CloseImage from '../../assets/ic_close.png';
import { useLocation } from 'react-router-dom';
import UploadFile from "../../library/UploadFile";
import Constant from '../../library/Constants';
import moment from 'moment';
import { headOffice } from '../../library/Service';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

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


export default function AddQuotation() {
    const location = useLocation()
    const history = useHistory()
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
    const [grandTotal, setGrandTotal] = useState(0)
    const [batasMax, setBatasMax] = useState(0)
    const [keterangan, setKeterangan] = useState("")
    const [hideTable, setHideTable] = useState(false)
    const [visibleAdd, setVisibleAdd] = useState(false)
    const [total, setTotal] = useState("")
    const [listAccount, setListAccount] = useState([])
    const [pickAccount, setPickAccount] = useState(null)
    const [dataTable, setDataTable] = useState([])

    const [visibleUpload, setVisibleUpload] = useState(false)
    const [percentage, setpercentage] = useState('0')
    const [uploadstatus, setuploadstatus] = useState("")
    const [result, setresult] = useState("")
    const [file, setFile] = useState(null)
    const [nameFile, setNameFile] = useState(null)

    const forceUpdate = React.useReducer(bool => !bool)[1];

    const columns = [
        {
            label: "NO",
            options: {
                sort: false,
                filter: false,
                customHeadRender: (columnMeta) => (
                    <TableCell key={columnMeta.index} style={{ backgroundColor: '#3699ff' }}>
                        <Typography style={{ color: '#FFFFFF', fontSize: 14, fontWeight: 'bold', textAlign: 'center' }}>{columnMeta.label}</Typography>
                    </TableCell>
                ),
                customBodyRender: (val, tableMeta) => {
                    return (
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            {tableMeta.rowIndex + 1}
                        </div>
                    )
                }
            }
        },
        "NAMA GL/ Buku Besar",
        "Nomor GL",
        "TOTAL",
        {
            label: "DELETE",
            options: {
                sort: false,
                filter: false,
                customHeadRender: (columnMeta) => (
                    <TableCell key={columnMeta.index} style={{ backgroundColor: '#3699ff' }}>
                        <Typography style={{ color: '#FFFFFF', fontSize: 14, fontWeight: 'bold', textAlign: 'center' }}>{columnMeta.label}</Typography>
                    </TableCell>
                ),
                customBodyRender: (val, tableMeta) => {
                    return (
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div style={{ backgroundColor: 'red', width: '100%', padding: '10px 0', cursor: 'pointer' }}
                                onClick={() => {
                                    dataTable.splice(tableMeta.rowIndex, 1)
                                    let totalz = 0
                                    dataTable.map((item,index) => {
                                        totalz += Number(item[3])
                                    })
                                    setGrandTotal(Number(totalz))
                                    forceUpdate()
                                }}
                            >
                                <Typography style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', color: 'white' }}>{val}</Typography>

                            </div>
                        </div>
                    )
                }
            }
        }
    ];

    const options = {
        search: true,
        download: false,
        print: false,
        pagination: false,
        viewColumns: false,
        filter: false,
        selectableRows: false,
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
        "", ""
    ]

    React.useEffect(() => {
        // getTahun()
        // getData()
        // setListAccount(location.state.dataHeadOffice.account)
    }, [])

    const getData = () => {
        let dataHeadOffice = JSON.parse(localStorage.getItem(Constant.DATA_HEAD_OFFICE))
        console.log(dataHeadOffice)
        if (dataHeadOffice != null) {
            let listRegion = dataHeadOffice.region
            setDataHeadOffice(dataHeadOffice)
            let newListRegion = []
            listRegion.map((item,index) => {
                if(item.id !== 'HO-1') {
                    newListRegion.push(item)
                }
            })
            setListRegion(newListRegion)
            setRegion(newListRegion[0])
            if (dataHeadOffice.anggaran.length > 0) {
                getBatasMax(dataHeadOffice, newListRegion[0])
            }
        }
    }

    const getBatasMax = (data, region) => {
        // console.log(dataHeadOffice)
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

    const onDrop = (e) => {
        console.log(e);
    }

    const fileHandler = (event) => {
        console.log(event)
        setNameFile(event.name)
        setFile(event)

        // let length = event.name.split(".").length
        // let fileType = event.name.split(".")[length - 1]
    }

    const handleSubmit = () => {
        let payload = {
            id: 'DNR-01',
            region: region,
            files: null,
            tahun: tahun.value,
            dataNonRutin: dataTable,
            totalNonRutin: grandTotal,
            batasMax: batasMax,
            keterangan: keterangan,
            createdBy: region.name,
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        }
        console.log(payload)
        headOffice('addDanaNonRutin', payload)
        history.goBack()
    }

    return (
        <div>
            <div style={{ backgroundColor: '#FEFEFE', padding: '15px 20px' }}>
                <Typography style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>Tambah Dana Non Rutin</Typography>
            </div>
            <div style={{ padding: 20, borderRadius: 20 }}>
                <div style={{ backgroundColor: '#FFFFFF', borderRadius: 20, padding: 20 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography style={{ color: 'black', fontSize: 18, fontWeight: 'bold', width: '15%', alignSelf: 'center' }}>Region</Typography>
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
                                width: 320,
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
                        <Typography style={{ color: 'black', fontSize: 18, fontWeight: 'bold', width: '15%', alignSelf: 'center' }}>Tahun</Typography>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={listTahun}
                            getOptionLabel={(option) => option.value}
                            value={tahun}
                            onChange={(event, newInputValue) => setTahun(newInputValue)}
                            sx={{ width: 'inherit' }}
                            style={{
                                width: 320,
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
                    <div style={{ display: 'flex', marginTop: 20, width: '50%', justifyContent: 'space-between' }}>
                        <Typography style={{ color: 'black', fontSize: 18, fontWeight: 'bold', width: '21.5%', alignSelf: 'center' }}>Upload File</Typography>
                        <div style={{ width: 320, backgroundColor: '#e5e5e5', border: 'solid 1px gray', borderRadius: 3, display: 'flex', justifyContent: 'space-between', marginRight: '10%' }}>
                            <Typography maxWidth={'70%'} style={{ whiteSpace: 'nowrap', overflow: 'overlay' }}>{nameFile}</Typography>
                            <div
                                onClick={() => {
                                    setVisibleUpload(true)
                                }}
                                style={{ height: 40, width: '30%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#434349', borderRadius: 5 }}>
                                <Typography style={{ color: 'white', fontWeight: 16, textAlign: 'center' }}>Browse</Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ margin: '0px 20px', padding: '20px', borderRadius: 20, backgroundColor: '#FEFEFE' }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end', }}>
                    <div
                        onClick={() => {
                            setVisibleAdd(true)
                        }}
                        style={{ marginTop: 20, backgroundColor: '#3699ff', width: '20%', padding: 15, borderRadius: 10, cursor: 'pointer' }}>
                        <Typography style={{ alignSelf: 'center', fontSize: 18, color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Add GL</Typography>
                    </div>
                </div>
                <ThemeProvider theme={theme}>
                    <MUIDataTable
                        // title={"ACME Employee list"}
                        data={dataTable}
                        columns={columns}
                        options={options}
                    />
                </ThemeProvider>
                <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '20px 20px 0px', }}>
                    <Typography style={{ alignSelf: 'center', marginRight: 30, fontSize: 18, color: 'black', fontWeight: 'bold' }}>Grand Total (Rp)</Typography>
                    <div style={{ backgroundColor: '#D8D8D8', padding: 10, borderRadius: 5 }}>
                        <Typography>{grandTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Typography>
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
                    <div onClick={() => handleSubmit()} style={{ marginTop: 20, backgroundColor: '#3699ff', width: '100%', padding: 15, borderRadius: 10 }}>
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
                                <Typography style={{ textAlign: 'left', fontWeight: 'bold', alignSelf: 'center', width: 200 }}>Account Detail</Typography>
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={listAccount}
                                    getOptionLabel={(option) => option.name}
                                    onChange={(e, newInputValue) => {
                                        setPickAccount(newInputValue)
                                    }}
                                    // onChange={(event, newInputValue) => newInputValue == null ? setReferance(null) : setReferance(newInputValue)}
                                    sx={{ width: 'inherit' }}
                                    style={{
                                        width: '-webkit-fill-available',
                                        fontSize: 14,
                                        backgroundColor: '#e5e5e5'
                                    }}
                                    renderInput={(params) =>
                                        <TextField {...params} />}
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
                                    dataTable.push([
                                        dataTable.length+1,
                                        pickAccount.name,
                                        pickAccount.id,
                                        total,
                                        "X",
                                    ])
                                    let totalz = 0
                                    dataTable.map((item,index) => {
                                        totalz += Number(item[3])
                                    })
                                    setGrandTotal(Number(totalz))
                                    setVisibleAdd(false)
                                    setTotal(0)
                                }} style={{ height: 60, width: 250, backgroundColor: '#3699ff', display: 'flex', justifyContent: 'center', borderRadius: 10 }}>
                                    <Typography style={{ color: 'white', fontSize: 18, fontWeight: 'bold', textAlign: 'center', alignSelf: 'center' }}>TAMBAH</Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {visibleUpload && (
                <div className="App app-popup-show" >
                    <div className="popup-content background-white border-radius" style={{ borderRadius: 8 }}>
                        <div className="popup-panel grid grid-2x main-color" style={{ height: 64, borderTopRightRadius: 8, borderTopLeftRadius: 8 }}>
                            <div className="col-1" style={{ maxWidth: "inherit", display: 'flex', alignItems: 'center' }}>
                                <div className="popup-title">
                                    <span style={{ color: 'black', fontSize: 18 }}>Upload File</span>
                                </div>
                            </div>
                            <div className="col-2 content-right" style={{ maxWidth: "inherit", alignSelf: 'center' }}>
                                <button
                                    type="button"
                                    className="btn btn-circle btn-white"
                                    onClick={() => {
                                        setVisibleUpload(false)
                                    }}
                                >
                                    <img src={CloseImage} />
                                </button>
                            </div>
                        </div>

                        <UploadFile
                            type={uploadstatus}
                            percentage={percentage}
                            result={result}
                            acceptedFiles={["JPG", "JPEG", "PNG", "PDF", "DOC", "DOCX", "XLSX"]}
                            onHandle={(dt) => {
                                fileHandler(dt)
                                setuploadstatus('idle')
                                setpercentage('0')
                            }}
                            docName={nameFile}
                            onDrop={onDrop}
                            onUpload={() => {
                                console.log('test');
                                setVisibleUpload(false)
                                // checkPreview()
                                // this.uploadAttachment(this.state.formData)
                            }}

                            onDelete={() => {
                                setNameFile("")
                            }}
                        />
                    </div>
                </div>
            )}
        </div >
    )
}
