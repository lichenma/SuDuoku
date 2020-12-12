import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'

const ENDPOINT = 'localhost:5000'
const socket = io(ENDPOINT)

export { socket };

