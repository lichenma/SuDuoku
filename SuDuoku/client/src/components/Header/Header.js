import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import io from "socket.io-client";
import "./header.css";
// The Header creates links that can be used to navigate
// between routes.
var socket;
class Header extends Component {
/* Creating a Socket client and exporting it at the end to be used across the Place Order, Kitchen, etc components*/
  constructor() {
    super();
    this.state = {
      endpoint: 'http://localhost:5000/'
    };
    socket = io(this.state.endpoint);
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
export { Header, socket };