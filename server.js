var express = require('express');
var body = require('body-parser');
var sok = require('socket.io')(3001);
var server = express();

server.get('/', function (requier, response) {
    response.send('123');
});
server.get('/piple/:id', function (requier, response) {
    response.send(piple);
});

server.listen('3000', function () {
    console.log('ПУСК!');
})

sok.on('connection', function (socket) {
    console.log('Новое подключение');
});