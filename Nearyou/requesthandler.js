var usercontroller = require('./usercontroller');
var url = require('url');
var httphandler = require('./httputility');

exports.handleRequest = function (request,response) { 

    switch (request.method) {
        case 'GET':
            handleGETRequest(request, response);
            break;
        case 'POST':
            handlePOSTRequest(request, response);
            break;
        case 'PUT':
            handlePUTRequest(request, response);
            break;
        case 'DELETE':
            handleDELETERequest(request, response);
            break;
        default:
            handleBadRequest(request, response);
    }
}


function handleGETRequest(request, response) {
    var url_parts = url.parse(request.url);
    switch (url_parts.pathname) {
        case '/userprofile':
            usercontroller.getUsers(request, response);
            break;
        default:
            console.log("GET default");
            httphandler.sendHttp404error(url_parts.pathname, request, response);
    }
    
}

function handlePOSTRequest(request, response) {
    var url_parts = url.parse(request.url);
    switch (url_parts.pathname) {
        case '/userprofile':
            usercontroller.updateUser(request, response);
            break;
        default:
            console.log("POST default");
            httphandler.sendHttp404error(url_parts.pathname, request, response);
    }
}

function handlePUTRequest(request, response) {
    var url_parts = url.parse(request.url);
    switch (url_parts.pathname) {
        case '/userprofile':
            usercontroller.createUser(request, response);
            break;
        default:
            console.log("PUT default");
           httphandler.sendHttp404error(url_parts.pathname, request, response);
    
    }
}

function handleDELETERequest(request, response) {
    var url_parts = url.parse(request.url);
    switch (url_parts.pathname) {
        case '/userprofile':
            usercontroller.deleteUser(request, response);
            break;
        default:
            console.log("DELETE default");
            httphandler.sendHttp404error(url_parts.pathname, request, response);
    
    }
}

function handleBadRequest(request, response) {
    httphandler.sendHttpdataerror(request, response,"bad request found")
}
