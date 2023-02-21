class SaucelabsCartPage {

    get continueShopingField(){
        return $('//*[@id="continue-shopping"]')
    }

    get checkoutField(){
        return $('//*[@id="checkout"]')
    }

    async continueshopping(){
        await this.continueShopingField.click()   
    }

    async checkout(){
        await this.checkoutField.click()
    }

}

module.exports = new SaucelabsCartPage();