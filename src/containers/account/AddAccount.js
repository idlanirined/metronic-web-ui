import React, { useState } from 'react'
import CloseImage from '../../assets/ic_close.png';
import { Autocomplete, TextField, Typography } from "@mui/material";
import moment from 'moment';
import { headOffice } from '../../library/Service';
import { makeStyles } from '@mui/styles';

export default function AddAccount(props) {
    const [listAccount, setListAccount] = useState(props.dataHeadOffice.account)
    const [nama, setNama] = useState("")
    const [reference, setReferance] = useState(null)

    const handleAddAccount = () => {
        let newData = {
            id: `${Number(props.dataAccount[props.dataAccount.length-1][0]) + 1}`,
            name: nama,
            refID: reference == null? null : reference.id,
            level: Number(props.dataAccount[props.dataAccount.length-1][6]) + 1,
            createdBy: "Head Office",
            createdDate: moment(new Date()).format('DD MMM YYYY HH:mm:ss'),
            active: true
        }
        // console.log(props.dataAccount[props.dataAccount.length-1][0])
        // console.log(newData)
        headOffice('addAccount', newData)
        props.getData()
        props.onClose()
    }

    return (
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
                            onClick={() => props.onClose()}
                        >
                            <img src={CloseImage} style={{ width: 20, height: 20 }} />
                        </button>
                    </div>
                </div>
                <div style={{ padding: 20, paddingRight: 50, paddingLeft: 50 }}>
                    <div style={{ display: 'flex' }}>
                        <Typography style={{ textAlign: 'left', fontWeight: 'bold', alignSelf: 'center', width: 200 }}>Nama Account</Typography>
                        <TextField
                            style={{ width: '100%' }}
                            variant="outlined"
                            onChange={(e) => setNama(e.target.value)}
                            value={nama}
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
                    <div style={{ display: 'flex', marginTop: 20 }}>
                        <Typography style={{ textAlign: 'left', fontWeight: 'bold', alignSelf: 'center', width: 200 }}>Kategori Account</Typography>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={listAccount}
                            getOptionLabel={(option) => option.name}
                            onChange={(event, newInputValue) => newInputValue == null? setReferance(null) : setReferance(newInputValue)}
                            sx={{ width: 'inherit' }}
                            style={{
                                width: '-webkit-fill-available',
                                fontSize: 14,
                                backgroundColor: '#e5e5e5'
                            }}
                            renderInput={(params) =>
                                <TextField {...params}/>}
                        />
                    </div>
                </div>
                <div className="grid grid-2x grid-mobile-none gap-15px" style={{ padding: 20, paddingRight: 50, paddingLeft: 50 }}>
                    <div>

                    </div>
                    <div style={{ marginTop: 50, justifySelf: 'flex-end' }}>
                        <div onClick={() => handleAddAccount()} style={{ height: 60, width: 250, backgroundColor: '#3699ff', display: 'flex', justifyContent: 'center', borderRadius: 10 }}>
                            <Typography style={{ color: 'white', fontSize: 18, fontWeight: 'bold', textAlign: 'center', alignSelf: 'center' }}>TAMBAH</Typography>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
