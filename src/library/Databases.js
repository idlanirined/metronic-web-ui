import moment from "moment";

const database = {
    access: ['headOffice', 'region1', 'region2', 'region3'],
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
            id: `HO-1`,
            name: 'Head Office',
            createdBy: 'Head Office',
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
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
    account: [
        {
            id: `53011501`,
            name: 'Beban Umum dan Administrasi',
            createdBy: 'Head Office',
            refID: null,
            level: 0,
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
        {
            id: `53011502`,
            name: 'Beban Sewa',
            createdBy: 'Head Office',
            refID: null,
            level: 0,
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
        {
            id: `53011503`,
            name: 'Sewa Ruang Kantor',
            createdBy: 'Head Office',
            refID: '53011502',
            level: 1,
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
        {
            id: `53011504`,
            name: 'Sewa Kendaraan',
            createdBy: 'Head Office',
            refID: '53011502',
            level: 1,
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
        {
            id: `53011505`,
            name: 'Sewa Rumah Dinas',
            createdBy: 'Head Office',
            refID: '53011502',
            level: 1,
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
        {
            id: `53011506`,
            name: 'Sewa Keperluan Kantor Lainnya',
            createdBy: 'Head Office',
            refID: '53011502',
            level: 1,
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
        {
            id: `53011507`,
            name: 'Beban Penelitian dan Pengembangan',
            createdBy: 'Head Office',
            refID: null,
            level: 0,
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
        {
            id: `53011508`,
            name: 'Beban Humas',
            createdBy: 'Head Office',
            refID: null,
            level: 0,
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
        {
            id: `53011509`,
            name: 'Beban Humas Pengembangan Usaha',
            createdBy: 'Head Office',
            refID: '53011508',
            level: 1,
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
        {
            id: `53011510`,
            name: 'Beban Humas Sponsorship',
            createdBy: 'Head Office',
            refID: '53011508',
            level: 1,
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
        {
            id: `53011511`,
            name: 'Beban Humas Citizenship / Sosial',
            createdBy: 'Head Office',
            refID: '53011508',
            level: 1,
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
        {
            id: `53011512`,
            name: 'Beban Pemeliharaan dan Perbaikan',
            createdBy: 'Head Office',
            refID: null,
            level: 0,
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
        {
            id: `53011513`,
            name: 'Bangunan Kantor',
            createdBy: 'Head Office',
            refID: '53011512',
            level: 1,
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
        {
            id: `53011514`,
            name: 'Bangunan Rumah Dinas',
            createdBy: 'Head Office',
            refID: '53011512',
            level: 1,
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
        {
            id: `53011515`,
            name: 'Beban Pemeliharaan Bangunan / Halaman',
            createdBy: 'Head Office',
            refID: '53011515',
            level: 2,
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
        {
            id: `53011516`,
            name: 'Beban Pemeliharaan Bangunan Mess',
            createdBy: 'Head Office',
            refID: '53011515',
            level: 2,
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
        {
            id: `53011517`,
            name: 'Inventaris Kantor',
            createdBy: 'Head Office',
            refID: '53011512',
            level: 1,
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
        {
            id: `53011518`,
            name: 'Kendaraan Bermotor',
            createdBy: 'Head Office',
            refID: '53011512',
            level: 1,
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
        {
            id: `53011519`,
            name: 'Mesin Kantor',
            createdBy: 'Head Office',
            refID: '53011512',
            level: 1,
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
        {
            id: `53011520`,
            name: 'Inventaris Rumah Dinas',
            createdBy: 'Head Office',
            refID: '53011512',
            level: 1,
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
        {
            id: `53011521`,
            name: 'Beban Pemeliharaan Inventaris Rumah Dinas',
            createdBy: 'Head Office',
            refID: '53011520',
            level: 2,
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
        {
            id: `53011522`,
            name: 'Beban Perlengkapan Rumah Dinas',
            createdBy: 'Head Office',
            refID: '53011520',
            level: 2,
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
        {
            id: `53011523`,
            name: 'Beban Barang / Jasa Pihak Ketiga',
            createdBy: 'Head Office',
            refID: null,
            level: 0,
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
        {
            id: `53011524`,
            name: 'Komunikasi',
            createdBy: 'Head Office',
            refID: '53011523',
            level: 1,
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
        {
            id: `53011525`,
            name: 'Beban Telpon dan Fax',
            createdBy: 'Head Office',
            refID: '53011524',
            level: 2,
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
        {
            id: `53011526`,
            name: 'Beban Telex',
            createdBy: 'Head Office',
            refID: '53011524',
            level: 2,
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
        {
            id: `53011527`,
            name: 'Beban Komunikasi Data',
            createdBy: 'Head Office',
            refID: '53011524',
            level: 2,
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
        {
            id: `53011528`,
            name: 'BTK Tunjangan Pula Telepon Genggam',
            createdBy: 'Head Office',
            refID: '53011524',
            level: 2,
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
        {
            id: `53011529`,
            name: 'Listrik, Air & Gas Kantor',
            createdBy: 'Head Office',
            refID: '53011523',
            level: 1,
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
        {
            id: `53011530`,
            name: 'Perlengkapan Kantor',
            createdBy: 'Head Office',
            refID: '53011523',
            level: 1,
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
        {
            id: `53011531`,
            name: 'Beban Perlengkapan Kantor',
            createdBy: 'Head Office',
            refID: '53011530',
            level: 2,
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
        {
            id: `53011532`,
            name: 'Beban Benda Pos',
            createdBy: 'Head Office',
            refID: '53011530',
            level: 2,
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
        {
            id: `53011533`,
            name: 'Beban Materai',
            createdBy: 'Head Office',
            refID: '53011530',
            level: 2,
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
        {
            id: `53011534`,
            name: 'Beban Alat Tulis Kantor',
            createdBy: 'Head Office',
            refID: '53011530',
            level: 2,
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
        {
            id: `53011535`,
            name: 'Ekspedisi',
            createdBy: 'Head Office',
            refID: '53011523',
            level: 1,
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
        {
            id: `53011536`,
            name: 'Rapat Kerja / Dinas',
            createdBy: 'Head Office',
            refID: '53011523',
            level: 1,
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
        {
            id: `53011537`,
            name: 'Listrik, Air & Gas Rumah Dinas',
            createdBy: 'Head Office',
            refID: '53011523',
            level: 1,
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
        {
            id: `53011538`,
            name: 'Premi Asurani Non Kredit',
            createdBy: 'Head Office',
            refID: '53011523',
            level: 1,
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
        {
            id: `53011539`,
            name: 'Beban Premi Asuransi Non Kredit',
            createdBy: 'Head Office',
            refID: '53011538',
            level: 2,
            createdDate: `${moment(new Date()).format('DD MMM YYYY HH:mm:ss')}`,
            active: true
        },
    ],
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
    ],
    anggaran: [],
    alokasi_dana: [],
    alokasi_dana_region: [],
    dana_non_rutin: [],
    dana_non_rutin_region: [],
    pre_order: [],
    quotation: [],
    surat_jalan: [],
    penerimaan_barang: [],
    penerimaan_barang_region : [],
    retur_barang: [],
    retur_barang_region: []
}

export default database;