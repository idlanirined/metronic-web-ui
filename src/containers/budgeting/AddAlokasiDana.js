import { TextField, Typography } from '@mui/material'
import React from 'react'

export default function AddAlokasiDana() {
    return (
        <div>
            <div style={{ backgroundColor: '#FEFEFE', padding: '15px 20px' }}>
                <Typography style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>Tambah Alokasi Dana</Typography>
            </div>
            <div style={{ padding: 20, borderRadius: 20 }}>
                <div style={{ backgroundColor: '#FFFFFF', borderRadius: 20, padding: 20 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography style={{ color: 'black', fontSize: 14, fontWeight: 'bold', width: '15%', alignSelf: 'center' }}>Region</Typography>
                        <TextField
                            style={{ width: '30%' }}
                            variant="outlined"
                            onChange={(e) => null}
                            inputProps={{
                                style: {
                                    padding: 10,
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
                        <Typography style={{ color: 'black', fontSize: 14, fontWeight: 'bold', width: '15%', alignSelf: 'center' }}>Tahun</Typography>
                        <TextField
                            style={{ width: '30%' }}
                            variant="outlined"
                            onChange={(e) => null}
                            inputProps={{
                                style: {
                                    padding: 10,
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
            </div>
            <div style={{ padding: '0 20px', borderRadius: 20 }}>
                <div style={{ backgroundColor: '#FFFFFF', borderRadius: 20, padding: 20 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ width: '5%', backgroundColor: '#009EF7', padding: 10 }}>
                            <Typography style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>No</Typography>
                        </div>
                        <div style={{ width: '60%', backgroundColor: '#009EF7', padding: 10 }}>
                            <Typography style={{ color: 'white', textAlign: 'left', fontWeight: 'bold' }}>Nama GL / Buku Besar</Typography>
                        </div>
                        <div style={{ width: '11%', backgroundColor: '#009EF7', padding: 10 }}>
                            <Typography style={{ color: 'white', textAlign: 'left', fontWeight: 'bold' }}>Nomor GL</Typography>
                        </div>
                        <div style={{ width: '21%', backgroundColor: '#009EF7', padding: 10 }}>
                            <Typography style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>TOTAL</Typography>
                        </div>
                    </div>
                    <div style={{ border: '2px solid #d8d8d8', padding: '5px 10px' }}>
                        <Typography style={{ color: '#464e5f', textAlign: 'left', fontWeight: 'bold' }}>A. BEBAN UMUM DAN ADMINISTRASI</Typography>
                    </div>
                    <div style={{ border: '2px solid #d8d8d8', padding: '5px 10px' }}>
                        <Typography style={{ color: '#464e5f', textAlign: 'left', fontWeight: '500' }}>1. Beban Sewa</Typography>
                    </div>
                    <div style={{ border: '2px solid #d8d8d8', display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ width: '5%', border: '2px solid #d8d8d8', padding: '5px 10px' }}>
                            <Typography style={{ color: '#464e5f', textAlign: 'center', fontWeight: '300' }}>a.</Typography>
                        </div>
                        <div style={{ width: '60%', border: '2px solid #d8d8d8', padding: '5px 10px' }}>
                            <Typography style={{ color: '#464e5f', textAlign: 'left', fontWeight: '300' }}>Sewa Ruang Kantor</Typography>
                        </div>
                        <div style={{ width: '11%', border: '2px solid #d8d8d8', padding: '5px 10px' }}>
                            <Typography style={{ color: '#464e5f', textAlign: 'left', fontWeight: '300' }}>530111503</Typography>
                        </div>
                        <div style={{ width: '21%', border: '2px solid #d8d8d8', padding: '5px 10px' }}>
                            <Typography style={{ color: '#464e5f', textAlign: 'left', fontWeight: '300' }}>Rp 20.000.000</Typography>
                        </div>
                    </div>
                    <div style={{ border: '2px solid #d8d8d8', display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ width: '5%', border: '2px solid #d8d8d8', padding: '5px 10px' }}>
                            <Typography style={{ color: '#464e5f', textAlign: 'center', fontWeight: '300' }}>b.</Typography>
                        </div>
                        <div style={{ width: '60%', border: '2px solid #d8d8d8', padding: '5px 10px' }}>
                            <Typography style={{ color: '#464e5f', textAlign: 'left', fontWeight: '300' }}>Sewa Kendaraan</Typography>
                        </div>
                        <div style={{ width: '11%', border: '2px solid #d8d8d8', padding: '5px 10px' }}>
                            <Typography style={{ color: '#464e5f', textAlign: 'left', fontWeight: '300' }}>530111504</Typography>
                        </div>
                        <div style={{ width: '21%', border: '2px solid #d8d8d8', padding: '5px 10px' }}>
                            <Typography style={{ color: '#464e5f', textAlign: 'left', fontWeight: '300' }}>Rp 20.000.000</Typography>
                        </div>
                    </div>
                    <div style={{ border: '2px solid #d8d8d8', display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ width: '5%', border: '2px solid #d8d8d8', padding: '5px 10px' }}>
                            <Typography style={{ color: '#464e5f', textAlign: 'center', fontWeight: '300' }}>c.</Typography>
                        </div>
                        <div style={{ width: '60%', border: '2px solid #d8d8d8', padding: '5px 10px' }}>
                            <Typography style={{ color: '#464e5f', textAlign: 'left', fontWeight: '300' }}>Sewa rumah dinas</Typography>
                        </div>
                        <div style={{ width: '11%', border: '2px solid #d8d8d8', padding: '5px 10px' }}>
                            <Typography style={{ color: '#464e5f', textAlign: 'left', fontWeight: '300' }}>530111501</Typography>
                        </div>
                        <div style={{ width: '21%', border: '2px solid #d8d8d8', padding: '5px 10px' }}>
                            <Typography style={{ color: '#464e5f', textAlign: 'left', fontWeight: '300' }}>Rp 20.000.000</Typography>
                        </div>
                    </div>
                    <div style={{ border: '2px solid #d8d8d8', display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ width: '5%', border: '2px solid #d8d8d8', padding: '5px 10px' }}>
                            <Typography style={{ color: '#464e5f', textAlign: 'center', fontWeight: '300' }}>d.</Typography>
                        </div>
                        <div style={{ width: '60%', border: '2px solid #d8d8d8', padding: '5px 10px' }}>
                            <Typography style={{ color: '#464e5f', textAlign: 'left', fontWeight: '300' }}>Sewa keperluan kantor lainnya</Typography>
                        </div>
                        <div style={{ width: '11%', border: '2px solid #d8d8d8', padding: '5px 10px' }}>
                            <Typography style={{ color: '#464e5f', textAlign: 'left', fontWeight: '300' }}>530111502</Typography>
                        </div>
                        <div style={{ width: '21%', border: '2px solid #d8d8d8', padding: '5px 10px' }}>
                            <Typography style={{ color: '#464e5f', textAlign: 'left', fontWeight: '300' }}>Rp 20.000.000</Typography>
                        </div>
                    </div>
                    <div style={{ border: '2px solid #d8d8d8', padding: '5px 10px' }}>
                        <Typography style={{ color: '#464e5f', textAlign: 'left', fontWeight: '500' }}>2. Beban Penelitian dan Pengembangan</Typography>
                    </div>
                    <div style={{ border: '2px solid #d8d8d8', padding: '5px 10px' }}>
                        <Typography style={{ color: '#464e5f', textAlign: 'left', fontWeight: '500' }}>3. Beban Humas</Typography>
                    </div>
                    <div style={{ border: '2px solid #d8d8d8', display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ width: '5%', border: '2px solid #d8d8d8', padding: '5px 10px' }}>
                            <Typography style={{ color: '#464e5f', textAlign: 'center', fontWeight: '300' }}>a.</Typography>
                        </div>
                        <div style={{ width: '60%', border: '2px solid #d8d8d8', padding: '5px 10px' }}>
                            <Typography style={{ color: '#464e5f', textAlign: 'left', fontWeight: '300' }}>Beban Humas Pengembangan Usaha</Typography>
                        </div>
                        <div style={{ width: '11%', border: '2px solid #d8d8d8', padding: '5px 10px' }}>
                            <Typography style={{ color: '#464e5f', textAlign: 'left', fontWeight: '300' }}>530111503</Typography>
                        </div>
                        <div style={{ width: '21%', border: '2px solid #d8d8d8', padding: '5px 10px' }}>
                            <Typography style={{ color: '#464e5f', textAlign: 'left', fontWeight: '300' }}>Rp 20.000.000</Typography>
                        </div>
                    </div>
                    <div style={{ border: '2px solid #d8d8d8', display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ width: '5%', border: '2px solid #d8d8d8', padding: '5px 10px' }}>
                            <Typography style={{ color: '#464e5f', textAlign: 'center', fontWeight: '300' }}>b.</Typography>
                        </div>
                        <div style={{ width: '60%', border: '2px solid #d8d8d8', padding: '5px 10px' }}>
                            <Typography style={{ color: '#464e5f', textAlign: 'left', fontWeight: '300' }}>Beban Humas Sponsorship</Typography>
                        </div>
                        <div style={{ width: '11%', border: '2px solid #d8d8d8', padding: '5px 10px' }}>
                            <Typography style={{ color: '#464e5f', textAlign: 'left', fontWeight: '300' }}>530111504</Typography>
                        </div>
                        <div style={{ width: '21%', border: '2px solid #d8d8d8', padding: '5px 10px' }}>
                            <Typography style={{ color: '#464e5f', textAlign: 'left', fontWeight: '300' }}>Rp 20.000.000</Typography>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
