import React, { Component } from 'react';
import Navigation from './components/Navigation';

import './App.css';

class App extends Component {
  componentDidMount() {
      console.log("stuff");
      fetch('df8d755d.ngrok.io/data').then(response => response.json()).then(data => console.log(data))
  }
  render() {
    return (
      <Navigation />
    );
  }
}

export default App;
