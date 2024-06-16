const locator = require('../locators/produkPageLocator')


class penjualanpage {
    async visitPenjualanPage() {
        cy.wait(1000)
        //cy.visit('https://kasirdemo.belajarqa.com/products')
        cy.xpath(locator.datatestid.produk_button).click()
    }

    async verifyPenjualanPage() {
        cy.xpath(locator.datatestid.title_text).should('exist')
        cy.xpath(locator.datatestid.tambah_button).should('exist')
    }

    async clickTambahProduk() {
        cy.xpath(locator.datatestid.tambah_button).click()
    }

    async verifyTambahProdukPage() {
        cy.xpath(locator.datatestid.kode_text).should('exist')
        cy.xpath(locator.datatestid.nama_input).should('exist')
        cy.xpath(locator.datatestid.deskripsi_input).should('exist')
        cy.xpath(locator.datatestid.hargaBeli_input).should('exist')
        cy.xpath(locator.datatestid.hargaJual_input).should('exist')
        cy.xpath(locator.datatestid.stok_input).should('exist')
        cy.xpath(locator.datatestid.kategori_input).should('exist')
    }

    async inputData() {
        cy.xpath(locator.datatestid.nama_input).type('susu')
        cy.xpath(locator.datatestid.deskripsi_input).type('minuman')
        cy.xpath(locator.datatestid.hargaBeli_input).type('2000')
        cy.xpath(locator.datatestid.hargaJual_input).type('3000')
        cy.xpath(locator.datatestid.stok_input).type('10')
        cy.xpath(locator.datatestid.kategori_input).click()
        cy.xpath(locator.datatestid.umum_kategori).click()
    }

    async clickSimpan() {
        cy.xpath(locator.datatestid.simpan_button).click()
    }
}

module.exports = new penjualanpage()