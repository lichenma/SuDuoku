import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Join from './components/Join/Join';
import { Game } from './components/Game/Game';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => (
    <MuiThemeProvider>
        <Router>
            <Route path="/" exact component={Join} /> 
            <Route path="/game" component={Game} /> 
        </Router>
    </MuiThemeProvider>
);

export default App; 