import Account from "../containers/account/Account";
import KategoriAccount from "../containers/account/KategoriAccount";
import AlokasiDana from "../containers/budgeting/AlokasiDana";
import DanaNonRutin from "../containers/budgeting/DanaNonRutin";
import PenerimaanBarang from "../containers/inventory/PenerimaanBarang";
import PenerimaanBarangHeadKeRegion from "../containers/inventory/PenerimaanBarangHeadKeRegion";
import PenerimaanBarangSuppKeHead from "../containers/inventory/PenerimaanBarangSuppKeHead";
import ReturBarang from "../containers/inventory/ReturBarang";
import PO from "../containers/inventory/PO";
import Quotation from "../containers/inventory/Quotation";
import SuratJalan from "../containers/inventory/SuratJalan";
import Barang from "../containers/masterData/Barang";
import GolonganBarang from "../containers/masterData/GolonganBarang";
import JenisBarang from "../containers/masterData/JenisBarang";
import SatuanBarang from "../containers/masterData/SatuanBarang";
import Regional from "../containers/regional/Regional";
import Wilayah from "../containers/regional/Wilayah";
import JenisSupplier from "../containers/supplier/JenisSupplier";
import Supplier from "../containers/supplier/Supplier";
import AkunUser from "../containers/user/AkunUser";
import Level from "../containers/user/Level";
import ReturBarangHeadKeSupp from "../containers/inventory/ReturBarangHeadKeSupp";
import ReturBarangRegionKeHead from "../containers/inventory/ReturBarangRegionKeHead";
import AddReturBarangHeadKeSupp from "../containers/inventory/AddReturBarangHeadKeSupp";
import AddReturBarangRegionKeHead from "../containers/inventory/AddReturBarangRegionKeHead";
import AddPO from "../containers/inventory/AddPO";
import Dashboard from "../containers/Dashboard";
import AddAlokasiDana from "../containers/budgeting/AddAlokasiDana";
import AnggaranRegional from "../containers/masterAnggaran/AnggaranRegional";
import AddAnggaranRegional from "../containers/masterAnggaran/AddAnggaranRegional";
import PenggunaanAnggaran from "../containers/budgeting/PenggunaanAnggaran";
import EditAnggaranRegional from "../containers/masterAnggaran/EditAnggaranRegional";
import AddDananNonRutin from "../containers/budgeting/AddDanaNonRutin";

const routes = [
    {
        path: "/dashboard",
        main: Dashboard
    },
    {
        path: "/barang",
        main: Barang
    },
    {
        path: "/jenis-barang",
        main: JenisBarang
    },
    {
        path: "/satuan-barang",
        main: SatuanBarang
    },
    {
        path: "/golongan-barang",
        main: GolonganBarang
    },
    {
        path: "/regional",
        main: Regional
    },
    {
        path: "/wilayah",
        main: Wilayah
    },
    {
        path: "/akun-user",
        main: AkunUser
    },
    {
        path: "/level-user",
        main: Level
    },
    {
        path: "/supplier",
        main: Supplier
    },
    {
        path: "/jenis-supplier",
        main: JenisSupplier
    },
    {
        path: "/account",
        main: Account
    },
    {
        path: "/kategori-account",
        main: KategoriAccount
    },
    {
        path: "/penggunaan-anggaran",
        main: PenggunaanAnggaran
    },
    {
        path: "/alokasi-dana",
        main: AlokasiDana
    },
    {
        path: "/tambah-alokasi-dana",
        main: AddAlokasiDana
    },
    {
        path: "/dana-non-rutin",
        main: DanaNonRutin
    },  
    {
        path: "/quotation",
        main: Quotation
    },  
    {
        path: "/po",
        main: PO
    },  
    {
        path: "/tambah-po",
        main: AddPO
    },  
    {
        path: "/surat-jalan",
        main: SuratJalan
    },  
    {
        path: "/penerimaan-barang",
        main: PenerimaanBarang
    },  
    {
        path: "/penerimaan-barang-spc-head",
        main: PenerimaanBarangSuppKeHead
    },  
    {
        path: "/penerimaan-barang-head-region",
        main: PenerimaanBarangHeadKeRegion
    },  
    {
        path: "/retur-barang",
        main: ReturBarang
    }, 
    {
        path: "/retur-barang-head-spc",
        main: ReturBarangHeadKeSupp
    }, 
    {
        path: "/tambah-retur-barang-head-spc",
        main: AddReturBarangHeadKeSupp
    }, 
    {
        path: "/retur-barang-region-head",
        main: ReturBarangRegionKeHead
    }, 
    {
        path: "/tambah-retur-barang-region-head",
        main: AddReturBarangRegionKeHead
    },  
    {
        path: "/anggaran-regional",
        main: AnggaranRegional
    }, 
    {
        path: "/tambah-anggaran-regional",
        main: AddAnggaranRegional
    },  
    {
        path: "/edit-anggaran-regional",
        main: EditAnggaranRegional
    },  
    {
        path: "/tambah-non-rutin",
        main: AddDananNonRutin
    },  
]

export default routes;