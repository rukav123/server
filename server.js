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
          var countbd = connection.query("SELECT COUNT(1) FROM `user`", function(error, result, f){
            if(!(error)){
              var count = result[0]['COUNT(1)'];
              var user = connection.query("SELECT * FROM `user`", function(error, result, f){
                if(!(error)){
                  for (var i = 0; i < count; i++) {
                    socket.broadcast.send(result[i]['login']+data);
                    console.log();
                  }
                }
              });
            }
          });
    });
});
