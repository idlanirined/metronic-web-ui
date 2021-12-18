import React, { useEffect, useState } from 'react'
import CloseImage from '../../assets/ic_close.png';
import { Autocomplete, TextField, Typography } from "@mui/material";
import { headOffice } from '../../library/Service';

export default function EditAccount(props) {
    const [listAccount, setListAccount] = useState(props.dataHeadOffice.account)
    const [newData, setNewData] = useState({
        id: "",
        name: "",
        level: "",
        reference: null,
        createdBy: "",
        createdDate: "",
        active: ""
    })

    useEffect(() => {
        let data = props.dataSelected
        let idxRef = listAccount.findIndex((val) => val.id === data.refID)
        setNewData({
            ...newData,
            id: data.id,
            name: data.name,
            level: data.level,
            reference: idxRef == -1? null : listAccount[idxRef],
            createdBy: data.createdBy,
            createdDate: data.createdDate,
            active: data.active
        })
    }, [])

    const handleEdit = () => {
        let payload = {
            ...newData,
            refID: newData.reference.id,
            level: Number(newData.reference.level) + 1
        }
        headOffice('editAccount', payload)
        props.getData()
        props.onClose()
    }

    return (
        <div className="App app-popup-show">
            <div className="popup-content-middle background-white" style={{ borderRadius: 8, backgroundColor: 'white' }}>
                <div className="popup-panel grid grid-2x" style={{ height: 64 }}>
                    <div className="col-1" style={{ maxWidth: "inherit", display: 'flex', alignItems: 'center' }}>
                        <div className="popup-title">
                            <span style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>Edit Account</span>
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
                        <Typography style={{ textAlign: 'left', fontWeight: 'bold', alignSelf: 'center', width: 200 }}>Nama GL</Typography>
                        <TextField
                            style={{ width: '100%' }}
                            variant="outlined"
                            onChange={(e) => setNewData({reference: e.target.value})}
                            value={newData.name}
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
                        <Typography style={{ textAlign: 'left', fontWeight: 'bold', alignSelf: 'center', width: 200 }}>Parent GL</Typography>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={listAccount}
                            getOptionLabel={(option) => option.name}
                            value={newData.reference}
                            onChange={(event, newInputValue) => {
                                setNewData({...newData, reference: newInputValue})
                            }}
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
                </div>
                <div className="grid grid-2x grid-mobile-none gap-15px" style={{ padding: 20, paddingRight: 50, paddingLeft: 50 }}>
                    <div>

                    </div>
                    <div style={{ marginTop: 50, justifySelf: 'flex-end' }}>
                        <div onClick={() => handleEdit()} style={{ height: 60, width: 250, backgroundColor: '#05b721', display: 'flex', justifyContent: 'center', borderRadius: 10 }}>
                            <Typography style={{ color: 'white', fontSize: 18, fontWeight: 'bold', textAlign: 'center', alignSelf: 'center' }}>EDIT</Typography>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
