const { Given, When, Then } = require('@cucumber/cucumber')
var assert = require('assert');
const axios = require('axios');
var FormData = require('form-data');

var global_general_variables = {};
var http_request_header = {};

Given('Set url as {string}', function (app_url) {
    global_general_variables['application_url']=app_url
});

Given(/^Set api path as "([^"]*)?"$/, async (api_path) => {
    if (api_path == "hubspot"){
        global_general_variables['hubspot_api_path'] = api_path    
    }
    if (api_path == "demo_email"){
        global_general_variables['demo_api_path'] = api_path    
    }
});

When(/^Set HEADER param request "([^"]*)?" as "([^"]*)?"$/, async (header_name,header_value) => {
    http_request_header[header_name] = header_value
});

When(/^Raise "([^"]*)?" HTTP request for "([^"]*)?"$/, async (http_request_type,api_path) => {
    let config = {
        headers: {
            'content-type' : 'multipart/form-data',
        }
    }

    var form = new FormData();

    if (api_path == "hubspot" && http_request_type == "POST"){
        form.append('first_name', 'M');
        form.append('last_name', 'D');
        form.append('business_name', 'MD');
        form.append('email', 'mahesh.test@gmail.com');
        const url_temp = global_general_variables['application_url'] + global_general_variables['hubspot_api_path']
        console.log(url_temp)
        global_general_variables['response_full'] = await axios.post(url_temp, form, config)
        console.log(global_general_variables['response_full'])
    }

    if (api_path == "demo_email" && http_request_type == "POST"){
        form.append('name', 'M');
        form.append('email', 'mahesh.test@gmail.com');
        const url_temp = global_general_variables['application_url'] + global_general_variables['demo_api_path']
        console.log(url_temp)
        global_general_variables['response_full'] = await axios.post(url_temp, form, config)

    }
});

Then(/^Valid HTTP response should be received$/, async () => {
    if(global_general_variables['response_full'] != null){
        assert(true,"Null response received")
    }
});

Then(/^Response http code should be "([^"]*)?"$/, async (expected_response_code) => {
    global_general_variables['successful_response_code'] = expected_response_code
    const actual_response_code = await global_general_variables['response_full'].status
    
    if(actual_response_code != expected_response_code){
        assert(false, "***ERROR: unexpected error response code received" + actual_response_code)
    }
});

Then(/^Response BODY should not be null or empty$/, async () => {
    if(global_general_variables['response_full'] == null){
        assert(false,"Null response received")
    }

});

Then(/^Response BODY verification should be successful$/, async () => {
    const body1 = global_general_variables['response_full']
    assert.equal(body1.status,200)    
});
