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

var click = 0;

sok.on('connection', function (socket) {
  var local_click = 0;
    socket.send('{"type" : "chat_message", "message" : "Добро подажаловать! Андрей купи мясо..., уже не надо!"}');

    socket.on('message', function(data){
      var pred_msg = JSON.parse(data);
      if(pred_msg.type == "chat_message"){
        var send = '{"type" : "chat_message", "message" : "'+pred_msg.message+'"}';
        socket.broadcast.send(send);
      }
      else if(pred_msg.type == "online_message"){
        var send = '{"type" : "online_message", "message" : "'+pred_msg.message+'"}';
        socket.broadcast.send(send);
      }
      else if(pred_msg.type == "click_message"){
        local_click++;
        click++;
        var send_l = '{"type" : "click_message_local", "message" : "'+local_click+'"}';
        var send = '{"type" : "click_message", "message" : "'+click+'"}';
        console.log(send_l);
        console.log(send);
        socket.broadcast.send(send_l);
        socket.broadcast.send(send);
      }


    });
});
