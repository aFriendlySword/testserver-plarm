var sys = require("sys"),
    http = require("http");

var http = require('http');
var server = http.createServer(function (request, response) { });

server.listen(8080, function () {
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

    clients[id].send(JSON.stringify({
        type: CONNECTED,
    }));

    connection.on('message', function (message)) {
        var msgString = JSON.parse(message.data);

        switch (message.type) {
            case JOIN:
                clients[id].name = message.name;
                clients[id].color = message.color;
                clients[id].x = 350;
                clients[id].y = 300;                

            case MOUSE_COORDS:
                clients[id].angle = message.rot;
                break;
            case MOVE_START:

        }

    }


});


