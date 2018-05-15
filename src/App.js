import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PlayerRegistration from './PlayerRegistration'













class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Sublist</h1>
        </header>
        <p className="App-intro">
         Need a player for your game? Sign up to see available players.
        </p>
        <PlayerRegistration />

      </div>
    );
  }
}

export default App;