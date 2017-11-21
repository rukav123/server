var express = require('express');
var body = require('body-parser');
var sok = require('socket.io')(3001);
var server = express();

server.get('/', function (requier, response) {
    response.send('Если вы видите эту надпись, то это значит, что сервер запущен и работает!');
});

server.listen('3000', function () {
    console.log('ПУСК!');
})

sok.on('connection', function (socket) {
    socket.send('Добро пожаловать!');
        socket.on('message', function(data){
        socket.broadcast.send(data);
    });
});
