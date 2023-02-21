class SaucelabsLoginPage {

    get usernameField(){
        return $('//*[@id="user-name"]')
    }

    get passwordField(){
        return $('//*[@id="password"]')
    }

    get loginButtonField(){
        return $('//*[@id="login-button"]')
    }

    async login(username, password){
        await this.usernameField.setValue(username)
        await this.passwordField.setValue(password)
        await this.loginButtonField.click()
    }

}

module.exports = new SaucelabsLoginPage();