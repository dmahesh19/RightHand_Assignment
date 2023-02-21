class SaucelabsCheckoutPage {

    get firstnameField(){
        return $('//*[@id="first-name"]')
    }

    get lastnameField(){
        return $('//*[@id="last-name"]')
    }

    get zipcodeField(){
        return $('//*[@id="postal-code"]')
    }

    get continueButtonField(){
        return $('//*[@id="continue"]')
    }

    get finishField(){
        return $('//*[@id="finish"]')
    }

    get completeField(){
        return $('//*[@id="checkout_complete_container"]/h2')
    }

    async fillform(fname,lname,zip){
        await this.firstnameField.setValue(fname)   
        await this.lastnameField.setValue(lname)
        await this.zipcodeField.setValue(zip)
        await this.continueButtonField.click()
        await this.finishField.click()
    }

    async complete(){
        let thy = await this.completeField.getValue()
        console.log("***********************"+thy)
    }
}

module.exports = new SaucelabsCheckoutPage();