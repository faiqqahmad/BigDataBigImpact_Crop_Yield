import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="bar">
      <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"></link>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div class="navbar-bottom-text">
        <h1>Crop Yield Model</h1>
        </div>
      </nav>
    );
  }
}

export default Navbar;