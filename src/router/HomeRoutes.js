import Account from "../containers/account/Account";
import KategoriAccount from "../containers/account/KategoriAccount";
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

const routes = [
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
]

export default routes;