import React, { Component } from 'react';
import Navigation from './components/Navigation';
import './App.css';

class App extends Component {
  componentDidMount() {
      console.log("stuff");
      fetch('https://a7a37537.ngrok.io/data').then(response => response.json()).then(data => console.log(data));
  }
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
