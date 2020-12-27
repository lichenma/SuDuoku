import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import Index from './pages/index'
import { Header } from '../Header/Header';
import { socket } from '../Socket/Socket';

const Game = ({ location }) => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const [connected, setConnected] = useState(true)
    useEffect(() => {
        const { name, room } = queryString.parse(location.search)

        setName(name); 
        setRoom(room);

        socket.emit('join', { name, room }, (error) => {
            if (error){
                alert(error); 
            }
        });

        // attempt to reconnect on disconnect
        socket.on('connect', () => {
            socket.emit('join', { name, room }, (error) => {
                if (error){
                    alert(error); 
                }
            });
            setConnected(true); 
        });

        socket.on('disconnect', () => {
            setConnected(false); 
        })
    }, [location.search])

    return (
        <div>
            <Header/>
            <Index connected={connected} name={name}></Index>
        </div>
    )
}

export { Game };

