import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import io from "socket.io-client";
import { socket } from '../Socket/Socket';
import "./header.css";
// The Header creates links that can be used to navigate
// between routes.

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
        console.log(users);
        this.setState({
            ...newState
        });
    });
  }

render() {
    return (
      <header>
        <nav>
          <ul className="NavClass">
            <li>
              <NavLink exact to="/">
                Join
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">About </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
export { Header };