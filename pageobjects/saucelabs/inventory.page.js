class SaucelabsInventoryPage {

    get sortField(){
        return $('//*[@id="header_container"]/div[2]/div[2]/span/select')
    }

    get backpackItemField(){
        return $('//*[@id="add-to-cart-sauce-labs-backpack"]')
    }

    get anotherItemField(){
        return $('//*[@id="add-to-cart-sauce-labs-bolt-t-shirt"]')
    }

    get cartField(){
        return $('//*[@id="shopping_cart_container"]/a')
    }



    async sort(choice){
        await this.sortField.selectByAttribute("value", choice)   
    }

    async addItem(item){
        if(item == "saucelabbackpack"){
            this.backpackItemField.click()
        }
        if(item == "anotheritem"){
            this.anotherItemField.click()
        }
    }

    async cart(){
        this.cartField.click()
    }

}

module.exports = new SaucelabsInventoryPage();