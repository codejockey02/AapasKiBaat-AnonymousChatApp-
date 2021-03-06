const express = require('express');
const app = express();
const env = require('./env');
app.set('view engie', 'ejs');
app.use(express.static('public'));

app.get('/', async (req, res) => {
    res.render('index.ejs');
});
env();
const port = process.env.PORT;

server = app.listen(port);
console.log('Working on ' + port);
const io = require('socket.io')(server);

io.on('connection', (socket) => {
    console.log('New user connected')

    socket.username = "Anonymous"

    socket.on('change_username', (data) => {
        socket.username = data.username
    });

    socket.on('new_message', (data) => {
        io.sockets.emit('new_message', {
            message: data.message,
            username: socket.username
        });
    });

    socket.on('typing', (data) => {
        socket.broadcast.emit('typing', {
            username: socket.username
        })
    });
});