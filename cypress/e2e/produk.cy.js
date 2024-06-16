const produkPage = require('../support/pages/produkPage')
const loginPage = require('../support/pages/loginPage')

describe('user bisa akses halaman produk', () => {
    it('menambah produk', () => {
      
      loginPage.visitLoginPage()
      loginPage.inputEmail()
      loginPage.inputPassword()
      loginPage.clickLoginButton()
      
      produkPage.visitPenjualanPage()
      produkPage.verifyPenjualanPage()
      produkPage.clickTambahProduk()
      produkPage.verifyTambahProdukPage()
      produkPage.inputData()
      produkPage.clickSimpan()
     
    })
  })