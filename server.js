var express = require('express');
var body = require('body-parser');
var sok = require('socket.io')(3001);
const mysql = require('mysql');
var server = express();

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'uran',
  password : 'VVLsOATL_s_L3G',
});

connection.connect();
console.log('Ок');

server.listen('3000', function () {
    console.log('ПУСК!');
});
sok.on('connection', function (socket) {
    socket.send('Все знают что Андрей не купил Данилу мясо!');
        socket.on('message', function(data){
        socket.broadcast.send(data);
    });
});
