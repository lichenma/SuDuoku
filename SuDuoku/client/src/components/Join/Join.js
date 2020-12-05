import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Join = () => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    
    return (
        <div className="joinOuterContainer">
        { /* language=CSS */ }
        <style jsx>{`
        html, body {
            font-family: 'Roboto', sans-serif;
            padding: 0;
            margin: 0;
        }
        
        #root {
            height: 100vh;
        }
        
        * {
            box-sizing: border-box;
        }
        
        .joinOuterContainer {
            display: flex;
            justify-content: center;
            text-align: center;
            height: 100vh;
            align-items: center;
            background-color: #1A1A1D;
        }
        
        .joinInnerContainer {
            width: 20%;
        }
        
        .joinInput {
            border-radius: 0;
            padding: 15px 20px;
            width: 100%;
        }
        
        .heading {
            color: white;
            font-size: 2.5em;
            padding-bottom: 10px;
            border-bottom: 2px solid white;
        }
        
        .button {
            color: #fff !important;
            text-transform: uppercase;
            text-decoration: none;
            background: #2979FF;
            padding: 20px;
            border-radius: 5px;
            display: inline-block;
            border: none;
            width: 100%;
        }
        
        .mt-20 {
            margin-top: 20px;
        }
        
        @media (min-width: 320px) and (max-width: 480px) {
            .joinOuterContainer {
            height: 100%;
            }
        
            .joinInnerContainer {
            width: 90%;
            }
        
        
        }
        
        button:focus {
            outline: 0;
        }
        `}
        </style>
            <div className="joinInnerContainer"> 
                <h1 className="heading">Join</h1>
                <div><input placeholder="Name" className="joinInput" type="text" onChange={(event)=> setName(event.target.value)} /></div> 
                <div><input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event)=> setRoom(event.target.value)} /></div> 
                <Link onClick={event => (!name || !room)? event.preventDefault(): null} to={`/game?name=${name}&room=${room}`}>
                    <button className="button mt-20" type="submit">Sign In</button>
                </Link>
            </div>
        </div>
    )
}

export default Join;