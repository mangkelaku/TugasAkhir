const loginpage = require('../support/pages/loginPage')
const homepage = require('../support/pages/homePage')


describe('login test case', () => {
  it('login with valid id', () => {
    loginpage.visitLoginPage()
    loginpage.verifyLoginPage()
    loginpage.inputEmail()
    loginpage.inputPassword()
    loginpage.clickLoginButton()

    homepage.verifyHomePage()
   
  })
})