import React, { useEffect, useState } from 'react'
import CloseImage from '../../assets/ic_close.png';
import { Autocomplete, TextField, Typography } from "@mui/material";
import { headOffice } from '../../library/Service';
import moment from 'moment';

export default function EditLevel(props) {
    const [newData, setNewData] = useState({
        id: '',
        name: '',
        createdBy: "Head Office",
        createdDate: '',
        active: true
    })

    useEffect(() => {
        console.log(props);
        let data = props.dataSelected
        setNewData({
            ...newData,
            id: data.id,
            name: data.name,
            createdBy: "Head Office",
            createdDate: moment(new Date()).format('DD MMM YYYY HH:mm:ss'),
            active: true
        })
    }, [])

    const handleEdit = () => {
        headOffice('editLevelUser', newData)
        props.getData()
        props.onClose()
    }

    return (
        <div className="App app-popup-show">
            <div className="popup-content-middle background-white" style={{ borderRadius: 8, backgroundColor: 'white' }}>
                <div className="popup-panel grid grid-2x" style={{ height: 64 }}>
                    <div className="col-1" style={{ maxWidth: "inherit", display: 'flex', alignItems: 'center' }}>
                        <div className="popup-title">
                            <span style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>Edit Level</span>
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
                        <Typography style={{ textAlign: 'left', fontWeight: 'bold', alignSelf: 'center', width: 200 }}>Nama Level</Typography>
                        <TextField
                            style={{ width: '100%' }}
                            variant="outlined"
                            onChange={(e) => {
                                setNewData({
                                    ...newData,
                                    name: e.target.value
                                })
                            }}
                            value={newData.name}
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
                <div className="grid grid-2x grid-mobile-none gap-15px" style={{ padding: 20, paddingRight: 50, paddingLeft: 50 }}>
                    <div>

                    </div>
                    <div style={{ marginTop: 50, justifySelf: 'flex-end' }}>
                        <div
                            style={{ height: 60, width: 250, backgroundColor: '#05b721', display: 'flex', justifyContent: 'center', borderRadius: 10, cursor: 'pointer' }}
                            onClick={() => handleEdit()}
                        >
                            <Typography style={{ color: 'white', fontSize: 18, fontWeight: 'bold', textAlign: 'center', alignSelf: 'center' }}>EDIT</Typography>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
