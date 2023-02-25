const { Given, When, Then } = require('@cucumber/cucumber')
var assert = require('assert');

const saucelabsLoginPage = require('../pageobjects/saucelabs/login.page')
const saucelabsInventoryPage = require('../pageobjects/saucelabs/inventory.page')
const SaucelabsCartPage = require('../pageobjects/saucelabs/cart.page')
const SaucelabsCheckoutPage = require('../pageobjects/saucelabs/checkout.page')



When(/^I fill the credentials with "([^"]*)?" and "([^"]*)?" and login$/, async (username,password) => {
    await saucelabsLoginPage.login(username,password)
});

When(/^I click on "([^"]*)?" button$/, async (action) => {
    if(action == "sorting"){
        await saucelabsInventoryPage.sort("za")
    }
    if(action == "continueshoping"){
        await SaucelabsCartPage.continueshopping()
    }
    if(action == "checkout"){
        await SaucelabsCartPage.checkout()
    }
});

When(/^I add "([^"]*)?"$/, async (item) => {
    await saucelabsInventoryPage.addItem(item)
});

When(/^I go to cart$/, async () => {
    await saucelabsInventoryPage.cart()
});

When(/^I fill address with "([^"]*)?" "([^"]*)?" "([^"]*)?"$/, async (fname,lname,zip) => {
    await SaucelabsCheckoutPage.fillform(fname,lname,zip)
});

Then(/^I should get successful response$/, async () => {
    await console.log("TestCase Passed")
    await SaucelabsCheckoutPage.complete
});






