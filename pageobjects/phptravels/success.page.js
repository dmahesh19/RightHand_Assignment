class PHPSuccessPage {

    get allField(){
        return $('//*[@id="content"]')
    }

    get thankyouField(){
        return $('//*[@id="content"]/section[1]/div/div/div[2]/div/div/div/div/div/div/div/div[3]/h2/strong')
    }

    async successPage(){
        /*await this.sponsoredDisclaimerLink.waitForDisplayed({
            timeout: 10000,
            timeoutMsg:
                'Sponsored Disclaimer link not displayed after 10 seconds'
        });
        await expect(this.allField).toHaveText('Thank you!')*/

        await this.thankyouField.waitForDisplayed({
            timeout: 10000,
            timeoutMsg:
                'Thankyou Message not Displayed'
        });
    }
}

module.exports = new PHPSuccessPage();