import { TextField, Typography, ThemeProvider, Autocomplete, TableCell } from '@mui/material'
import React, { useEffect, useState } from 'react'
// import { ThemeProvider } from "@mui/styles";
// import { createTheme } from "@mui/material/styles";
import MUIDataTable from "mui-datatables";
import { createTheme } from "@mui/material/styles";
import CloseImage from '../../assets/ic_close.png';
import { useLocation } from 'react-router-dom';
import UploadFile from "../../library/UploadFile";

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


export default function AddDananNonRutin() {
    const location = useLocation()
    const [responsive, setResponsive] = useState("vertical");
    const [tableBodyHeight, setTableBodyHeight] = useState("40vh");
    const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
    const [listTahun, setListTahun] = useState([
        { value: '2020' },
        { value: '2021' },
    ])
    const [listRegion, setListRegion] = useState([
        { value: 'Region 1' },
        { value: 'Region 2' },
    ])
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

    useEffect(() => {
        console.log(location);
        setListAccount(location.state.dataHeadOffice.account)
    }, [])

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
                            getOptionLabel={(option) => option.value}
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
                        <Typography>500.000.000</Typography>
                    </div>
                </div>
            </div>
            <div style={{ padding: 20, borderRadius: 20 }}>
                <div style={{ backgroundColor: '#FFFFFF', borderRadius: 20, padding: 20 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography style={{ alignSelf: 'center', marginRight: 30, fontSize: 18, color: 'black', fontWeight: 'bold' }}>Batas Maksimum</Typography>
                        <div style={{ width: '75%', backgroundColor: '#D8D8D8', padding: 10, borderRadius: 5 }}>
                            <Typography style={{ alignSelf: 'center', marginRight: 30, fontSize: 18, color: 'black', fontWeight: '500' }}>450.000.000</Typography>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20 }}>
                        <Typography style={{ alignSelf: 'center', marginRight: 30, fontSize: 18, color: 'black', fontWeight: 'bold' }}>Keterangan</Typography>
                        <div style={{ width: '75%', backgroundColor: '#D8D8D8', padding: 10, borderRadius: 5 }}>
                            <Typography style={{ alignSelf: 'center', marginRight: 30, fontSize: 18, color: 'black', fontWeight: '500' }}>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et</Typography>
                        </div>
                    </div>
                    <div style={{ marginTop: 20, backgroundColor: '#3699ff', width: '100%', padding: 15, borderRadius: 10 }}>
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
                                        "",
                                        pickAccount.name,
                                        pickAccount.id,
                                        total,
                                        "X",
                                    ])
                                    setVisibleAdd(false)
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
