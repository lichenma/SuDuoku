import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import io from "socket.io-client";
import { socket } from '../Socket/Socket';
import { Navbar, Nav } from 'react-bootstrap';
import "./header.css";
import { Icon } from './Icon' 
import { AvatarGroup } from '@material-ui/lab';

import 'bootstrap/dist/css/bootstrap.min.css'

class Header extends Component {
  constructor() {
    super();
    this.state = {
      currentUsers: []
    };
  }

  componentWillMount() {
    socket.on("roomData", ({ users }) => {
        const newState = {}; 
        newState.currentUsers = users; 
        this.setState({
            ...newState
        });
    });
  }

render() {
    return (
      <header>
        <Navbar bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Join</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>
                <Nav>
                    <AvatarGroup max={3}>
                    {this.state.currentUsers.map(user => (
                        <li key={user.name}>
                            <Icon name={user.name}></Icon>
                        </li>
                    ))}
                    </AvatarGroup>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}
export { Header };