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
import { useHistory } from 'react-router-dom';

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


export default function AddAlokasiDana() {
    let history = useHistory()
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
    const [batasMax, setBatasMax] = useState(0)
    const [keterangan, setKeterangan] = useState("")
    const [hideTable, setHideTable] = useState(false)

    const handleValue = (value, row, column, tableMeta, updateValue) => {
        dataShadow[row][column] = Number(value)
        dataAccount[row][column] = Number(value)
        updateValue(value)
    }

    const handleUpdate = (tableMeta) => {
        let total = 0
        dataShadow.map((item, index) => {
            total += item[4]
        })
        setGrandTotal(total)
    }

    const columns = [
        { name: 'id', options: { display: false } },
        "NO",
        "NAMA GL/ Buku Besar",
        "Nomor GL",
        {
            nama: "Total",
            options: {
                sort: true,
                filter: false,
                customHeadRender: (columnMeta) => (
                    <TableCell key={columnMeta.index} style={{ ...style, backgroundColor: '#3699ff', padding: '10px 20px', border: '3px solid #FFF', top: 0 }}>
                        <Typography style={{ color: 'white', fontSize: 16, fontWeight: 'bold', textAlign: 'left' }}>{"Total"}</Typography>
                    </TableCell>
                ),
                customBodyRender: (val, tableMeta, updateValue) => {
                    return (
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            {(tableMeta.rowData[9] === 1 && dataAccount[tableMeta.rowIndex + 1][9] !== 2) || tableMeta.rowData[9] === 2 ? (
                                <NumberFormat
                                    value={val}
                                    key={tableMeta.rowData[0]}
                                    customInput={TextField}
                                    style={{ width: '100%' }}
                                    prefix={'Rp. '}
                                    type="text"
                                    thousandSeparator={true}
                                    onValueChange={({ value: v }) => handleValue(v, tableMeta.rowIndex, tableMeta.columnIndex, tableMeta, updateValue)}
                                    onBlur={() => handleUpdate(tableMeta)}
                                />
                            ) : null}
                        </div>
                    )
                }
            }
        },
        { name: '', options: { display: false } },
        { name: '', options: { display: false } },
        { name: '', options: { display: false } },
        { name: '', options: { display: false } },
        { name: '', options: { display: false } },
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
        console.log(dataHeadOffice)
        if (dataHeadOffice != null) {
            let dataTable = []
            let currentCode = 0
            let child = 0
            let currentCode1 = 0
            let child1 = 0
            let char1 = ""
            let char = ""
            let newDataAccount = dataHeadOffice.account.map((item, index) => {
                if (item.level === 1) {
                    currentCode++;
                    char = `${String.fromCharCode(64 + currentCode).toLowerCase()}. `;
                    child = 0
                } else if (item.level === 2) {
                    currentCode = 0
                    char = ""
                    child++;
                } else {
                    char = ""
                    currentCode = 0
                }
                return [
                    index + 1,
                    String(char).toLowerCase(),
                    item.level === 2 ? `${child}). ${item.name}` : item.name,
                    item.id,
                    0,
                    item.createdBy,
                    item.createdDate,
                    item.active,
                    item.refID,
                    item.level,
                    0,
                    0]
            })
            let newDataShadow = dataHeadOffice.account.map((item, index) => {
                if (item.level === 1) {
                    currentCode++;
                    char1 = `${String.fromCharCode(64 + currentCode).toLowerCase()}. `;
                    child1 = 0
                } else if (item.level === 2) {
                    currentCode1 = 0
                    char1 = ""
                    child1++;
                } else {
                    char1 = ""
                    currentCode1 = 0
                }
                return [
                    index + 1,
                    String(char1).toLowerCase(),
                    item.level === 2 ? `${child1}). ${item.name}` : item.name,
                    item.id,
                    0,
                    item.createdBy,
                    item.createdDate,
                    item.active,
                    item.refID,
                    item.level,
                    0,
                    0]
            })
            let listRegion = dataHeadOffice.region
            setDataHeadOffice(dataHeadOffice)
            setListRegion(listRegion)
            setRegion(listRegion[0])
            setDataAccount(newDataAccount.sort((a, b) => a[0] - b[0]))
            setDataShadow(newDataShadow.sort((a, b) => a[0] - b[0]))
            if (dataHeadOffice.anggaran.length > 0) {
                // console.log(region)
                getBatasMax(dataHeadOffice, listRegion[0])
            }
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
                <Typography style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>Tambah Alokasi Dana</Typography>
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
                                backgroundColor: 'white'
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
                            onChange={(event, newInputValue) => {
                                setTahun(newInputValue)
                                getBatasMax()
                            }}
                            sx={{ width: 'inherit' }}
                            style={{
                                width: 320,
                                fontSize: 14,
                                backgroundColor: 'white'
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
                    <div onClick={() => handleAlokasiDana()} style={{ marginTop: 20, backgroundColor: '#3699ff', width: '100%', padding: 15, borderRadius: 10 }}>
                        <Typography style={{ alignSelf: 'center', marginRight: 30, fontSize: 18, color: 'white', fontWeight: 'bold', textAlign: 'center' }}>SUBMIT</Typography>
                    </div>
                </div>
            </div>
        </div >
    )
}
