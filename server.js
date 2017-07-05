var sys = require("sys"),
    http = require("http");

var http = require('http');
var server = http.createServer(function (request, response) { });

server.listen(1234, function () {
    console.log((new Date()) + ' Server is listening on port 1234');
});

var WebSocketServer = require('websocket').server;
wsServer = new WebSocketServer({
    httpServer: server
});

wsServer.on('request', function (r) {
    // Code here to run on connection
    var connection = r.accept('echo-protocol', r.origin);
    var count = 0;
    var clients = {};
    var id = count++;
    clients[id] = connection;

    connection.on('message', function (message)) {
    
    }


});


