import { TextField, Typography, ThemeProvider, Autocomplete, TableCell } from '@mui/material'
import React, { useState } from 'react'
// import { ThemeProvider } from "@mui/styles";
// import { createTheme } from "@mui/material/styles";
import MUIDataTable from "mui-datatables";
import { createTheme } from "@mui/material/styles";
import { width } from '@mui/system';
import Constant from '../../library/Constants';
import NumberFormat from 'react-number-format';
import moment from 'moment';
import { headOffice } from '../../library/Service';
import { useHistory, useLocation } from 'react-router-dom';

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

export default function EditAnggaranRegional(props) {
    const location = useLocation()
    const [responsive, setResponsive] = useState("vertical");
    const [tableBodyHeight, setTableBodyHeight] = useState("50vh");
    const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
    const [listTahun, setListTahun] = useState([])
    const [dataAnggaran, setDataAnggaran] = useState([])
    const [totalAnggaran, setTotalAnggaran] = useState(0)
    const [totalAnggaranPusat, setTotalAnggaranPusat] = useState(0)
    const [totalAnggaranRutin, setTotalAnggaranRutin] = useState(0)
    const [totalAnggaranSisa, setTotalAnggaranSisa] = useState(0)
    const [asu, setAsu] = useState(false)
    const [tahun, setTahun] = useState(null)
    const [dataShadow, setDataShadow] = useState([])
    const history = useHistory()

    const handleValue = (value, row, column, tableMeta) => {
        dataShadow[row][column] = Number(value)
        let total = 0
        dataShadow.map((item, index) => {
            total += item[2]
        })
        // totalAnggaranRutin = total
        setTotalAnggaranRutin(total)
        setTotalAnggaranSisa(totalAnggaranPusat - total)
        setTotalAnggaran(total)
    }

    const handleTotal = (tableMeta) => {
        // let total = 0
        // dataShadow.map((item,index) => {
        //     total += item[2]
        // })
        // // totalAnggaranRutin = total
        // setTotalAnggaranRutin(total)
    }

    const columns = [
        "NO",
        "NAMA",
        {
            nama: "Alokasi Anggaran Rutin",
            options: {
                sort: false,
                filter: false,
                customHeadRender: (columnMeta) => (
                    <TableCell key={columnMeta.index} style={{ backgroundColor: '#3699ff', padding: '10px 20px', border: '3px solid #FFF' }}>
                        <Typography style={{ color: 'white', fontSize: 16, fontWeight: 'bold', textAlign: 'left' }}>{"Alokasi Anggaran Rutin"}</Typography>
                    </TableCell>
                ),
                customBodyRender: (val, tableMeta, updateValue) => {
                    return (
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <NumberFormat
                                value={val}
                                key={tableMeta.rowData[0]}
                                customInput={TextField}
                                style={{ width: '100%' }}
                                prefix={'Rp. '}
                                type="text"
                                thousandSeparator={true}
                                onValueChange={({ value: v }) => handleValue(v, tableMeta.rowIndex, tableMeta.columnIndex, tableMeta)}
                            // onBlur={() => handleTotal()}
                            />
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
        selectableRows: false,
        filterType: "dropdown",
        responsive,
        pagination: false,
        tableBodyHeight,
        tableBodyMaxHeight,
        sortOrder: { name: 'NO', direction: 'asc' },
        onTableChange: (action, state) => {
            // console.log(action);
            // console.dir(state);
        }
    };

    const forceUpdate = React.useReducer(bool => !bool)[1];

    React.useEffect(() => {
        console.log('yu', props, location)
        // getRegion()
        getTahun()
        let data = location.state.dataHeadOffice.anggaran
        let idx = data.findIndex((val) => val.id === location.state.dataSelected[0])
        setTotalAnggaranSisa(data[idx].sisaAnggaran)
        setTotalAnggaranPusat(data[idx].totalAnggaranPusat)
        setTotalAnggaranRutin(data[idx].totalAnggaranRutin)
        setDataShadow(data[idx].dataAnggaran)
        setDataAnggaran(data[idx].dataAnggaran)
        forceUpdate()
        console.log(data[idx].dataAnggaran);
    }, [])

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

    const getRegion = () => {
        let dataHeadOffice = JSON.parse(localStorage.getItem(Constant.DATA_HEAD_OFFICE))
        let region = dataHeadOffice.region
        let newDataAnggaran = []
        let dataAnggaranShadow = []
        newDataAnggaran.push([newDataAnggaran.length + 1, "Head Office", 0])
        dataAnggaranShadow.push([dataAnggaranShadow.length + 1, "Head Office", 0])
        region.map((item, index) => {
            newDataAnggaran.push([newDataAnggaran.length + 1, item.name, 0])
            dataAnggaranShadow.push([dataAnggaranShadow.length + 1, item.name, 0])
        })
        // setDataAnggaran(newDataAnggaran)
        // setDataShadow(dataAnggaranShadow)
    }

    const handleAddAnggaran = () => {
        let newData = {
            id: tahun.value,
            name: tahun.value,
            totalAnggaranPusat: totalAnggaranPusat,
            totalAnggaranRutin: Number(totalAnggaranRutin),
            dataAnggaran: dataShadow,
            sisaAnggaran: Number(totalAnggaranSisa),
            createdBy: "Head Office",
            createdDate: moment(new Date()).format('DD MMM YYYY HH:mm:ss'),
            active: true
        }
        headOffice('editAnggaran', newData)
        // props.getData()
        // props.onClose()
        // console.log(history)
        history.goBack()
    }

    return (
        <div>
            <div style={{ backgroundColor: '#FEFEFE', padding: '15px 20px' }}>
                <Typography style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>Edit Master Anggaran</Typography>
            </div>
            <div style={{ margin: '20px 20px', padding: '20px', borderRadius: 20, backgroundColor: '#FEFEFE' }}>
                <div className="grid grid-2x grid-mobile-none gap-15px" style={{}}>
                    <div className="column-1" style={{ display: 'flex' }}>
                        <Typography style={{ color: 'black', fontSize: 18, fontWeight: 'bold', width: '15%', alignSelf: 'center' }}>Tahun</Typography>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={listTahun}
                            value={tahun}
                            onChange={(event, newInputValue) => setTahun(newInputValue)}
                            getOptionLabel={(option) => option.value}
                            sx={{ width: 'inherit' }}
                            style={{
                                width: 320,
                                fontSize: 14,
                                backgroundColor: 'white'
                            }}
                            renderInput={(params) =>
                                <TextField {...params} />}
                        />
                    </div>
                    <div className="column-2" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography style={{ textAlign: 'left', fontWeight: 'bold', alignSelf: 'center', width: '28%' }}>Total Anggaran Pusat</Typography>
                        <NumberFormat
                            value={totalAnggaranPusat}
                            customInput={TextField}
                            style={{ width: '68%' }}
                            prefix={'Rp. '}
                            type="text"
                            thousandSeparator={true}
                            onValueChange={({ value: v }) => setTotalAnggaranPusat(v)}
                        />
                    </div>
                    {/* <div className="column-2" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography style={{ textAlign: 'left', fontWeight: 'bold', alignSelf: 'center', width: '28%' }}>Total Anggaran Rutin</Typography>
                        <NumberFormat
                            value={totalAnggaranRutin}
                            customInput={TextField}
                            style={{ width: '68%' }}
                            prefix={'Rp. '}
                            type="text"
                            thousandSeparator={true}
                            // onValueChange={({ value: v }) => setTotalAnggaranRutin(v)}
                        />
                    </div>
                    <div className="column-2" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography style={{ textAlign: 'left', fontWeight: 'bold', alignSelf: 'center', width: '28%' }}>Anggaran Belum Terealisasi</Typography>
                        <NumberFormat
                            value={totalAnggaranSisa}
                            customInput={TextField}
                            style={{ width: '68%', backgroundColor: 'white' }}
                            prefix={'Rp. '}
                            type="text"
                            disabled
                            thousandSeparator={true}
                            onValueChange={({ value: v }) => setTotalAnggaranSisa(v)}
                        />
                    </div> */}
                </div>
                <div style={{ marginTop: 20, backgroundColor: 'red' }}>
                    <ThemeProvider theme={theme}>
                        <MUIDataTable
                            // title={"ACME Employee list"}
                            data={dataAnggaran}
                            columns={columns}
                            options={options}
                        />
                    </ThemeProvider>

                </div>
                <div className="grid grid-2x grid-mobile-none gap-15px" style={{}}>
                    <div className="column-2" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography style={{ textAlign: 'left', fontWeight: 'bold', alignSelf: 'center', width: '28%' }}>Total Anggaran Rutin</Typography>
                        <NumberFormat
                            value={totalAnggaranRutin}
                            customInput={TextField}
                            style={{ width: '68%' }}
                            disabled
                            prefix={'Rp. '}
                            type="text"
                            thousandSeparator={true}
                        // onValueChange={({ value: v }) => setTotalAnggaranRutin(v)}
                        />
                    </div>
                    <div className="column-2" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography style={{ textAlign: 'left', fontWeight: 'bold', alignSelf: 'center', width: '28%' }}>Anggaran Belum Terealisasi</Typography>
                        <NumberFormat
                            value={totalAnggaranSisa}
                            customInput={TextField}
                            style={{ width: '68%', backgroundColor: 'white' }}
                            prefix={'Rp. '}
                            type="text"
                            disabled
                            thousandSeparator={true}
                            onValueChange={({ value: v }) => setTotalAnggaranSisa(v)}
                        />
                    </div>
                </div>
                {/* <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '20px 20px 0px', }}>
                    <Typography style={{ alignSelf: 'center', marginRight: 30, fontSize: 18, color: 'black', fontWeight: '500' }}>Grand Total </Typography>
                    <div style={{ backgroundColor: 'transparent', padding: 10, borderRadius: 5, width: '38%', display: 'flex', justifyContent: 'space-between' }}>
                        <Typography>Rp. </Typography>
                        <Typography>{totalAnggaran}</Typography>
                    </div>
                </div> */}
                <div onClick={() => handleAddAnggaran()} style={{ marginTop: 40, backgroundColor: '#3699ff', width: '100%', padding: 10, borderRadius: 10 }}>
                    <Typography style={{ alignSelf: 'center', marginRight: 30, fontSize: 18, color: 'white', fontWeight: 'bold', textAlign: 'center' }}>SAVE</Typography>
                </div>
            </div>
        </div >
    )
}
