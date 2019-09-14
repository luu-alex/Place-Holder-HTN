import React, { Component } from 'react';
import Navigation from './components/Navigation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <Navigation />
      <div className="container">
      <h1>PlaceHolder</h1>
      </div>
      </div>
    );
  }
}

export default App;
