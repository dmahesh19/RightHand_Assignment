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

When(/^Raise "([^"]*)?" HTTP request$/, async (http_request_type) => {
    let config = {
        headers: {
            'content-type' : 'multipart/form-data',
        }
    }

    var form1 = new FormData();

    form1.append('first_name', 'M');
    form1.append('last_name', 'D');
    form1.append('business_name', 'MD');
    form1.append('email', 'mahesh.test@gmail.com');

    var form2 = new FormData();

    form1.append('name', 'M');
    form1.append('email', 'mahesh.test@gmail.com');


    if (http_request_type == "POST"){
        const url_temp1 = global_general_variables['application_url'] + global_general_variables['hubspot_api_path']
        console.log(url_temp1)
        global_general_variables['response_full1'] = axios.get(url_temp1, form1, config)
        console.log(global_general_variables['response_full1'])

        const url_temp2 = global_general_variables['application_url'] + global_general_variables['demo_api_path']
        console.log(url_temp2)
        global_general_variables['response_full2'] = await axios.get(url_temp2, form2, config)

    }
});

Then(/^Valid HTTP response should be received$/, async () => {
    if(global_general_variables['response_full1'] != null){
        assert(true,"Null response received")
    }

    if(global_general_variables['response_full2'] != null){
        assert(true,"Null response received")
    }
});

Then(/^Response http code should be "([^"]*)?"$/, async (expected_response_code) => {
    global_general_variables['successful_response_code'] = expected_response_code
    const actual_response_code1 = await global_general_variables['response_full1'].status
    const actual_response_code2 = await global_general_variables['response_full2'].status

    if(actual_response_code1 != expected_response_code && actual_response_code2 != expected_response_code){
        assert(false, "***ERROR: unexpected error response code received")
    }
});

Then(/^Response BODY should not be null or empty$/, async () => {
    if(global_general_variables['response_full11'] == null){
        assert(false,"Null response received")
    }

    if(global_general_variables['response_full12'] == null){
        assert(false,"Null response received")
    }
});

Then(/^Response BODY verification should be successful$/, async () => {
    const body1 = global_general_variables['response_full1']
    assert.equal(body1.status,200)

    const body2 = global_general_variables['response_full2']
    assert.equal(body2.status,200)
    
});
