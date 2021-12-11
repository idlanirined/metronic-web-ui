import { TextField, Typography, ThemeProvider, Autocomplete } from '@mui/material'
import React, { useState } from 'react'
// import { ThemeProvider } from "@mui/styles";
// import { createTheme } from "@mui/material/styles";
import MUIDataTable from "mui-datatables";
import { createTheme } from "@mui/material/styles";
import { width } from '@mui/system';

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

export default function AddAnggaranRegional() {
    const [responsive, setResponsive] = useState("vertical");
    const [tableBodyHeight, setTableBodyHeight] = useState("50vh");
    const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
    const [listTahun, setListTahun] = useState([])

    const columns = [
        "NO",
        "NAMA Region",
        "Alokasi Dana",
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
        onTableChange: (action, state) => {
            console.log(action);
            console.dir(state);
        }
    };

    const data = [
        [1, "Head Office", "10.000.000.000"],
        [2, "Region 1", "10.000.000.000"],
        [3, "Region 2", "10.000.000.000"],
        [4, "Region 3", "10.000.000.000"],
        [5, "Region 4", "10.000.000.000"],
        [6, "Region 5", "10.000.000.000"],
        [7, "Region 6", "10.000.000.000"],
    ]

    return (
        <div>
            <div style={{ backgroundColor: '#FEFEFE', padding: '15px 20px' }}>
                <Typography style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>Tambah Alokasi Dana</Typography>
            </div>
            <div style={{ margin: '20px 20px', padding: '20px', borderRadius: 20, backgroundColor: '#FEFEFE' }}>
                <div className="grid grid-2x grid-mobile-none gap-15px" style={{}}>
                    <div className="column-1" style={{ display: 'flex' }}>
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
                                <TextField {...params} />}
                        />
                    </div>
                    <div className="column-2" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography style={{ textAlign: 'left', fontWeight: 'bold', alignSelf: 'center', width: '28%' }}>Total Anggaran Pusat</Typography>
                        <TextField
                            style={{ width: '68%' }}
                            variant="outlined"
                            onChange={(e) => null}
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
                    <div className="column-2" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography style={{ textAlign: 'left', fontWeight: 'bold', alignSelf: 'center', width: '28%' }}>Total Anggaran Rutin</Typography>
                        <TextField
                            style={{ width: '68%' }}
                            variant="outlined"
                            onChange={(e) => null}
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
                    <div className="column-2" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography style={{ textAlign: 'left', fontWeight: 'bold', alignSelf: 'center', width: '28%' }}>Anggaran Belum Terealisasi</Typography>
                        <TextField
                            style={{ width: '68%' }}
                            variant="outlined"
                            onChange={(e) => null}
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
                <div style={{ marginTop: 20 }}>
                    <ThemeProvider theme={theme}>
                        <MUIDataTable
                            // title={"ACME Employee list"}
                            data={data}
                            columns={columns}
                            options={options}
                        />
                    </ThemeProvider>

                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '20px 20px 0px', }}>
                    <Typography style={{ alignSelf: 'center', marginRight: 30, fontSize: 18, color: 'black', fontWeight: '500' }}>Grand Total </Typography>
                    <div style={{ backgroundColor: 'transparent', padding: 10, borderRadius: 5, width: '38%', display: 'flex', justifyContent: 'space-between' }}>
                        <Typography>Rp. </Typography>
                        <Typography>500.000.000</Typography>
                    </div>
                </div>
                <div style={{ marginTop: 40, backgroundColor: '#3699ff', width: '100%', padding: 10, borderRadius: 10 }}>
                    <Typography style={{ alignSelf: 'center', marginRight: 30, fontSize: 18, color: 'white', fontWeight: 'bold', textAlign: 'center' }}>SAVE</Typography>
                </div>
            </div>
        </div >
    )
}
