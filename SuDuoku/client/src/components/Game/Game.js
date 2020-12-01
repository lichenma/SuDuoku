import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import Index from './pages/index'

let socket;

const Game = ({ location }) => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const ENDPOINT = 'localhost:5000'

    useEffect(() => {
        const { name, room } = queryString.parse(location.search)

        socket = io(ENDPOINT)

        console.log(socket);

        setName(name); 
        setRoom(room);
    }, [ENDPOINT, location.search])

    return (
       <Index></Index>
    )
}

export default Game;

