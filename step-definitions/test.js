/*const axios = require('axios');
var FormData = require('form-data');
var fs = require('fs');

var global_general_variables = {};
var http_request_header = {};

http_request_header['header_name'] = 'multipart/form-data';

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



url_temp1 = 'https://phptravels.com/hubspot'

global_general_variables['response_full1'] = await axios.post(url_temp1, form1, config)

console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"+global_general_variables['response_full1'])

//fs.writeFile('newfile.txt', JSON.stringify(global_general_variables['response_full1'].formData()), function (err) {
//    if (err) throw err;
//    console.log('File is created successfully.');
//  })
*/