class PHPLoginPage {

    get fnameField(){
        return $('//*[@placeholder="First Name"]')
    }

    get lnameField(){
        return $('//*[@placeholder="Last Name"]')
    }

    get bnameField(){
        return $('//*[@placeholder="Business Name"]')
    }

    get emailField(){
        return $('//*[@placeholder="Email"]')
    }

    get firstNumberField(){
        return $('//*[@id="numb1"]')
    }

    get secondNumberField(){
        return $('//*[@id="numb2"]')
    }

    get answerField(){
        return $('//*[@id="number"]')
    }

    get submitButtonField(){
        return $('//*[@id="demo"]')
    }

    async fillRequestForm(fname, lname, bname, email){
        await this.fnameField.setValue(fname)
        await this.lnameField.setValue(lname)
        await this.bnameField.setValue(bname)
        await this.emailField.setValue(email)
    }

    async fillSecurityForm(){
        let n1 = await this.firstNumberField.getValue()
        let n2 = await this.secondNumberField.getValue()
        let fn = n1 + n2
        await this.answerField.setValue(fn)
    }

    async submitForm(){
        await this.submitButtonField.click()
    }
}

module.exports = new PHPLoginPage();