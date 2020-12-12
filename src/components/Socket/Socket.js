import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'

const ENDPOINT = 'https://suduoku-server.herokuapp.com/'
// for testing 
// const ENDPOINT = 'localhost:5000'
const socket = io(ENDPOINT)

export { socket };

