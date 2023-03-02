const express = require('express');
const app = express();
const http = require('http').createServer(app);
var io = require('socket.io')(http);

io.on("connection",(socket) => {
    console.log("Cliente " + socket.id + " Se conectou");
    
    socket.on("msg", (data) => {
      io.emit("showMsg", data)
    });

    socket.on("disconnect", () => {
        console.log("Cliente " + socket.id + " Desconectou"); // undefined
      });
})

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});