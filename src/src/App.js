import React, { Component } from 'react';
import './App.css';
import SnakeGame from './components/SnakeGame';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Snake Game</h1>
        <SnakeGame />
      </div>
    );
  }
}

export default App;
