const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors');
const { addUser, removeUser, getUser, getUserInRoom } = require('./user');

const PORT = process.env.PORT || 5000; 

const router = require('./router'); 

const app = express();
const server = http.createServer(app);

app.use(router);
app.use(cors);

const io = socketio(server);


io.on('connection',(socket) => {
    console.log('We have new connection');

    socket.on('join', ({name,room}, callback) => {
        const {error,user} = addUser({ id: socket.id, name, room });

        if(error) return callback(error);

        socket.emit('message',{user: 'admin', text: `${user.name}, welcome to to the room ${user.room}` });

        socket.broadcast.to(user.room).emit('message',{ user: 'admin', text: `${user.name}, has joined!` });

        socket.join(user,room);
    
        callback();
    })

    socket.on('sendMessage', (message,callback) => {
        const user = getUser(socket.id);
        

        io.to(user.room).emit('message', { user: user.name, text: message })
        callback();
    })


    socket.on('disconnect', () => {
        console.log('User had left');
    })
})

server.listen(PORT, () => {
    console.log(`Server has started on ${PORT}`)
});
