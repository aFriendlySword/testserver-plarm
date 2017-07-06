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

    const CONNECTED = "00";
    const PLAYERMOVE = "100";
    const ADDPLAYER = "101";
    const REMPLAYER = "102";
    const ADDSTONE = "201";
    const REMSTONE = "202";
    const ADDWOOD = "301";
    const REMWOOD = "302";
    const ADDCOIN = "401";
    const REMCOIN = "402";
    const JOINED_GAME = "1000";
    const LEFT_GAME = "2000";
    const MOUSE_COORDS = "500";
    const MOVE_START = "0100";
    const MOVE_STOP = "0010";
    const JOIN = "1234";
    const STONE = "20";
    const WOOD = "30";
    const COIN = "50";
    const USER = "1337";

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


