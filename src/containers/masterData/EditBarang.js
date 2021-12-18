import React, { useEffect, useState } from 'react'
import CloseImage from '../../assets/ic_close.png';
import { Autocomplete, TextField, Typography } from "@mui/material";
import { headOffice } from '../../library/Service';
import moment from 'moment';

export default function EditBarang(props) {
    const [listGolongan, setlistGolongan] = React.useState(props.dataHeadOffice.gol_barang)
    const [pickGolongan, setPickGolongan] = useState(null)
    const [listSatuan, setListSatuan] = React.useState(props.dataHeadOffice.satuan_barang)
    const [pickSatuan, setPickSatuan] = useState(null)
    const [listJenis, setListJenis] = React.useState(props.dataHeadOffice.jenis_barang)
    const [pickJenis, setPickJenis] = useState(null)
    const [listAccount, setListAccount] = React.useState(props.dataHeadOffice.account)

    const [newData, setNewData] = useState({
        id: "",
        name: "",
        jenis: "",
        satuan: "",
        golongan: "",
        merk: "",
        stok: "",
        createdBy: "",
        createdDate: "",
        active: ""
    })

    useEffect(() => {
        let data = props.dataSelected
        setNewData({
            ...newData,
            id: data.id,
            name: data.name,
            jenis: data.jenis,
            satuan: data.satuan,
            golongan: data.golongan,
            merk: data.merk,
            stok: data.stok,
            harga: data.harga,
            createdBy: data.createdBy,
            createdDate: data.createdDate,
            active: data.active
        })
        console.log(props);
        let idxGol = listGolongan.findIndex((val) => val.name === data.golongan)
        if (idxGol > -1) {
            setPickGolongan(listGolongan[idxGol])
        }

        let idxJenis = listJenis.findIndex((val) => val.name === data.jenis)
        if (idxJenis > -1) {
            setPickJenis(listJenis[idxJenis])
        }
        let idxSatuan = listSatuan.findIndex((val) => val.name === data.satuan)
        if (idxSatuan > -1) {
            setPickSatuan(listSatuan[idxSatuan])
        }
    }, [])

    const handleEdit = () => {
        headOffice('editBarang', newData)
        props.getData()
        props.onClose()
    }

    return (
        <div className="App app-popup-show">
            <div className="popup-content-middle background-white" style={{ borderRadius: 8, backgroundColor: 'white' }}>
                <div className="popup-panel grid grid-2x" style={{ height: 64 }}>
                    <div className="col-1" style={{ maxWidth: "inherit", display: 'flex', alignItems: 'center' }}>
                        <div className="popup-title">
                            <span style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>Edit Barang</span>
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
                            onChange={(e) => {
                                setNewData({
                                    ...newData,
                                    name: e.target.value
                                })
                            }}
                            inputProps={{
                                style: {
                                    fontSize: 14,
                                    backgroundColor: '#e5e5e5'
                                }
                            }}
                            value={newData.name}
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
                            value={pickGolongan}
                            onChange={(e, newInputValue) => {
                                setNewData({
                                    ...newData,
                                    golongan: newInputValue.name,
                                })
                                setPickGolongan(newInputValue)
                            }}
                            style={{
                                fontSize: 14,
                                backgroundColor: '#e5e5e5'
                            }}
                            renderInput={(params) =>
                                <TextField {...params} />}
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
                            value={pickJenis}
                            onChange={(e, newInputValue) => {
                                setNewData({
                                    ...newData,
                                    jenis: newInputValue.name,
                                })
                                setPickJenis(newInputValue)
                            }}
                            style={{
                                fontSize: 14,
                                backgroundColor: '#e5e5e5'
                            }}
                            renderInput={(params) =>
                                <TextField {...params} />}
                        />
                    </div>
                    <div className="column-2" style={{ display: 'flex' }}>
                        <Typography style={{ textAlign: 'left', fontWeight: 'bold', alignSelf: 'center', width: 130 }}>Satuan Barang</Typography>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={listSatuan}
                            getOptionLabel={(option) => option.name}
                            value={pickSatuan}
                            onChange={(e, newInputValue) => {
                                setNewData({
                                    ...newData,
                                    satuan: newInputValue.name,
                                })
                                setPickSatuan(newInputValue)
                            }}
                            sx={{ width: 'inherit' }}
                            style={{
                                fontSize: 14,
                                backgroundColor: '#e5e5e5'
                            }}
                            renderInput={(params) =>
                                <TextField {...params} />}
                        />
                    </div>
                    <div className="column-1" style={{ display: 'flex' }}>
                        <Typography style={{ textAlign: 'left', fontWeight: 'bold', alignSelf: 'center', width: 130 }}>Merk</Typography>
                        <TextField
                            style={{ width: '100%' }}
                            variant="outlined"
                            onChange={(e) => null}
                            inputProps={{
                                style: {
                                    fontSize: 14,
                                    backgroundColor: '#e5e5e5'
                                }
                            }}
                            value={newData.merk}
                            onChange={(e) => {
                                setNewData({
                                    ...newData,
                                    merk: e.target.value
                                })
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
                            disabled
                            getOptionLabel={(option) => option.name}
                            sx={{ width: 'inherit' }}
                            style={{
                                fontSize: 14,
                                backgroundColor: '#e5e5e5'
                            }}
                            renderInput={(params) =>
                                <TextField {...params} />}
                        />
                    </div>
                </div>
                <div className="grid grid-2x grid-mobile-none gap-15px" style={{ padding: 20, paddingRight: 50, paddingLeft: 50 }}>
                    <div>

                    </div>
                    <div style={{ marginTop: 50, justifySelf: 'flex-end' }}>
                        <div
                            onClick={() => handleEdit()}
                            style={{ height: 60, width: 250, backgroundColor: '#05b721', display: 'flex', justifyContent: 'center', borderRadius: 10, cursor: 'pointer' }}
                        >
                            <Typography style={{ color: 'white', fontSize: 18, fontWeight: 'bold', textAlign: 'center', alignSelf: 'center' }}>EDIT</Typography>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
