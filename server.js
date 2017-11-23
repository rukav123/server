var express = require('express');
var body = require('body-parser');
var sok = require('socket.io')(3001);
const mysql = require('mysql');
var server = express();
//Подключение к бд
var connection = mysql.createConnection({
  host     : '5.63.158.31',
  user     : 'gus',
  password : '1aMhqL8XrS',
  database : 'my_base'
});

//установление соединения
connection.connect();
console.log('Ок');


server.listen('3000', function () {
    console.log('ПУСК!');
});
sok.on('connection', function (socket) {
    socket.send('Все знают что Андрей не купил Данилу мясо!');
        socket.on('message', function(data){
                    var pred_msg = JSON.parse(data);
                    var msg = result[i]['login']+": "+pred_msg;
                    socket.broadcast.send(msg);
                    console.log(msg);
        });
});
