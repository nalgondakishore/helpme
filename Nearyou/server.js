var http = require('http');
var requestHandler = require('./requesthandler');
var settings = require('./settings');
var mongoose = require('mongoose');

mongoose.connect(settings.mongoconnectionstring);
var server = http.createServer(requestHandler.handleRequest) 
server.listen(8080);
console.log("Server is running in port 8080");

