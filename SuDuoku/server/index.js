const express = require('express')
const socketio = require('socket.io')
const http = require('http')
const cors = require('cors')

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

const PORT = process.env.PORT || 5000

const router = require('./router')

const app = express(); 


app.use(router)

const server = http.createServer(app); 
const io = socketio(server, {
    cors: {
        origin: '*',
    }
}); 


io.on('connection', (socket) => {
    console.log("we have a new connection")
    socket.on('join', ({ name, room}, callback) => {
        const { error, user } = addUser({ id: socket.id, name, room }); 

        if (error){
            return callback(error); 
        }

        socket.join(user.room); 
        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
        callback();
    });

    socket.on('disconnect', () => {
        console.log("user has left")
        const user = removeUser(socket.id); 

        if (user) {
            io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
        }
    })
});

server.listen(PORT, () => console.log(`server has started on port ${PORT}`))
