const { Given, When, Then } = require('@cucumber/cucumber')

Given(/^I open "([^"]*)?" page$/, async (url) => {
    await browser.maximizeWindow()
    await browser.url(url)
});