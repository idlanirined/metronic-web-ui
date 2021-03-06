import Constant from "./Constants";
import database from "./Databases";

export const headOffice = (type, value) => {
    let dataHeadOffice = JSON.parse(localStorage.getItem(Constant.DATA_HEAD_OFFICE))
    if (dataHeadOffice == null) {
        dataHeadOffice = database
    }

    if (type == 'addBarang') {
        let newData = {
            id: value.id,
            name: value.name,
            jenis: value.jenis,
            satuan: value.satuan,
            golongan: value.golongan,
            account: value.account,
            merk: value.merk,
            stok: value.stok,
            harga: value.harga,
            createdBy: value.createdBy,
            createdDate: value.createdDate,
            active: value.active
        }
        let barang = dataHeadOffice.barang
        barang.push(newData)
        dataHeadOffice = { ...dataHeadOffice, barang }
    } else if (type == 'editBarang') {
        let newData = {
            id: value.id,
            name: value.name,
            jenis: value.jenis,
            satuan: value.satuan,
            golongan: value.golongan,
            account: value.account,
            merk: value.merk,
            stok: value.stok,
            createdBy: value.createdBy,
            createdDate: value.createdDate,
            active: value.active
        }
        let barang = dataHeadOffice.barang
        let index = barang.findIndex((val) => val.id == newData.id)
        if (index != -1) {
            barang[index] = newData
            dataHeadOffice = { ...dataHeadOffice, barang }
        }
    } else if (type == 'deleteBarang') {
        let barang = dataHeadOffice.barang
        let index = barang.findIndex((val) => val.id == value.id)
        if (index != -1) {
            barang.splice(index, 1)
            dataHeadOffice = { ...dataHeadOffice, barang }
        }
    } else if (type == 'addJenis') {
        let newData = {
            id: value.id,
            name: value.name,
            createdBy: value.createdBy,
            createdDate: value.createdDate,
            active: value.active
        }
        let jenis_barang = dataHeadOffice.jenis_barang
        jenis_barang.push(newData)
        dataHeadOffice = { ...dataHeadOffice, jenis_barang }
    } else if (type == 'editJenis') {
        let newData = {
            id: value.id,
            name: value.name,
            createdBy: value.createdBy,
            createdDate: value.createdDate,
            active: value.active
        }
        let jenis_barang = dataHeadOffice.jenis_barang
        let index = jenis_barang.findIndex((val) => val.id == newData.id)
        if (index != -1) {
            jenis_barang[index] = newData
            dataHeadOffice = { ...dataHeadOffice, jenis_barang }
        }
    } else if (type == 'deleteJenis') {
        let jenis_barang = dataHeadOffice.jenis_barang
        let index = jenis_barang.findIndex((val) => val.id == value.id)
        if (index != -1) {
            jenis_barang.splice(index, 1)
            dataHeadOffice = { ...dataHeadOffice, jenis_barang }
        }
    } else if (type == 'addSatuan') {
        let newData = {
            id: value.id,
            name: value.name,
            createdBy: value.createdBy,
            createdDate: value.createdDate,
            active: value.active
        }
        let satuan_barang = dataHeadOffice.satuan_barang
        satuan_barang.push(newData)
        dataHeadOffice = { ...dataHeadOffice, satuan_barang }
    } else if (type == 'editSatuan') {
        let newData = {
            id: value.id,
            name: value.name,
            createdBy: value.createdBy,
            createdDate: value.createdDate,
            active: value.active
        }
        let satuan_barang = dataHeadOffice.satuan_barang
        let index = satuan_barang.findIndex((val) => val.id == newData.id)
        if (index != -1) {
            satuan_barang[index] = newData
            dataHeadOffice = { ...dataHeadOffice, satuan_barang }
        }
    } else if (type == 'deleteSatuan') {
        let satuan_barang = dataHeadOffice.satuan_barang
        let index = satuan_barang.findIndex((val) => val.id == value.id)
        if (index != -1) {
            satuan_barang.splice(index, 1)
            dataHeadOffice = { ...dataHeadOffice, satuan_barang }
        }
    } else if (type == 'addGolongan') {
        let newData = {
            id: value.id,
            name: value.name,
            createdBy: value.createdBy,
            createdDate: value.createdDate,
            active: value.active
        }
        let gol_barang = dataHeadOffice.gol_barang
        gol_barang.push(newData)
        dataHeadOffice = { ...dataHeadOffice, gol_barang }
    } else if (type == 'editGolongan') {
        let newData = {
            id: value.id,
            name: value.name,
            createdBy: value.createdBy,
            createdDate: value.createdDate,
            active: value.active
        }
        let gol_barang = dataHeadOffice.gol_barang
        let index = gol_barang.findIndex((val) => val.id == newData.id)
        if (index != -1) {
            gol_barang[index] = newData
            dataHeadOffice = { ...dataHeadOffice, gol_barang }
        }
    } else if (type == 'deleteGolongan') {
        let gol_barang = dataHeadOffice.gol_barang
        let index = gol_barang.findIndex((val) => val.id == value.id)
        if (index != -1) {
            gol_barang.splice(index, 1)
            dataHeadOffice = { ...dataHeadOffice, gol_barang }
        }
    } else if (type == 'addRegion') {
        let newData = {
            id: value.id,
            name: value.name,
            createdBy: value.createdBy,
            createdDate: value.createdDate,
            active: value.active
        }
        let region = dataHeadOffice.region
        region.push(newData)
        dataHeadOffice = { ...dataHeadOffice, region }
    } else if (type == 'editRegion') {
        let newData = {
            id: value.id,
            name: value.name,
            createdBy: value.createdBy,
            createdDate: value.createdDate,
            active: value.active
        }
        let region = dataHeadOffice.region
        let index = region.findIndex((val) => val.id == newData.id)
        if (index != -1) {
            region[index] = newData
            dataHeadOffice = { ...dataHeadOffice, region }
        }
    } else if (type == 'deleteRegion') {
        let region = dataHeadOffice.region
        let index = region.findIndex((val) => val.id == value.id)
        if (index != -1) {
            region.splice(index, 1)
            dataHeadOffice = { ...dataHeadOffice, region }
        }
    } else if (type == 'addUser') {
        let newData = {
            id: value.id,
            name: value.name,
            level: value.level,
            createdBy: value.createdBy,
            createdDate: value.createdDate,
            active: value.active
        }
        let user = dataHeadOffice.user
        user.push(newData)
        dataHeadOffice = { ...dataHeadOffice, user }
    } else if (type == 'editUser') {
        let newData = {
            id: value.id,
            name: value.name,
            level: value.level,
            createdBy: value.createdBy,
            createdDate: value.createdDate,
            active: value.active
        }
        let user = dataHeadOffice.user
        let index = user.findIndex((val) => val.id == newData.id)
        if (index != -1) {
            user[index] = newData
            dataHeadOffice = { ...dataHeadOffice, user }
        }
    } else if (type == 'deleteUser') {
        let user = dataHeadOffice.user
        let index = user.findIndex((val) => val.id == value.id)
        if (index != -1) {
            user.splice(index, 1)
            dataHeadOffice = { ...dataHeadOffice, user }
        }
    } else if (type == 'addLevelUser') {
        let newData = {
            id: value.id,
            name: value.name,
            createdBy: value.createdBy,
            createdDate: value.createdDate,
            active: value.active
        }
        let level_user = dataHeadOffice.level_user
        level_user.push(newData)
        dataHeadOffice = { ...dataHeadOffice, level_user }
    } else if (type == 'editLevelUser') {
        let newData = {
            id: value.id,
            name: value.name,
            createdBy: value.createdBy,
            createdDate: value.createdDate,
            active: value.active
        }
        let level_user = dataHeadOffice.level_user
        let index = level_user.findIndex((val) => val.id == newData.id)
        if (index != -1) {
            level_user[index] = newData
            dataHeadOffice = { ...dataHeadOffice, level_user }
        }
    } else if (type == 'deleteLevelUser') {
        let level_user = dataHeadOffice.level_user
        let index = level_user.findIndex((val) => val.id == value.id)
        if (index != -1) {
            level_user.splice(index, 1)
            dataHeadOffice = { ...dataHeadOffice, level_user }
        }
    } else if (type == 'addAccount') {
        let newData = {
            id: value.id,
            name: value.name,
            level: value.level,
            refID: value.refID,
            createdBy: value.createdBy,
            createdDate: value.createdDate,
            active: value.active
        }
        let account = dataHeadOffice.account
        account.push(newData)
        dataHeadOffice = { ...dataHeadOffice, account }
    } else if (type == 'editAccount') {
        let newData = {
            id: value.id,
            name: value.name,
            level: value.level,
            refID: value.refID,
            createdBy: value.createdBy,
            createdDate: value.createdDate,
            active: value.active
        }
        let account = dataHeadOffice.account
        let index = account.findIndex((val) => val.id == newData.id)
        if (index != -1) {
            account[index] = newData
            dataHeadOffice = { ...dataHeadOffice, account }
        }
    } else if (type == 'deleteAccount') {
        let account = dataHeadOffice.account
        let index = account.findIndex((val) => val.id == value.id)
        if (index != -1) {
            account.splice(index, 1)
            dataHeadOffice = { ...dataHeadOffice, account }
        }
    } else if (type == 'addCategoryAccount') {
        let newData = {
            id: value.id,
            name: value.name,
            createdBy: value.createdBy,
            createdDate: value.createdDate,
            active: value.active
        }
        let category_account = dataHeadOffice.category_account
        category_account.push(newData)
        dataHeadOffice = { ...dataHeadOffice, category_account }
    } else if (type == 'editCategoryAccount') {
        let newData = {
            id: value.id,
            name: value.name,
            createdBy: value.createdBy,
            createdDate: value.createdDate,
            active: value.active
        }
        let category_account = dataHeadOffice.category_account
        let index = category_account.findIndex((val) => val.id == newData.id)
        if (index != -1) {
            category_account[index] = newData
            dataHeadOffice = { ...dataHeadOffice, category_account }
        }
    } else if (type == 'deleteCategoryAccount') {
        let category_account = dataHeadOffice.category_account
        let index = category_account.findIndex((val) => val.id == value.id)
        if (index != -1) {
            category_account.splice(index, 1)
            dataHeadOffice = { ...dataHeadOffice, category_account }
        }
    } else if (type == 'addAnggaran') {
        let newData = {
            id: value.id,
            name: value.name,
            totalAnggaranPusat: value.totalAnggaranPusat,
            totalAnggaranRutin: value.totalAnggaranRutin,
            dataAnggaran: value.dataAnggaran,
            sisaAnggaran: value.sisaAnggaran,
            createdBy: value.createdBy,
            createdDate: value.createdDate,
            active: value.active
        }
        let anggaran = dataHeadOffice.anggaran
        anggaran.push(newData)
        dataHeadOffice = { ...dataHeadOffice, anggaran }
    } else if (type == 'editAnggaran') {
        let newData = {
            id: value.id,
            name: value.name,
            totalAnggaranPusat: value.totalAnggaranPusat,
            totalAnggaranRutin: value.totalAnggaranRutin,
            dataAnggaran: value.dataAnggaran,
            sisaAnggaran: value.sisaAnggaran,
            createdBy: value.createdBy,
            createdDate: value.createdDate,
            active: value.active
        }
        let anggaran = dataHeadOffice.anggaran
        let index = anggaran.findIndex((val) => val.id == newData.id)
        if (index != -1) {
            anggaran[index] = newData
            dataHeadOffice = { ...dataHeadOffice, anggaran }
        }
    } else if (type == 'deleteAnggaran') {
        let anggaran = dataHeadOffice.anggaran
        let index = anggaran.findIndex((val) => val.id == value.id)
        if (index != -1) {
            anggaran.splice(index, 1)
            dataHeadOffice = { ...dataHeadOffice, anggaran }
        }
    }  else if (type == 'addAlokasiDana') {
        let newData = {
            id: value.id,
            name: value.tahun,
            region: value.region,
            dataAlokasi: value.dataAlokasi,
            totalAlokasiDana: value.totalAlokasiDana,
            totalTerpakai: 0,
            totalSisa: value.totalAlokasiDana,
            batasMax: value.batasMax,
            keterangan: value.keterangan,
            createdBy: value.createdBy,
            createdDate: value.createdDate,
            active: value.active
        }
        let alokasi_dana = dataHeadOffice.alokasi_dana
        alokasi_dana.push(newData)
        dataHeadOffice = { ...dataHeadOffice, alokasi_dana }
    } else if (type == 'editAlokasiDana') {
        let newData = {
            id: value.id,
            name: value.tahun,
            region: value.region,
            dataAlokasi: value.dataAlokasi,
            totalAlokasiDana: value.totalAlokasiDana,
            totalTerpakai: value.totalTerpakai,
            totalSisa: value.totalSisa,
            batasMax: value.batasMax,
            keterangan: value.keterangan,
            createdBy: value.createdBy,
            createdDate: value.createdDate,
            active: value.active
        }
        let alokasi_dana = dataHeadOffice.alokasi_dana
        let index = alokasi_dana.findIndex((val) => val.id == newData.id && val.region.id == value.region.id)
        if (index != -1) {
            alokasi_dana[index] = newData
            dataHeadOffice = { ...dataHeadOffice, alokasi_dana }
        }
    } else if (type == 'deleteAlokasiDana') {
        let alokasi_dana = dataHeadOffice.alokasi_dana
        let index = alokasi_dana.findIndex((val) => val.id == value.id && val.region.id == value.regionID)
        if (index != -1) {
            alokasi_dana.splice(index, 1)
            dataHeadOffice = { ...dataHeadOffice, alokasi_dana }
        }
    } else if (type == 'addDanaNonRutin') {
        let newData = {
            id: value.id,
            region: value.region,
            files: null,
            tahun: value.tahun,
            dataNonRutin: value.dataNonRutin,
            totalNonRutin: value.totalNonRutin,
            batasMax: value.batasMax,
            keterangan: value.keterangan,
            status: 'draft',
            createdBy: value.createdBy,
            createdDate: value.createdDate,
            active: value.active
        }
        let dana_non_rutin = dataHeadOffice.dana_non_rutin
        dana_non_rutin.push(newData)
        dataHeadOffice = { ...dataHeadOffice, dana_non_rutin }
    } else if (type == 'editDanaNonRutin') {
        let newData = {
            id: value.id,
            region: value.region,
            files: null,
            tahun: value.tahun,
            dataNonRutin: value.dataNonRutin,
            totalNonRutin: value.totalNonRutin,
            batasMax: value.batasMax,
            keterangan: value.keterangan,
            status: value.status,
            createdBy: value.createdBy,
            createdDate: value.createdDate,
            active: value.active
        }
        let dana_non_rutin = dataHeadOffice.dana_non_rutin
        let index = dana_non_rutin.findIndex((val) => val.id == newData.id&& val.region.id == value.region.id)
        if (index != -1) {
            dana_non_rutin[index] = newData
            dataHeadOffice = { ...dataHeadOffice, dana_non_rutin }
        }
    } else if (type == 'deleteDanaNonRutin') {
        let dana_non_rutin = dataHeadOffice.dana_non_rutin
        let index = dana_non_rutin.findIndex((val) => val.id == value.id && val.region.id == value.regionID)
        if (index != -1) {
            dana_non_rutin.splice(index, 1)
            dataHeadOffice = { ...dataHeadOffice, dana_non_rutin }
        }
    } else if (type == 'addQuotation') {
        let newData = {
            id: value.id,
            name: value.name,
            tglMemo: value.tglMemo,
            tglQuotation: value.tglQuotation,
            status: value.status,
            dataQuotation: value.dataQuotation,
            totalQuotation: value.totalQuotation,
            region: value.region,
            keterangan: value.keterangan,
            createdBy: value.createdBy,
            createdDate: value.createdDate,
            active: value.active
        }
        let quotation = dataHeadOffice.quotation
        quotation.push(newData)
        dataHeadOffice = { ...dataHeadOffice, quotation }
    } else if (type == 'editQuotation') {
        let newData = {
            id: value.id,
            name: value.name,
            tglMemo: value.tglMemo,
            tglQuotation: value.tglQuotation,
            status: value.status,
            dataQuotation: value.dataQuotation,
            totalQuotation: value.totalQuotation,
            keterangan: value.keterangan,
            region: value.region,
            createdBy: value.createdBy,
            createdDate: value.createdDate,
            active: value.active
        }
        let quotation = dataHeadOffice.quotation
        let index = quotation.findIndex((val) => val.id == newData.id)
        if (index != -1) {
            quotation[index] = newData
            dataHeadOffice = { ...dataHeadOffice, quotation }
        }
    } else if (type == 'deleteQuotation') {
        let quotation = dataHeadOffice.quotation
        let index = quotation.findIndex((val) => val.id == value.id)
        if (index != -1) {
            quotation.splice(index, 1)
            dataHeadOffice = { ...dataHeadOffice, quotation }
        }
    } else if (type == 'addPo') {
        let newData = {
            id: value.id,
            tglPo: value.tglPo,
            preparedBy: value.preparedBy,
            dataPo: value.dataPo,
            quotation: value.quotation,
            totalPo: value.totalPo,
            status: value.status,
            createdDate: value.createdDate,
            createdBy: value.createdBy,
            active: value.active
        }
        let pre_order = dataHeadOffice.pre_order
        pre_order.push(newData)
        dataHeadOffice = { ...dataHeadOffice, pre_order }
    } else if (type == 'editPo') {
        let newData = {
            id: value.id,
            tglPo: value.tglPo,
            preparedBy: value.preparedBy,
            dataPo: value.dataPo,
            quotation: value.quotation,
            totalPo: value.totalPo,
            status: value.status,
            createdDate: value.createdDate,
            createdBy: value.createdBy,
            active: value.active
        }
        let pre_order = dataHeadOffice.pre_order
        let index = pre_order.findIndex((val) => val.id == newData.id)
        if (index != -1) {
            pre_order[index] = newData
            dataHeadOffice = { ...dataHeadOffice, pre_order }
        }
    } else if (type == 'deletePo') {
        let pre_order = dataHeadOffice.pre_order
        let index = pre_order.findIndex((val) => val.id == value.id)
        if (index != -1) {
            pre_order.splice(index, 1)
            dataHeadOffice = { ...dataHeadOffice, pre_order }
        }
    } else if (type == 'addSJ') {
        let newData = {
            id: value.id,
            tglSJ: value.tglSJ,
            files: value.files,
            po: value.po,
            status: value.status,
            createdDate: value.createdDate,
            createdBy: value.createdBy,
            active: value.active
        }
        let surat_jalan = dataHeadOffice.surat_jalan
        surat_jalan.push(newData)
        dataHeadOffice = { ...dataHeadOffice, surat_jalan }
    } else if (type == 'editSJ') {
        let newData = {
            id: value.id,
            tglSJ: value.tglSJ,
            files: value.files,
            po: value.po,
            status: value.status,
            createdDate: value.createdDate,
            createdBy: value.createdBy,
            active: value.active
        }
        let surat_jalan = dataHeadOffice.surat_jalan
        let index = surat_jalan.findIndex((val) => val.id == newData.id)
        if (index != -1) {
            surat_jalan[index] = newData
            dataHeadOffice = { ...dataHeadOffice, surat_jalan }
        }
    } else if (type == 'deleteSJ') {
        let surat_jalan = dataHeadOffice.surat_jalan
        let index = surat_jalan.findIndex((val) => val.id == value.id)
        if (index != -1) {
            surat_jalan.splice(index, 1)
            dataHeadOffice = { ...dataHeadOffice, surat_jalan }
        }
    } else if (type == 'addPenerimaan') {
        let newData = {
            id: value.id,
            tglPo: value.tglPo,
            preparedBy: value.preparedBy,
            dataPo: value.dataPo,
            quotation: value.quotation,
            totalPo: value.totalPo,
            status: value.status,
            createdDate: value.createdDate,
            createdBy: value.createdBy,
            active: value.active
        }
        let penerimaan_barang = dataHeadOffice.penerimaan_barang
        penerimaan_barang.push(newData)
        dataHeadOffice = { ...dataHeadOffice, penerimaan_barang }
    } else if (type == 'editPeneriman') {
        let newData = {
            id: value.id,
            tglPo: value.tglPo,
            preparedBy: value.preparedBy,
            dataPo: value.dataPo,
            quotation: value.quotation,
            totalPo: value.totalPo,
            status: value.status,
            createdDate: value.createdDate,
            createdBy: value.createdBy,
            active: value.active
        }
        let penerimaan_barang = dataHeadOffice.penerimaan_barang
        let index = penerimaan_barang.findIndex((val) => val.id == newData.id)
        if (index != -1) {
            penerimaan_barang[index] = newData
            dataHeadOffice = { ...dataHeadOffice, penerimaan_barang }
        }
    } else if (type == 'deletePeneriman') {
        let penerimaan_barang = dataHeadOffice.penerimaan_barang
        let index = penerimaan_barang.findIndex((val) => val.id == value.id)
        if (index != -1) {
            penerimaan_barang.splice(index, 1)
            dataHeadOffice = { ...dataHeadOffice, penerimaan_barang }
        }
    } else if (type == 'addRetur') {
        let newData = {
            id: value.id,
            noPo: value.noPo,
            tglRetur: value.tglRetur,
            preparedBy: value.preparedBy,
            dataRetur: value.dataRetur,
            createdDate: value.createdDate,
            createdBy: value.createdBy,
            active: value.active
        }
        let retur_barang = dataHeadOffice.retur_barang
        retur_barang.push(newData)
        dataHeadOffice = { ...dataHeadOffice, retur_barang }
    } else if (type == 'editRetur') {
        let newData = {
            id: value.id,
            noPo: value.noPo,
            tglRetur: value.tglRetur,
            preparedBy: value.preparedBy,
            dataRetur: value.dataRetur,
            createdDate: value.createdDate,
            createdBy: value.createdBy,
            active: value.active
        }
        let retur_barang = dataHeadOffice.retur_barang
        let index = retur_barang.findIndex((val) => val.id == newData.id)
        if (index != -1) {
            retur_barang[index] = newData
            dataHeadOffice = { ...dataHeadOffice, retur_barang }
        }
    } else if (type == 'deleteRetur') {
        let retur_barang = dataHeadOffice.retur_barang
        let index = retur_barang.findIndex((val) => val.id == value.id)
        if (index != -1) {
            retur_barang.splice(index, 1)
            dataHeadOffice = { ...dataHeadOffice, retur_barang }
        }
    }
    localStorage.setItem(Constant.DATA_HEAD_OFFICE, JSON.stringify(dataHeadOffice))
}

export function region(type, value) {
    let dataHeadOffice = localStorage.getItem(Constant.DATA_HEAD_OFFICE)
    if (type == 'addBarang') {

    }
}