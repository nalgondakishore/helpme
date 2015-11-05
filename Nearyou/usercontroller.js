var userModel = require('./model');
var db = require('./db');
var httputility = require('./httputility');

exports.getUsers = function(request,response) {
      var modelobj = userModel.User;
      db.getall(modelobj,function(data,err) {
        if (err) { httputility.sendHttpdataerror(request, response, err); }
        else{ httputility.sendHttpdata(request, response, data); }
 });
 }
 exports.find = function(request,response) { 
  var modelobj = userModel.User;
  var userobj = {username:'user3',password:'pass3'};
  db.findobj(modelobj,userobj,function(data,err) { 
  	if(err) console.log(err);
  	console.log(data);
  });

 }
 
 exports.createUser = function(request,response){
    var modelobj = userModel.User;
    var jsonstring = '';
    request.on('data', function (data) {
        jsonstring += data;
    });
    
    request.on('end', function () {
        try {
            if (!jsonstring) throw new Error("Input is not Valid");
            var userobj = JSON.parse(jsonstring);
            db.createobj(modelobj, JSON.parse(jsonstring), function (data, err) {
                if (err) { httputility.sendHttpdataerror(request, response, err); }
                else {
                    data = { data: "User Created suucessfully" };
                    httputility.sendHttpdata(request, response, data);
                }
            });
        } catch (ex) {
            httputility.sendHttpdataerror(request, response, ex);
        }
    });
 }

exports.updateUser = function(request,response){
    var modelobj = userModel.User;
    var jsonstring = '';
    request.on('data', function (data) {
        jsonstring += data;
    });
    
    request.on('end', function () {
        
        try {
            if (!jsonstring) throw new Error("Input is not Valid");
            var userobj = JSON.parse(jsonstring);
            if (userobj.username != '' && userobj.username != 'undefined') {
                var queryobj = { username: userobj.username };
                db.updateobj(modelobj, queryobj, userobj, function (data, err) {
                    if (err) { httputility.sendHttpdataerror(request, response, err); }
                    else {
                        data = { data: "User data updated suucessfully" };
                        httputility.sendHttpdata(request, response, data);
                    }
                });
            }
            else {
                httputility.sendHttpdataerror(request, response, "Input Data is Invalid");
            }
        }
        catch (ex) {
            httputility.sendHttpdataerror(request, response, ex);
        }
    });

 }

exports.deleteUser = function(request,response,requestbody){
    var modelobj = userModel.User;
    var jsonstring = '';

    request.on('data', function (data) {
        jsonstring += data;
    });
    
    request.on('end', function () {
        try {
            if (!jsonstring) throw new Error("Input is not Valid");
            var userobj = JSON.parse(jsonstring);
            db.deleteobj(modelobj, userobj, function (data, err) {
                if (err) { httphandler.sendHttpdataerror(request, response, err); }
                else {
                    data = { data: "User data deleted suucessfully" };
                    httputility.sendHttpdata(request, response, data);
                }
            });
        } catch (ex) {
            httputility.sendHttpdataerror(request, response, ex);
        }
    });
    
 }
 
