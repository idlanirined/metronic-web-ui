import React from 'react'
import CloseImage from '../../assets/ic_close.png';
import { Autocomplete, TextField, Typography } from "@mui/material";
import { headOffice } from '../../library/Service';
import Constant from '../../library/Constants';
import moment from 'moment'

export default function AddBarang(props) {
    const [listJenis, setListJenis] = React.useState(props.dataHeadOffice.jenis_barang)
    const [listSatuan, setListSatuan] = React.useState(props.dataHeadOffice.satuan_barang)
    const [listGolongan, setlistGolongan] = React.useState(props.dataHeadOffice.gol_barang)
    const [listAccount, setListAccount] = React.useState(props.dataHeadOffice.account)
    const [nama, setNama] = React.useState("")
    const [merk, setMerk] = React.useState("")
    const [jenis, setJenis] = React.useState("")
    const [satuan, setSatuan] = React.useState("")
    const [golongan, setGolongan] = React.useState("")
    const [account, setAccount] = React.useState("")
    const [stok, setStok] = React.useState(0)

    const handleAddBarang = () => {
        let newData = {
            id: `BR-${props.dataBarang.length + 1}`,
            name: nama,
            jenis: jenis,
            satuan: satuan,
            golongan: golongan,
            merk: merk,
            stok: stok,
            harga: 0,
            createdBy: "Head Office",
            createdDate: moment(new Date()).format('DD MMM YYYY HH:mm:ss'),
            active: true
        }
        headOffice('addBarang', newData)
        props.getData()
        props.onClose()
    }

    return (
        <div className="App app-popup-show">
            <div className="popup-content-middle background-white" style={{ borderRadius: 8, backgroundColor: 'white' }}>
                <div className="popup-panel grid grid-2x" style={{ height: 64 }}>
                    <div className="col-1" style={{ maxWidth: "inherit", display: 'flex', alignItems: 'center' }}>
                        <div className="popup-title">
                            <span style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>Tambah Barang</span>
                        </div>
                    </div>
                    <div className="col-2 content-right" style={{ maxWidth: "inherit", alignSelf: 'center' }}>
                        <button
                            type="button"
                            className="btn btn-circle btn-white"
                            onClick={() => props.onClose()}
                        >
                            <img src={CloseImage} style={{ width: 20, height: 20 }} />
                        </button>
                    </div>
                </div>
                <div className="grid grid-2x grid-mobile-none gap-15px" style={{ padding: 20, paddingRight: 50, paddingLeft: 50 }}>
                    <div className="column-1" style={{ display: 'flex' }}>
                        <Typography style={{ textAlign: 'left', fontWeight: 'bold', alignSelf: 'center', width: 130 }}>Nama Barang</Typography>
                        <TextField
                            style={{ width: '100%' }}
                            variant="outlined"
                            value={nama}
                            onChange={(e) => setNama(e.target.value)}
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
                    <div className="column-2" style={{ display: 'flex' }}>
                        <Typography style={{ textAlign: 'left', fontWeight: 'bold', alignSelf: 'center', width: 130 }}>Golongan Barang</Typography>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={listGolongan}
                            getOptionLabel={(option) => option.name}
                            sx={{ width: 'inherit' }}
                            style={{
                                fontSize: 14,
                                backgroundColor: '#e5e5e5'
                            }}
                            renderInput={(params) =>
                                <TextField {...params} />}
                            onChange={(event, newInputValue) => newInputValue == null? setGolongan("") : setGolongan(newInputValue.name)}
                        />
                    </div>
                    <div className="column-1" style={{ display: 'flex' }}>
                        <Typography style={{ textAlign: 'left', fontWeight: 'bold', alignSelf: 'center', width: 130 }}>Jenis Barang</Typography>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={listJenis}
                            getOptionLabel={(option) => option.name}
                            sx={{ width: 'inherit' }}
                            style={{
                                fontSize: 14,
                                backgroundColor: '#e5e5e5'
                            }}
                            renderInput={(params) =>
                                <TextField {...params} />}
                            onChange={(event, newInputValue) => newInputValue == null? setJenis("") : setJenis(newInputValue.name)}
                        />
                    </div>
                    <div className="column-2" style={{ display: 'flex' }}>
                        <Typography style={{ textAlign: 'left', fontWeight: 'bold', alignSelf: 'center', width: 130 }}>Satuan Barang</Typography>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={listSatuan}
                            getOptionLabel={(option) => option.name}
                            sx={{ width: 'inherit' }}
                            style={{
                                fontSize: 14,
                                backgroundColor: '#e5e5e5'
                            }}
                            renderInput={(params) =>
                                <TextField {...params} />}
                            onChange={(event, newInputValue) => newInputValue == null? setSatuan("") : setSatuan(newInputValue.name)}
                        />
                    </div>
                    <div className="column-1" style={{ display: 'flex' }}>
                        <Typography style={{ textAlign: 'left', fontWeight: 'bold', alignSelf: 'center', width: 130 }}>Merk</Typography>
                        <TextField
                            style={{ width: '100%' }}
                            variant="outlined"
                            value={merk}
                            onChange={(e) => setMerk(e.target.value)}
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
                    <div className="column-2" style={{ display: 'flex' }}>
                        <Typography style={{ textAlign: 'left', fontWeight: 'bold', alignSelf: 'center', width: 130 }}>Account</Typography>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={listAccount}
                            getOptionLabel={(option) => option.name}
                            sx={{ width: 'inherit' }}
                            style={{
                                fontSize: 14,
                                backgroundColor: '#e5e5e5'
                            }}
                            renderInput={(params) =>
                                <TextField {...params} />}
                            onChange={(event, newInputValue) => newInputValue == null? setAccount("") : setAccount(newInputValue.name)}
                        />
                    </div>
                    <div className="column-1" style={{ display: 'flex' }}>
                        <Typography style={{ textAlign: 'left', fontWeight: 'bold', alignSelf: 'center', width: 130 }}>Stok</Typography>
                        <TextField
                            style={{ width: '100%' }}
                            variant="outlined"
                            value={stok}
                            onChange={(e) => setStok(e.target.value)}
                            inputProps={{
                                style: {
                                    fontSize: 14,
                                    backgroundColor: '#e5e5e5'
                                }
                            }}
                            disabled
                            size="medium"
                            type={"number"}
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
                        <div onClick={() => handleAddBarang()} style={{ height: 60, width: 250, backgroundColor: '#3699ff', display: 'flex', justifyContent: 'center', borderRadius: 10 }}>
                            <Typography style={{ color: 'white', fontSize: 18, fontWeight: 'bold', textAlign: 'center', alignSelf: 'center' }}>TAMBAH</Typography>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
