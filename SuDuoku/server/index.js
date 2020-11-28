const express = require('express')
const socketio = require('socket.io')
const http = require('http')
const cors = require('cors')

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

    socket.on('disconnect', () => {
        console.log("user has left")
    })
})


server.listen(PORT, () => console.log(`server has started on port ${PORT}`))
