const { Given, When, Then } = require('@cucumber/cucumber')
var assert = require('assert');

const phpTravelsLoginPage = require('../pageobjects/phptravels/login.page')
const phpTravelsSuccessPage = require('../pageobjects/phptravels/success.page')


When(/^I fill the requestform with "([^"]*)?" "([^"]*)?" "([^"]*)?" "([^"]*)?"$/, async (fname,lname,bname,email) => {
    await phpTravelsLoginPage.fillRequestForm(fname,lname,bname,email)
});

When(/^I fill the security$/, async () => {
    await phpTravelsLoginPage.fillSecurityForm()
});

When(/^I click on submit button$/, async () => {
    await phpTravelsLoginPage.submitForm()
});

Then(/^I should get positive response$/, async () => {
    await phpTravelsSuccessPage.successPage()
});




