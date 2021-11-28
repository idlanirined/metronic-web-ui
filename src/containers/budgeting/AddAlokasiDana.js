import { TextField, Typography, ThemeProvider, Autocomplete } from '@mui/material'
import React, { useState } from 'react'
// import { ThemeProvider } from "@mui/styles";
// import { createTheme } from "@mui/material/styles";
import MUIDataTable from "mui-datatables";
import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/system';

const ct = require("../../library/CustomTable");
const getMuiTheme = () => createTheme(ct.customTable());

const useStyles = makeStyles(theme => ({
    root: {
        "& .MuiPaper-root": {
            borderRadius: "4px",
            boxShadow: "none !important"
        }
    }
}));

export default function AddAlokasiDana() {
    const classes = useStyles();
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

    const columns = [
        "NO",
        "NAMA GL/ Buku Besar",
        "Nomor GL",
        "TOTAL",
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
        onTableChange: (action, state) => {
            console.log(action);
            console.dir(state);
        }
    };

    const data = [
        "", ""
    ]

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
                </div>
            </div>
            <div style={{ margin: '0px 20px', padding: '20px', borderRadius: 20, backgroundColor: '#FEFEFE' }}>
                <ThemeProvider className={getMuiTheme()}>
                    <MUIDataTable
                        // title={"ACME Employee list"}
                        data={data}
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
                    <div style={{ marginTop: 20, backgroundColor: '#1BC5BD', width: '100%', padding: 15, borderRadius: 10 }}>
                        <Typography style={{ alignSelf: 'center', marginRight: 30, fontSize: 18, color: 'white', fontWeight: 'bold', textAlign: 'center' }}>SUBMIT</Typography>
                    </div>
                </div>
            </div>
        </div >
    )
}
