
exports.sendHttp404error = function (url, req, res) {
    res.writeHead(404, "Input Not Found", { "Content-Type": "application/json" });
    res.write(JSON.stringify({ data: "url not found:" + url }));
    res.end();
}

exports.sendHttp500error = function (req, res,err) {
    res.writeHead(500, "Internal Error Occured", { "Content-Type": "application/json" });
    res.write(JSON.stringify({ data: "Internal Error Occured:" + err }));
    res.end();
}

exports.sendHttpdataerror = function (req, res, err) {
    res.writeHead(400, "Error Occured while processing request", { "Content-Type": "application/json" });
    res.write(JSON.stringify({ data: "Error Occured while processing request:" + err }));
    res.end();
}

exports.sendHttpdata = function (req, res, data){
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(data));
    res.end();
}