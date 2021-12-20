import React from 'react'
import { Typography } from '@mui/material'
import { useHistory } from "react-router-dom";

export default function ReturBarang() {
    const history = useHistory()
    return (
        <div>
            <div style={{ backgroundColor: '#FEFEFE', padding: '15px 20px' }}>
                <Typography style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>Retur Barang</Typography>
            </div>
            <div style={{ padding: 20, borderRadius: 20 }}>
                <div style={{ backgroundColor: '#FFFFFF', height: '83vh', borderRadius: 20 }}>
                    <div style={{ backgroundColor: '#FEFEFE', padding: '15px 20px', alignItems: 'center', justifyContent: 'center', height: '100%', display: 'flex' }}>
                        <Typography style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>Coming Soon</Typography>
                    </div>
                    {/* <div style={{ padding: 20 }}>
                        <div style={{ width: '100%', height: 80, backgroundColor: '#3699ff', borderRadius: 10, display: 'flex', justifyContent: 'center', cursor: 'pointer' }}
                            onClick={() => {
                                history.push('/retur-barang-head-spc')
                            }}>
                            <Typography style={{ color: 'white', width: 170, textAlign: 'center', fontWeight: 'bold', alignSelf: 'center' }}>{`Retur Barang \Head Office ke Supplier`}</Typography>
                        </div>
                        <div style={{ width: '100%', height: 80, backgroundColor: '#3699ff', borderRadius: 10, display: 'flex', justifyContent: 'center', cursor: 'pointer', marginTop: 20 }}
                            onClick={() => {
                                history.push('/retur-barang-region-head')
                            }}>
                            <Typography style={{ color: 'white', width: 185, textAlign: 'center', fontWeight: 'bold', alignSelf: 'center' }}>{`Penerimaan Barang Region ke Head Office`}</Typography>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
