const registerpage = require('../support/pages/registerPage')

describe('user should be able to register', () =>{
    it ('with valid data', () =>{
        registerpage.visitregisterpage()
        registerpage.verifyregisterpage()
        registerpage.inputNamaToko()
        registerpage.inputEmail()
        registerpage.inputPassword()
        registerpage.registerButtonClick()
    })
})