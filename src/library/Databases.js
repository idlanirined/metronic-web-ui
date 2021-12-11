import moment from "moment";

const database = {
    barang: [],
    jenis_barang: [
        {
            id: `JB-1`,
            name: 'ATK',
            createdBy: 'Head Office',
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
        {
            id: `JB-2`,
            name: 'PROPERTI',
            createdBy: 'Head Office',
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
        {
            id: `JB-3`,
            name: 'INFRASTRUKTUR',
            createdBy: 'Head Office',
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
    ],
    satuan_barang: [
        {
            id: `SB-1`,
            name: 'PCS',
            createdBy: 'Head Office',
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
        {
            id: `SB-2`,
            name: 'RIM',
            createdBy: 'Head Office',
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
        {
            id: `SB-3`,
            name: 'Lembar',
            createdBy: 'Head Office',
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
        {
            id: `SB-4`,
            name: 'Kg',
            createdBy: 'Head Office',
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
        {
            id: `SB-5`,
            name: 'Gr',
            createdBy: 'Head Office',
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
    ],
    gol_barang: [
        {
            id: `GB-1`,
            name: 'OPEX',
            createdBy: 'Head Office',
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
        {
            id: `GB-2`,
            name: 'CAPEX',
            createdBy: 'Head Office',
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
    ],
    region: [
        {
            id: `RG-1`,
            name: 'Region Bekasi',
            createdBy: 'Head Office',
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
        {
            id: `RG-2`,
            name: 'Region Jakarta',
            createdBy: 'Head Office',
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
        {
            id: `RG-3`,
            name: 'Region Bandung',
            createdBy: 'Head Office',
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
    ],
    user: [
        {
            id: `USR-1`,
            name: 'Admin Region',
            level: 'Region',
            createdBy: 'Head Office',
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
        {
            id: `USR-2`,
            name: 'Admin Head Office',
            level: 'Head Office',
            createdBy: 'Head Office',
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
    ],
    level_user: [
        {
            id: `LVUSR-1`,
            name: 'Region',
            createdBy: 'Head Office',
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
        {
            id: `LVUSR-2`,
            name: 'Head Office',
            createdBy: 'Head Office',
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
    ],
    account: [],
    category_account: [
        {
            id: `CATAC-1`,
            name: 'BEBAN UMUM DAN ADMINISTRASI',
            createdBy: 'Head Office',
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
        {
            id: `CATAC-2`,
            name: 'Beban Sewa',
            createdBy: 'Head Office',
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
        {
            id: `CATAC-3`,
            name: 'Beban Penelitian dan Pengembangan',
            createdBy: 'Head Office',
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
        {
            id: `CATAC-4`,
            name: 'Beban Humas',
            createdBy: 'Head Office',
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
        {
            id: `CATAC-5`,
            name: 'Beban Pemeliharaan dan Perbaikan',
            createdBy: 'Head Office',
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
        {
            id: `CATAC-6`,
            name: 'Beban Barang/Jasa Pihak Ketiga',
            createdBy: 'Head Office',
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
    ]
}

export default database;